---
---

# Grid

Appart from `.columns`, there is the option to use `.grid` for layout purposes, too. Each column will span 1 of 12 fractions. You can use modifier classes to alter that behavior. At default, all `.grid` will have a gap set by `var(--clea-grid-gap)`.

<div class="cleacss-demo">
  <div class="grid">
    <div class="column">
      <div class="cleacss-column-demo"></div>
    </div>
    <div class="column">
      <div class="cleacss-column-demo"></div>
    </div>
    <div class="column">
      <div class="cleacss-column-demo"></div>
    </div>
    <div class="column">
      <div class="cleacss-column-demo"></div>
    </div>
    <div class="column">
      <div class="cleacss-column-demo"></div>
    </div>
    <div class="column">
      <div class="cleacss-column-demo"></div>
    </div>
    <div class="column">
      <div class="cleacss-column-demo"></div>
    </div>
    <div class="column">
      <div class="cleacss-column-demo"></div>
    </div>
    <div class="column">
      <div class="cleacss-column-demo"></div>
    </div>
    <div class="column">
      <div class="cleacss-column-demo"></div>
    </div>
    <div class="column">
      <div class="cleacss-column-demo"></div>
    </div>
    <div class="column">
      <div class="cleacss-column-demo"></div>
    </div>
  </div>
</div>

```html
<div class="grid">
  <div class="column"></div>
  <div class="column"></div>
  ...
</div>
```

## Sizing

You can use classes `is-1` to `is-12` to size individual columns. The Grid will wrap, if the sum of all numbers used in classes exceeds 12.

<div class="cleacss-demo">
  <div class="grid">
    <div class="column is-3">
      <div class="cleacss-column-demo">is-3</div>
    </div>
    <div class="column is-9">
      <div class="cleacss-column-demo">is-9</div>
    </div>
  </div>
</div>

```html
<div class="grid">
  <div class="column is-3"></div>
  <div class="column is-9"></div>
</div>
```

## Responsive sizing

To configure breakpoint based column sizing, you can append the corresponding breakpoint name on the sizing class, e.g. `is-6-desktop` meaning the column will be 6 grid columns wide starting from the desktop breakpoint. Have a look at the [available breakpoints](/guide/#breakpoints).

<div class="cleacss-demo">
  <div class="grid">
    <div class="column is-12-phone is-3-desktop is-6-tablet is-12-mobile">
      <div class="cleacss-column-demo">is-3</div>
    </div>
    <div class="column is-12-phone is-9-desktop is-6-tablet is-12-mobile">
      <div class="cleacss-column-demo">is-9</div>
    </div>
  </div>
</div>

```html
<div class="grid">
  <div class="column is-6-phone is-3-desktop is-6-tablet is-12-mobile">
    <div class="cleacss-column-demo">is-3</div>
  </div>
  <div class="column is-12-phone is-9-desktop is-6-tablet is-12-mobile">
    <div class="cleacss-column-demo">is-9</div>
  </div>
</div>
```

## Offset

With the 12 column `.grid` in place, you can use `is-offset-x` classes to move a `.column` `x` amount of cells. You can use numbers from `0` meaning start of grid to `10`. Of course it is possible to combine it with `breakpoints` to use different offset on different screen sizes, e.g. `is-offset-1-desktop` will offset the column by 1 cell on desktop upwards.

<div class="cleacss-demo">
  <div class="grid">
    <div class="column is-4 is-offset-2">
      <div class="cleacss-column-demo">is-4 is-offset-2</div>
    </div>
    <div class="column is-6">
      <div class="cleacss-column-demo">is-6</div>
    </div>
  </div>
</div>

```html
<div class="grid is-gapless">
  <div class="column is-4 is-offset-2"></div>
  <div class="column is-6"></div>
</div>
```

## Gapless

By default, `.grid` have a gap of `var(--clea-gap-large)`. You can add the class `.is-gapless` to get rid of the gap. Of course you can limit this using the breakpoint modifier classes, e.g. `.is-gapless-tablet-only` will make the grid gapless from `tablet` until `desktop`.

<div class="cleacss-demo">
  <div class="grid is-gapless">
    <div class="column is-6">
      <div class="cleacss-column-demo">is-6</div>
    </div>
    <div class="column is-6">
      <div class="cleacss-column-demo">is-6</div>
    </div>
  </div>
</div>

```html
<div class="grid is-gapless">
  <div class="column is-6"></div>
  <div class="column is-6"></div>
</div>
```

## Vertical Center

You can add `is-vcentered` to `.grid` to make `.column` vertically centered.

<div class="cleacss-demo">
  <div class="grid is-vcentered">
    <div class="column is-6">
      <div class="cleacss-column-demo py-3">is-6</div>
    </div>
    <div class="column is-6">
      <div class="cleacss-column-demo">is-6</div>
    </div>
  </div>
</div>

```html
<div class="grid is-vcentered">
  <div class="column is-6">
    <div class="py-3">is-6</div>
  </div>
  <div class="column is-6">is-6</div>
</div>
```

## One line

To make columns overlap, you can use `.is-oneline` combined with [offsets](#offset). You have to set offsets on both `.column` to make it overlap.

<div class="cleacss-demo">
  <div class="grid is-oneline is-vcentered">
    <div class="column is-6 is-offset-0">
      <div class="cleacss-column-demo py-3">is-6 is-offset-0</div>
    </div>
    <div class="column is-8 is-offset-4">
      <div class="cleacss-column-demo" style="--c-brand: var(--c-brand-secondary)" >
       is-8 is-offset-4</div>
    </div>
  </div>
</div>

```html
<div class="grid is-gapless is-vcentered">
  <div class="column is-6 is-offset-0"></div>
  <div class="column is-8 is-offset-4"></div>
</div>
```
