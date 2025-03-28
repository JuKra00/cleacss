---
title: Flow
---

The `flow` and `flow-row` classes create a flex layout with a consistent gap between elements. Elements in the `flow` class will be layed out under each other, while elements in the `flow-row` will be layed out next to each other.

```html
<div class="flow">
  <h1>Heading</h1>
  <p>Paragraph</p>
</div>

<div class="flow-row">
  <button>Button</button>
  <button>Button</button>
</div>
```

## Breakout

To create a breakout element, you can use the `breakout` class. This will make the element take up the full width of the page. Since it's using `width` and `transform`, it will only work as a child of a `span-content` element.

```html
<div class="grid">
  <div class="span-content flow">
    <p>
      Conubia etiam nec lobortis vehicula diam efficitur tortor ex volutpat vestibulum felis nisi consectetur tellus euismod a commodo donec est
    </p>
    <div class="breakout">
      <blockquote class="has-px-l">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </blockquote>
    </div>
  </div>
</div>
```

## Gap

You can also use modifier classes to change the gap between the elements. The modifiers follow the following pattern: `has-gap-x` where `x` is the size of the gap. The available sizes are `2xs`, `xs`, `s`, `m`, `l`, `xl`, `2xl`, `3xl` and `4xl`

```html
<div class="flow has-gap-2xs">
  <h1>Heading</h1>
  <p>Paragraph</p>
</div>
```

## Configuration

```css
:root {
  --flow-gap: var(--space-s);
}
```
