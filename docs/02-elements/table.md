---
title: Table
---

Tables are styled with clean borders and optional accent headers/footers.

## Basic table

No special classes needed. Standard HTML tables are styled automatically:

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Role</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>Developer</td>
      <td>Active</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>Designer</td>
      <td>Active</td>
    </tr>
  </tbody>
</table>
```

## With footer

```html
<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Widget</td>
      <td>$10</td>
    </tr>
    <tr>
      <td>Gadget</td>
      <td>$25</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Total</th>
      <th>$35</th>
    </tr>
  </tfoot>
</table>
```

## Configuration

```css
:root {
  /* Border */
  --table-border-color: var(--color-neutral-800);
  --table-border-width: 1px;

  /* Cell padding */
  --table-padding-x: var(--space-xs);
  --table-padding-y: var(--space-xs);

  /* Header/footer accent */
  --table-accent-background: var(--color-neutral-800);
  --table-accent-color: var(--color-neutral-50);
}
```
