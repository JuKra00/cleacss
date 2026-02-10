There are two types of heading classes that can be used for styling. `title` is the default heading style, while `subtitle` has a light font weight by default.

```html
<h3 class="title">Lorem ipsum sit dolor amet.</h3>
<h3 class="subtitle">Lorem ipsum sit dolor amet.</h3>
```

## Sizes

As with all text you can use `has-size-x` classes to change the font sizes.

```html
<h1 class="subtitle has-size-6">Lorem ipsum sit dolor amet.</h1>
<h2 class="title has-size-4">Lorem ipsum sit dolor amet.</h2>
```

## Configuration

```css
:root {
  --font-family-title: var(--font-family);
  --line-height-title: 1.1;
  --font-weight-title: var(--font-weight-bold);

  --font-size-1: clamp(3.0518rem, 1.7138rem + 4.46vw, 7.0657rem);
  --font-size-2: clamp(2.4414rem, 1.5895rem + 2.8395vw, 4.997rem);
  --font-size-3: clamp(1.9531rem, 1.4262rem + 1.7565vw, 3.5339rem);
  --font-size-4: clamp(1.5625rem, 1.2503rem + 1.0408vw, 2.4992rem);
  --font-size-5: clamp(1.25rem, 1.0775rem + 0.575vw, 1.7675rem);
  --font-size-6: clamp(1rem, 0.9167rem + 0.2778vw, 1.25rem);
  --font-size-7: clamp(0.8rem, 0.772rem + 0.0934vw, 0.884rem);
  --font-size-8: clamp(0.6252rem, 0.6449rem + -0.0165vw, 0.64rem);
}
```
