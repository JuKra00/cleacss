---
title: Alignment
---

Utility classes for text alignment and flexbox positioning. All alignment utilities support responsive breakpoints (`:s`, `:m`, `:l`, `:xl`, `:2xl`).

## Text alignment

```html
<p class="has-text-center">Centered text</p>
<p class="has-text-left">Left aligned</p>
<p class="has-text-right">Right aligned</p>
<p class="has-text-justify">Justified text</p>
```

Responsive example:
```html
<p class="has-text-center has-text-left:m">Centered on mobile, left on medium+</p>
```

## Flexbox item alignment

Control `align-items` on flex containers:

```html
<div class="has-items-center">Vertically centered items</div>
<div class="has-items-start">Items at start</div>
<div class="has-items-end">Items at end</div>
<div class="has-items-stretch">Stretched items (default)</div>
```

## Justify content

Control `justify-content` on flex containers:

```html
<div class="has-justify-center">Horizontally centered</div>
<div class="has-justify-start">Content at start</div>
<div class="has-justify-end">Content at end</div>
<div class="has-justify-stretch">Content stretched</div>
```

## Flex direction

```html
<div class="has-flex-row">Horizontal layout (default)</div>
<div class="has-flex-column">Vertical layout</div>
```

Responsive stacking pattern:
```html
<div class="has-flex-column has-flex-row:m">
  <!-- Stacked on mobile, row on medium+ -->
</div>
```

## Flex wrap

```html
<div class="has-flex-wrap">Allow items to wrap</div>
<div class="has-flex-nowrap">Keep items on one line</div>
```

## Flex sizing

```html
<div class="has-flex-1">Grow to fill available space</div>
```

## Width and height

```html
<div class="has-w-full">Full width (100%)</div>
<div class="has-h-full">Full height (100%)</div>
<div class="has-w-auto">Auto width</div>
<div class="has-h-auto">Auto height</div>
```

## Border radius

```html
<div class="has-radius-0">No border radius</div>
<div class="has-radius-s">Small radius (2px)</div>
<div class="has-radius">Default radius (4px)</div>
<div class="has-radius-rounded">Fully rounded (pill shape)</div>
```

## Container queries

Mark an element as a container query context:

```html
<div class="container">
  <!-- Children can use @container queries -->
</div>
```

Then write container queries in your CSS:

```css
@container (min-width: 400px) {
  .card { flex-direction: row; }
}
```
