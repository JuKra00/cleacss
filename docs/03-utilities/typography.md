---
title: Typography
---

Utility classes for controlling text appearance.

## Font sizes

Apply any of the 8 font size levels:

```html
<p class="has-size-1">Huge (hero headlines)</p>
<p class="has-size-2">Very large (page titles)</p>
<p class="has-size-3">Large (section headings)</p>
<p class="has-size-4">Medium-large (subheadings)</p>
<p class="has-size-5">Medium (lead text)</p>
<p class="has-size-6">Normal (body text)</p>
<p class="has-size-7">Small (secondary text)</p>
<p class="has-size-8">Tiny (captions)</p>
```

Sizes are fluid and scale smoothly between viewports. See [Typography Variables](/00-variables/typography.md) for exact values.

## Font weights

```html
<span class="has-text-light">Light weight (300)</span>
<span class="has-text-normal">Normal weight (400)</span>
<span class="has-text-bold">Bold weight (700)</span>
```

## Text styles

```html
<em class="has-text-italic">Italic text</em>
<span class="has-text-uppercase">UPPERCASE TEXT</span>
```

## Text wrapping

```html
<p class="has-text-wrap">Standard text wrapping</p>
<h1 class="has-text-balance">Balanced headline wrapping</h1>
```

Use `has-text-balance` on headlines to prevent orphans and create more visually pleasing line breaks.

## Max width

Limit line length for readability:

```html
<p class="has-max-width-6">
  Optimal reading width at 65 characters. Lorem ipsum dolor sit amet...
</p>
```

| Class | Width |
|-------|-------|
| `has-max-width-1` | 15ch |
| `has-max-width-2` | 18ch |
| `has-max-width-3` | 20ch |
| `has-max-width-4` | 25ch |
| `has-max-width-5` | 45ch |
| `has-max-width-6` | 65ch |
| `has-max-width-7` | 70ch |
| `has-max-width-8` | 75ch |
