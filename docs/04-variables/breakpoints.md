---
title: Breakpoints
---

Cleacss has 5 breakpoints built-in. Internally, they are defined as custom media queries.

```css
@custom-media --s (min-width: 30rem);
@custom-media --s-max (max-width: 30rem);
@custom-media --m (min-width: 48rem);
@custom-media --m-max (max-width: 48rem);
@custom-media --l (min-width: 64rem);
@custom-media --l-max (max-width: 64rem);
@custom-media --xl (min-width: 80rem);
@custom-media --xl-max (max-width: 80rem);
@custom-media --2xl (min-width: 120rem);
@custom-media --2xl-max (max-width: 120rem);
```

If you want to be able to modify the breakpoint values, or use custom media queries yourself, you need to import the untranspiled version and use [Lightning CSS](https://lightningcss.dev) or another css preprocessor that supports custom media queries to convert them to browser standard.

```css
/* Import untranspiled version in css file */
@import "cleacss/untranspiled";
/* Overwrite default breakpoints */
@custom-media --m (min-width: 52rem);
@custom-media --m-max (max-width: 52rem);
```

If using a preprocessor, you can use them directly in your css:

```css
.my-element {
  color: var(--color-neutral-900);
  @media (--s) {
    color: var(--color-neutral-700);
  }
}
```
