// vite-css-class-checker.js
import * as cheerio from "cheerio";
import postcss from "postcss";
import type { Plugin } from "vite";

/**
 * Vite plugin to detect HTML classes that are not defined in CSS files
 * @param {Object} options - Plugin options
 * @param {string[]} options.ignoredClasses - Array of class names to ignore
 * @param {boolean} options.debug - Whether to enable debug logging
 * @param {number} options.initDelay - Delay in ms before starting to check classes
 * @returns {Object} Vite plugin
 */
export default function cssClassChecker(options: { ignoredClasses?: string[], debug?: boolean, initDelay?: number } = {}): Plugin {
  const { ignoredClasses = [], debug = false, initDelay = 2000 } = options;

  // Store all CSS class names
  const cssClasses = new Set();
  // Store missing classes
  let missingClasses = new Set();
  // Track plugin initialization status
  let isReady = false;

  /**
   * Extract class names from CSS content
   * @param {string} css - CSS content
   */
  const extractClassesFromCSS = (css) => {
    try {
      postcss.parse(css).walkRules((rule) => {
        if (!rule.selector) return;

        // Match class selectors that may contain escaped characters like \:
        // and other valid CSS class name characters
        const selectorParts = rule.selector.split(/[\s,>+~[\]()]/);

        // Process each part of the selector
        const classSelectors = [];
        for (const part of selectorParts) {
          // Extract class names with potential escaped characters
          const matches = part.match(
            /\.[a-zA-Z0-9_\-\\:@]+(?:[\.:](?:[a-zA-Z0-9_\-\\:@])+)*/g,
          );
          if (matches) {
            // For each match like '.class1.class2', split into individual classes

            for (const match of matches) {
              // Split on dots that aren't escaped (not preceded by \)
              const classes = match.split(/(?<!\\\.)\./).filter(Boolean);
              for (const cls of classes) {
                if (cls) classSelectors.push(`.${cls}`);
              }
            }
          }
        }

        if (classSelectors) {
          for (const selector of classSelectors) {
            // Normalize escaped colons: convert '\:' to ':' for comparison with HTML
            const className = selector.substring(1).replace(/\\:/g, ":");
            cssClasses.add(className);

            // Log when we find classes with colons if debug is enabled
            if (debug && className.includes(":")) {
              console.log(
                `[css-class-checker] Found CSS class with colon: ${className} (from selector: ${selector})`,
              );
            }
          }
        }
      });
    } catch (error) {
      console.error("[css-class-checker] Error parsing CSS:", error.message);
    }
  };

  return {
    name: "vite-css-class-checker",

    // Apply the plugin
    apply: "serve", // Only apply in dev mode

    // This hook is called to transform a file
    async transform(code, id, options) {
      // Check if this is a CSS file
      if (/\.(css|scss|less|styl|stylus|pcss|postcss)($|\?)/.test(id)) {
        // Extract class names from the CSS
        extractClassesFromCSS(code);

        // Log progress occasionally
        if (cssClasses.size % 50 === 0) {
          console.log(
            `[css-class-checker] Processed CSS (${cssClasses.size} classes found so far)`,
          );
        }
      }

      // Return null to continue with the transformation chain
      return null;
    },

    // Configure the dev server
    configureServer(server) {
      // Initial log
      console.log("[css-class-checker] Initializing CSS class checker...");

      // Process all CSS when server is ready
      server.httpServer?.once("listening", () => {
        console.log(
          `[css-class-checker] Waiting ${initDelay}ms for CSS processing to complete...`,
        );

        // Set a timeout to allow CSS processing to complete
        setTimeout(() => {
          isReady = true;
          console.log(
            `[css-class-checker] Initialization complete - found ${cssClasses.size} CSS classes`,
          );
        }, initDelay);
      });

      // After each HMR update, check HTML
      server.middlewares.use((req, res, next) => {
        // Skip processing if not ready
        if (!isReady) {
          next();
          return;
        }

        // Only continue with HTML processing after response
        next();

        // Only process HTML responses
        if (res.getHeader?.("Content-Type")?.includes("text/html")) {
          // Hook into the response to get the HTML
          const originalWrite = res.write;
          const originalEnd = res.end;
          const chunks = [];

          // Collect response chunks
          res.write = function (chunk) {
            if (chunk) {
              chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
            }
            return originalWrite.apply(this, ...theArgs);
          };

          // Process collected HTML when response ends
          res.end = function (chunk) {
            if (chunk) {
              chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
            }

            try {
              // Reconstruct the HTML
              if (chunks.length > 0) {
                const html = Buffer.concat(chunks).toString("utf-8");

                // Process the HTML to check classes (without modifying it)
                processHTML(html);
              }
            } catch (err) {
              console.error("[css-class-checker] Error processing HTML:", err);
            }

            return originalEnd.apply(this, ...theArgs);
          };
        }
      });
    },

    // Process HTML
    transformIndexHtml(html) {
      // Skip if not ready
      if (!isReady) {
        return html;
      }
      processHTML(html);
      return html;
    },
  };

  /**
   * Process HTML content and check for missing classes
   * @param {string} html - HTML content
   */
  function processHTML(html) {
    // Skip processing if not ready
    if (!isReady) {
      return;
    }

    // Reset missing classes for each HTML transformation
    missingClasses = new Set();

    // Parse HTML with cheerio
    const $ = cheerio.load(html);

    // Extract classes from HTML
    $("[class]").each((_, element) => {
      const classAttr = $(element).attr("class");
      // Split by whitespace to get individual class names
      const classNames = classAttr.split(/\s+/).filter(Boolean);

      for (const className of classNames) {
        // Debug logging for classes with colons
        if (debug && className.includes(":")) {
          const exists = cssClasses.has(className);
          console.log(
            `[css-class-checker] HTML class with colon: ${className} (${exists ? "found" : "not found"} in CSS)`,
          );
        }

        // Check if the class exists in CSS and not in ignored classes
        if (!cssClasses.has(className) && !ignoredClasses.includes(className)) {
          missingClasses.add(className);
        }
      }
    });

    // Report missing classes
    if (missingClasses.size > 0) {
      console.log(
        "\n%c[css-class-checker] Missing CSS Classes Detected",
        "background: #FFF3CD; color: #856404; font-weight: bold; padding: 2px 5px; border-radius: 3px;",
      );
      console.log(
        "%cThe following classes were found in HTML but not in CSS:",
        "font-style: italic;",
      );

      // Group missing classes by their prefix (if any)
      const groupedClasses = {};
      for (const className of missingClasses) {
        const prefix = className.includes("-")
          ? className.split("-")[0]
          : "other";
        if (!groupedClasses[prefix]) {
          groupedClasses[prefix] = [];
        }
        groupedClasses[prefix].push(className);
      }

      // Log each group of missing classes
      for (const [prefix, classes] of Object.entries(groupedClasses)) {
        console.log(
          `%c${prefix}:%c ${classes.join(", ")}`,
          "color: #007bff; font-weight: bold;",
          "color: inherit;",
        );
      }

      console.log(
        `%cTotal missing classes: ${missingClasses.size}`,
        "font-weight: bold;",
      );
      console.log("\n");
    }
  }
}
