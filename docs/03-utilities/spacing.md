---
title: Spacing
---

Helper classes for padding and margin.

## Class pattern

```
has-{property}{direction}-{size}
```

- **Property**: `p` (padding) or `m` (margin)
- **Direction**: `x`, `y`, `t`, `b`, `l`, `r` (or omit for all sides)
- **Size**: `2xs`, `xs`, `s`, `m`, `l`, `xl`, `2xl`, `3xl`, `4xl` (or omit for default)

## Quick reference

| Class | Effect |
|-------|--------|
| `has-p` | `padding: var(--space-default)` |
| `has-px-m` | `padding-inline: var(--space-m)` |
| `has-py-xl` | `padding-block: var(--space-xl)` |
| `has-pt-s` | `padding-top: var(--space-s)` |
| `has-pb-l` | `padding-bottom: var(--space-l)` |
| `has-pl-xs` | `padding-left: var(--space-xs)` |
| `has-pr-2xl` | `padding-right: var(--space-2xl)` |
| `has-m` | `margin: var(--space-default)` |
| `has-mx-a` | `margin-inline: auto` |
| `has-my-3xl` | `margin-block: var(--space-3xl)` |
| `has-mt-4xl` | `margin-top: var(--space-4xl)` |

## Examples

```html
<!-- Card with medium padding -->
<div class="has-p-m">Card content</div>

<!-- Section with large vertical padding -->
<section class="has-py-xl">Section content</section>

<!-- Center a block element -->
<div class="has-mx-a" style="max-width: 800px">Centered</div>

<!-- Spacing between stacked items -->
<div class="has-mt-l">First item</div>
<div class="has-mt-l">Second item</div>
```

## Auto margin

Use `a` as the size to set margin to `auto`:

```html
<div class="has-mx-a">Horizontally centered</div>
<div class="has-ml-a">Pushed to the right</div>
```

## Available sizes

| Size | Small viewport | Large viewport |
|------|----------------|----------------|
| `2xs` | 4px | 5px |
| `xs` | 8px | 10px |
| `s` | 16px | 20px |
| `m` | 24px | 30px |
| `l` | 32px | 40px |
| `xl` | 48px | 60px |
| `2xl` | 64px | 80px |
| `3xl` | 96px | 120px |
| `4xl` | 128px | 160px |

See [Spacing Variables](/00-variables/spacing.md) for fluid paired sizes like `s-l` and `m-xl`.

## Configuration

```css
:root {
  --space-default: var(--space-s-l);
}
```
