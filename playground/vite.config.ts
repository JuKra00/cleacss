import { defineConfig } from 'vite';
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

import cssClassChecker from './vite-css-class-checker';


export default defineConfig({
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
