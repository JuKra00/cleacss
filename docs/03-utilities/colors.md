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
<div class="has-bg-neutral-100">Light background</div>
<div class="has-bg-neutral-800 has-text-neutral-0">Dark background</div>
<div class="has-bg-accent">Accent background</div>
```

### Semantic backgrounds

```html
<div class="has-bg-success">Success background</div>
<div class="has-bg-warning">Warning background</div>
<div class="has-bg-error">Error background</div>
<div class="has-bg-info">Info background</div>
```

### All neutral backgrounds

| Class                 | Color                      |
| --------------------- | -------------------------- |
| `has-bg-neutral-0`    | White / Black              |
| `has-bg-neutral-50`   | Near white / Near black    |
| `has-bg-neutral-100`  | Very light / Very dark     |
| `has-bg-neutral-200`  | Light / Dark               |
| `has-bg-neutral-300`  | Light gray / Dark gray     |
| `has-bg-neutral-400`  | Medium light / Medium dark |
| `has-bg-neutral-500`  | Medium gray                |
| `has-bg-neutral-600`  | Medium dark / Medium light |
| `has-bg-neutral-700`  | Dark gray / Light gray     |
| `has-bg-neutral-800`  | Very dark / Very light     |
| `has-bg-neutral-900`  | Near black / Near white    |
| `has-bg-neutral-1000` | Black / White              |

## Dark mode

All color utilities automatically adapt in dark mode via `light-dark()`. `has-text-neutral-900` is always the primary text color and `has-bg-neutral-100` is always a dim background, regardless of color scheme.
