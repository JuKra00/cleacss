---
---

# Button

## Default

<div class="cleacss-demo">
  <a href="#" class="button">Click me</a>
</div>

```html
<a href="#" class="button">Click me</a>
```

## Group

You can group multiple buttons by using the `.buttons` class.

<div class="cleacss-demo">
  <div class="buttons">
    <a href="#" class="button">Click me</a>
    <input type="submit" value="Click me" />
    <button>Click me</button>
  </div>
</div>

```html
<div class="buttons">
  <a href="#" class="button">Click me</a>
  <input type="submit" value="Click me" />
  <button>Click me</button>
</div>
```

## Sizes

To modify button sizing, you can use the size classes `has-size-1` (largest) to `has-size-7` (smallest). Default is `size-6`. Ofcourse you can combine those with the breakpoints, e.g. `has-size-4-desktop`

<div class="cleacss-demo">
  <div class="buttons">
    <a href="#" class="button has-size-7">Click me</a>
    <a href="#" class="button">Click me</a>
    <a href="#" class="button has-size-5">Click me</a>
    <a href="#" class="button has-size-4-desktop">Click me</a>
  </div>
</div>

```html
<a href="#" class="button has-size-7">Click me</a>
<a href="#" class="button">Click me</a>
<a href="#" class="button has-size-5">Click me</a>
<a href="#" class="button has-size-4-desktop">Click me</a>
```

## States

<div class="cleacss-demo">
  <div class="buttons">
    <a href="#" class="button is-loading">Click me</a>
    <a href="#" class="button is-hovered">Click me</a>
    <a href="#" class="button is-active">Click me</a>
    <a href="#" class="button is-disabled">Click me</a>
    <a href="#" class="button" disabled>Click me</a>
  </div>
</div>

```html
<a href="#" class="button is-loading">Click me</a>
<a href="#" class="button is-hovered">Click me</a>
<a href="#" class="button is-active">Click me</a>
<a href="#" class="button is-disabled">Click me</a>
<a href="#" class="button" disabled>Click me</a>
```
