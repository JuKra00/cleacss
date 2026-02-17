---
title: Tooltip
---

The `.tooltip` class styles a popover element as a tooltip, using CSS anchor positioning for automatic placement. Check browser support. You might need to add javascript to support the `popover="hint"` attribute.

```html
<button popovertarget="my-tooltip" style="anchor-name: --my-tooltip;">
  Hover me
</button>
<div id="my-tooltip" popover class="tooltip" style="position-anchor: --my-tooltip;">
  Tooltip content
</div>

<button>
  <span class="tooltip" popover="hint">My tooltip hint</span>
</button>
```

## Configuration

Tooltip properties can be customized via CSS variables:

```css
:root {
  --tooltip-background: var(--color-neutral-900);
  --tooltip-color: var(--color-neutral-0);
  --tooltip-border: none;
  --tooltip-border-radius: var(--border-radius-s);
  --tooltip-padding-block: var(--space-2xs);
  --tooltip-padding-inline: var(--space-xs);
  --tooltip-font-size: var(--font-size-8);
}
```
