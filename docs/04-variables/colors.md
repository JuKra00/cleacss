---
title: Colors
---

cleacss uses [OKLCH](https://oklch.com/) for all colors. This perceptually uniform color space makes it easy to create consistent palettes and automatically handles dark mode.

## Base colors

```css
:root {
  --color-base: var(--color-neutral-900);           /* Main text */
  --color-base-background: var(--color-neutral-50); /* Page background */
  --color-white: #fff;                            /* Always White */
  --color-black: #000;                            /* Always Black */
}
```

## Accent color

The accent color is used for links, buttons, and other interactive elements.

```css
:root {
  --color-accent: oklch(0.65 0.4 280);
}
```

## Link color

Links inside `.text` use a dedicated variable that defaults to the accent color:

```css
:root {
  --color-link: var(--color-accent);
}
```

Override it to style links independently from other accent-colored elements like buttons.

## Neutral scale

A 12-step neutral scale from white (0) to black (1000), using `light-dark()` for automatic dark mode adaptation:

| Variable               | Light mode | Dark mode  |
| ---------------------- | ---------- | ---------- |
| `--color-neutral-0`    | White      | Black      |
| `--color-neutral-50`   | Near white | Near black |
| `--color-neutral-100`  | Very light | Very dark  |
| `--color-neutral-200`  | Light      | Dark       |
| ...                    | ...        | ...        |
| `--color-neutral-900`  | Near black | Near white |
| `--color-neutral-1000` | Black      | White      |

### Tinting neutrals

By default, neutrals are pure grays. Add warmth or coolness by adjusting:

```css
:root {
  --color-neutral-h: 30;   /* Hue: 30 = warm, 220 = cool */
  --color-neutral-c: 0.02; /* Chroma: 0 = gray, 0.03+ = tinted */
}
```

Examples:
- **Warm grays**: `h: 30, c: 0.02`
- **Cool grays**: `h: 220, c: 0.02`
- **Purple tint**: `h: 280, c: 0.015`

## Semantic colors

Pre-defined colors for common UI states:

```css
:root {
  --color-success: oklch(0.65 0.15 150); /* Green */
  --color-warning: oklch(0.75 0.15 80);  /* Yellow/Orange */
  --color-error: oklch(0.65 0.18 25);    /* Red */
  --color-info: oklch(0.65 0.15 220);    /* Blue */
}
```


## Selection

Selection colors are customizable:

```css
:root {
  --selection-background: var(--color-base);
  --selection-color: var(--color-accent);
}
```
