---
title: Dialog
---

The native `<dialog>` element is styled with sensible defaults. Use it with the browser's built-in `showModal()` API.

```js
<dialog id="my-dialog">
  <h2>Dialog title</h2>
  <p>Dialog content goes here.</p>
  <button onclick="this.closest('dialog').close()">Close</button>
</dialog>
<button onclick="document.getElementById('my-dialog').showModal()">Open dialog</button>
```

## Configuration

All dialog properties can be customized via CSS variables:

```css
dialog {
  --dialog-background: var(--color-base-background);
  --dialog-border: none;
  --dialog-border-radius: var(--border-radius);
  --dialog-max-height: 85vh;
  --dialog-max-width: 40rem;
  --dialog-padding: var(--space-m);
  --dialog-width: 90vw;
  --dialog-backdrop: oklch(0 0 0 / 50%);
}
```
