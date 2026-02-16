import { defineConfig } from 'vite';
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    outDir: resolve(__dirname, '../dist/lib'),
    lib: {
      entry: {
        'grid-visualizer': resolve(__dirname, 'src/grid-visualizer.ts')
      },
      name: "cleacss",
      formats: ["es"],
    }
  },
  css: {
    transformer: "lightningcss",
    lightningcss: {
      drafts: {
        customMedia: true,
      },
      targets: browserslistToTargets(browserslist(">= 0.25%")),
    },
  }
});
