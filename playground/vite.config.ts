import { defineConfig } from 'vite';
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import cssClassChecker from './vite-css-class-checker';

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        breakout: resolve(__dirname, 'examples/breakout/index.html'),
      },
    },
  },
  css: {
    transformer: "lightningcss",
    lightningcss: {
      drafts: {
        customMedia: true,
      },
      targets: browserslistToTargets(browserslist(">= 0.25%")),
    },
  },
  plugins: [
    cssClassChecker({
      ignoredClasses: ['dynamic-class', 'generated-class'],
    }),
  ]
});
