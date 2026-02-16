---
title: Colors
---

Utility classes for text and background colors.

## Neutral text colors

Apply any neutral shade to text:

```html
<p class="has-text-neutral-0">White text (dark bg only)</p>
<p class="has-text-neutral-100">Very light</p>
<p class="has-text-neutral-200">Light</p>
<p class="has-text-neutral-300">Light gray</p>
<p class="has-text-neutral-400">Medium light</p>
<p class="has-text-neutral-500">Medium gray</p>
<p class="has-text-neutral-600">Medium dark</p>
<p class="has-text-neutral-700">Dark gray</p>
<p class="has-text-neutral-800">Very dark</p>
<p class="has-text-neutral-900">Near black</p>
<p class="has-text-neutral-1000">Black text</p>
```

### Creating hierarchy

Use lighter neutrals for secondary content:

```html
<article>
  <h2>Main headline</h2>
  <p class="has-text-neutral-600">
    Secondary description text that's less prominent.
  </p>
  <span class="has-text-neutral-400">Metadata or timestamp</span>
</article>
```

## Semantic text colors

For status messages and feedback:

```html
<span class="has-text-accent">Accent colored text</span>
<span class="has-text-success">Operation completed</span>
<span class="has-text-warning">Please review</span>
<span class="has-text-error">Something went wrong</span>
<span class="has-text-info">Additional information</span>
```

## Background colors

Apply background colors to any element:

```html
<div class="has-background-neutral-100">Light background</div>
<div class="has-background-neutral-800 has-text-neutral-0">Dark background</div>
<div class="has-background-accent">Accent background</div>
```

### Semantic backgrounds

```html
<div class="has-background-success">Success background</div>
<div class="has-background-warning">Warning background</div>
<div class="has-background-error">Error background</div>
<div class="has-background-info">Info background</div>
```

### All neutral backgrounds

| Class                         | Color                      |
| ----------------------------- | -------------------------- |
| `has-background-neutral-0`    | White / Black              |
| `has-background-neutral-50`   | Near white / Near black    |
| `has-background-neutral-100`  | Very light / Very dark     |
| `has-background-neutral-200`  | Light / Dark               |
| `has-background-neutral-300`  | Light gray / Dark gray     |
| `has-background-neutral-400`  | Medium light / Medium dark |
| `has-background-neutral-500`  | Medium gray                |
| `has-background-neutral-600`  | Medium dark / Medium light |
| `has-background-neutral-700`  | Dark gray / Light gray     |
| `has-background-neutral-800`  | Very dark / Very light     |
| `has-background-neutral-900`  | Near black / Near white    |
| `has-background-neutral-1000` | Black / White              |

## Dark mode

All color utilities automatically adapt in dark mode via `light-dark()`. `has-text-neutral-900` is always the primary text color and `has-background-neutral-100` is always a dim background, regardless of color scheme.

## Static colors

Use `has-text-white` and `has-background-black` to set text and background colors to white and black, respectively. These won't adapt in dark mode.
