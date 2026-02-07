---
title: Colors
---

Utility classes for text color.

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

## Semantic colors

For status messages and feedback:

```html
<span class="has-text-success">Operation completed</span>
<span class="has-text-warning">Please review</span>
<span class="has-text-error">Something went wrong</span>
<span class="has-text-info">Additional information</span>
```

## Dark mode

Neutral utilities automatically adapt in dark mode. `has-text-neutral-900` is always the primary text color regardless of color scheme.
