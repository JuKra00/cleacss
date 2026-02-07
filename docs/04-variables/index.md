---
title: Variables
---

cleacss is built on CSS custom properties. Every visual aspect can be customized by overriding these variables at `:root` or on individual elements.

Variables are designed to be:
- **Composable**: Components use the same spacing, color, and typography scales
- **Themeable**: Change the look by adjusting a few key values
- **Dark mode ready**: Neutral colors automatically invert in dark mode

## Quick customization

```css
:root {
  /* Change accent color */
  --color-accent-h: 220;  /* Blue */
  --color-accent-c: 0.3;
  --color-accent-l: 0.6;

  /* Warm neutrals */
  --color-neutral-h: 30;
  --color-neutral-c: 0.02;

  /* Custom fonts */
  --font-family: "Inter", system-ui;
  --font-family-title: "Playfair Display", serif;
}
```
