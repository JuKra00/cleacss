![cleacss logo](assets/logo-cleacss.svg)

# cleacss

Having used many css frameworks over the years I shifted to building my own based on modern standards. A CSS framework for developers who love writing CSS. Rather than abstracting away CSS or overwhelming you with utility classes, cleacss provides a solid foundation with essential defaults while empowering you to write your own styles.

## Installation

```bash
npm install cleacss
```

## Features

- Built on modern CSS features (custom properties, subgrid, `light-dark()`, container queries)
- Fluid spacing and typography via `clamp()` - scales smoothly across viewports
- OKLCH color system with automatic dark mode support
- 5 responsive breakpoints (`s`, `m`, `l`, `xl`, `2xl`) usable on most utility classes
- Customizable through CSS custom properties on `:root`

## Variables

All customization happens through CSS custom properties:

```css
:root {
  --color-accent: oklch(0.6 0.3 150);
  --color-neutral-h: 150;
  --font-family: "Inter", sans-serif;
  --font-family-title: "Playfair Display", serif;
  --space-default: var(--space-m-xl);
}
```

Key variable groups: colors (neutral scale, semantic, selection), spacing (fixed, paired, and jump sizes), typography (fluid font sizes, families, weights, line heights).

## Usage

```js
import "cleacss";                    // compiled + minified CSS
import "cleacss/untranspiled";       // unminified CSS with custom media queries
import "cleacss/variables";          // only CSS custom properties
import "cleacss/media-queries";      // only media query definitions
import "cleacss/scss";               // source SCSS
```

## Documentation

Full documentation at [moinfra.me](https://moinfra.me/docs/moinframe-cleacss)

## License

MIT - see [LICENSE](LICENSE) for details.
