---
title: Colors
---

cleacss uses [OKLCH](https://oklch.com/) for all colors. This perceptually uniform color space makes it easy to create consistent palettes and automatically handles dark mode.

## Base colors

```css
:root {
  --color-base: var(--color-neutral-900);           /* Main text */
  --color-base-background: var(--color-neutral-50); /* Page background */
}
```

## Accent color

Define your accent using hue (h), chroma (c), and lightness (l):

```css
:root {
  --color-accent-h: 280;  /* 0-360: Red→Yellow→Green→Cyan→Blue→Magenta→Red */
  --color-accent-c: 0.4;  /* 0-0.4: Saturation */
  --color-accent-l: 0.65; /* 0-1: Lightness */
}
```

These generate three accent variants:
- `--color-accent-light`: 1.5x lightness
- `--color-accent`: Base accent
- `--color-accent-dark`: 0.1x lightness

## Neutral scale

A 12-step neutral scale from white (0) to black (1000):

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

## Dark mode

The neutral scale automatically inverts when `prefers-color-scheme: dark`:
- `--color-neutral-0` becomes black instead of white
- `--color-neutral-1000` becomes white instead of black
- All intermediate values adjust accordingly

This means `--color-neutral-100` is always "light background" and `--color-neutral-900` is always "text color" regardless of mode.
