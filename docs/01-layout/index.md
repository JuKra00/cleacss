---
title: Layout
---

The cleass layout system consists of two main ideas, `grid` and `flow`. The `grid` is a 12 column grid, while the `flow` is a flex layout with a consistent gap between elements.

The layout system is however a bit different from other frameworks. It is meant to reduce the amount of markup you need to write, while providing even more layout capabilities than a typical section > container > columns layout.

When using grid, the most outer columns 1 and 12 are fluid in their widths. With this approach, we have a centered content column that can be limited in width on larger viewports, while allowing content to span to the edges of the screen without work arounds.

Using this layout basically looks like this:

```html
<body class="grid">

  <header class="span-full grid">
    <div class="start-1 span-3">
      ... Logo ...
    </div>
    <div class="span-7 flow-row">
      ... Navigation ...
    </div>
  </header>

  <main class="span-content flow">
    ... Content ...
  </main>

  <footer class="span-full flow">
    ... Footer ...
  </footer>
</body>
```
