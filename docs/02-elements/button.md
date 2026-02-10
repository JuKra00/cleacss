There is a very simple button styling in place to get you started.

```html
<a href="#" class="button">Click me</a>
<button class="button">Hello world</button>
```

## Variants

### Outline

A transparent button with a visible border:

```html
<button class="button button--outline">Outline</button>
```

### Ghost

A minimal button with no background or border, just text with a subtle hover effect:

```html
<button class="button button--ghost">Ghost</button>
```

## Custom colors

Button hover states are automatically generated using `color-mix()`. Setting just `--button-background` automatically updates the border and all hover states:

```html
<button style="--button-background: var(--color-error);">
  Delete
</button>
```

For full control over hover states:

```html
<button style="--button-background: var(--color-success); --button-hover-background: var(--color-success-dark);">
  Save
</button>
```

Custom border separate from background:

```html
<button style="--button-background: transparent; --button-border-color: var(--color-error); --button-color: var(--color-error);">
  Outline Delete
</button>
```

## Configuration

### Root variables

```css
:root {
  --button-background: var(--color-accent);
  --button-border-radius: var(--border-radius-rounded);
  --button-border-width: 2px;
  --button-color: var(--color-neutral-700);
  --button-hover-color: var(--color-neutral-1000);
  --button-padding-block: 0.5em;
  --button-padding-inline: 1.5em;
}
```

### Override variables

These variables are not set at `:root` level but can be used on individual elements to override auto-derived values:

| Variable | Default |
|---|---|
| `--button-border-color` | Falls back to `--button-background` |
| `--button-hover-background` | Falls back to `color-mix(--button-background, neutral-1000 20%)` |
| `--button-hover-border-color` | Falls back to `color-mix(--button-border-color, neutral-1000 20%)` |
