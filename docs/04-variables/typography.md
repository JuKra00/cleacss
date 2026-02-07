---
title: Typography
---

## Font sizes

cleacss provides 8 fluid font sizes using `clamp()` for smooth scaling between viewport sizes.

| Variable        | Small viewport | Large viewport |
| --------------- | -------------- | -------------- |
| `--font-size-1` | 3rem (48px)    | 7rem (112px)   |
| `--font-size-2` | 2.5rem (40px)  | 5rem (80px)    |
| `--font-size-3` | 2rem (32px)    | 3.5rem (56px)  |
| `--font-size-4` | 1.5rem (24px)  | 2.5rem (40px)  |
| `--font-size-5` | 1.25rem (20px) | 1.75rem (28px) |
| `--font-size-6` | 1rem (16px)    | 1.25rem (20px) |
| `--font-size-7` | 0.85rem (14px) | 1rem (16px)    |
| `--font-size-8` | 0.75rem (12px) | 0.85rem (14px) |

### Why inverted numbering?

Smaller number = bigger size, matching HTML heading levels (h1 is biggest, h6 is smallest). This makes it intuitive: `--font-size-1` for h1, `--font-size-2` for h2, etc.

## Font families

```css
:root {
  --font-family: system-ui;                    /* Body text */
  --font-family-title: var(--font-family);     /* Headings */
  --font-family-mono: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}
```

## Font weights

```css
:root {
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-bold: 700;
  --font-weight-title: var(--font-weight-bold);
}
```

## Line heights

```css
:root {
  --line-height: 1.4;       /* Body text */
  --line-height-title: 1;   /* Headings (tighter) */
}
```

## Max widths

For readable line lengths, use these character-based max-widths:

| Variable             | Width |
| -------------------- | ----- |
| `--max-width-size-1` | 15ch  |
| `--max-width-size-2` | 18ch  |
| `--max-width-size-3` | 20ch  |
| `--max-width-size-4` | 25ch  |
| `--max-width-size-5` | 45ch  |
| `--max-width-size-6` | 65ch  |
| `--max-width-size-7` | 70ch  |
| `--max-width-size-8` | 75ch  |

The ideal line length for body text is 45-75 characters. Use `--max-width-size-6` (65ch) as a default.
