---
title: Details
---

The native `<details>` and `<summary>` elements are styled as an accordion.

```html
<details>
  <summary>Click to expand</summary>
  <p>Hidden content revealed on click.</p>
</details>
```

## Accordion group

Stack multiple `<details>` elements and they automatically merge borders:

```html
<details>
  <summary>Section one</summary>
  <p>Content for section one.</p>
</details>
<details>
  <summary>Section two</summary>
  <p>Content for section two.</p>
</details>
<details>
  <summary>Section three</summary>
  <p>Content for section three.</p>
</details>
```
