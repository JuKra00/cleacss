There is a very simple button styling in place to get you started.

<script src="https://vite.test/lib/playground.js" type="module"></script>
<cleacss-playground src="https://vite.test/cleacss.css">
  <button class="button">Hello world</button>
  <a href="#" class="button">Click me</a>
</cleacss-playground>


```html
<a href="#" class="button">Click me</a>
<button class="button">Hello world</button>
```

## Configuration

```css
:root {
  --button-padding-y: 0.5em;
  --button-padding-x: 1.5em;
  --button-border-width: 2px;
  --button-border-radius: var(--border-radius-rounded);
  --button-background-color: var(--color-accent);
  --button-border-color: var(--color-accent);
  --button-color: var(--color-accent-dark);
}
```
