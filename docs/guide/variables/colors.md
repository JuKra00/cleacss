---
---
# Colors

There are three main color variables, which are used to add color to elements. These can be overwritten on any element to introduce a broader color concept.

```css
:root {
  --clea-base-color: #000;
  --clea-base-color-invert: #fff;
  --clea-link-color: #000;
}
```

## Example

<style>
  :root {
    --my-color: hotpink
  }
  .is-secondary {
    --clea-base-color: var(--my-color);
  }
</style>

<button class="button is-secondary">Click me</button>

```html
<style>
  :root {
    --my-color: hotpink
  }
  .is-secondary {
    --clea-base-color: var(--my-color);
  }
</style>
<button class="button is-secondary">Click me</button>
```