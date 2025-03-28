// Define the CleaCSS Playground web component
class CleaCSSPlayground extends HTMLElement {
  private container: HTMLElement;
  private styleElement: HTMLStyleElement;
  public shadowRoot: ShadowRoot | null = null

  constructor() {
    super();

    // Create a shadow DOM
    this.shadowRoot = this.attachShadow({ mode: "open" });

    // Create a container for the content
    this.container = document.createElement("div");
    this.container.classList.add("playground-container");

    // Create a style element for the shadow DOM
    this.styleElement = document.createElement("style");

    // Add elements to shadow DOM
    this.shadowRoot?.appendChild(this.styleElement);
    this.shadowRoot?.appendChild(this.container);

    // Set default styles for the container
    this.styleElement.textContent = `
      .playground-container {
        padding: 20px;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        background-color: #f9f9f9;
        margin: 16px 0;
      }
    `;
  }

  connectedCallback() {
    // Get the content inside the custom element
    const content = this.innerHTML;
    this.container.innerHTML = content;

    // Load your CSS framework
    this.loadCSSFramework();
  }

  loadCSSFramework() {
    // Create a link element for your CSS framework
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = this.getAttribute("src") || "/path/to/your/cleacss.css";

    // Add the link to the shadow DOM
    this.shadowRoot?.insertBefore(linkElement, this.styleElement);
  }

  // Handle attribute changes
  static get observedAttributes() {
    return ["src"];
  }
}

// Register the custom element
customElements.define("cleacss-playground", CleaCSSPlayground);
