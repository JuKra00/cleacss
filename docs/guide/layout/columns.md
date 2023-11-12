---
---

# Columns

To layout content, you can use the built-in 12 column grid. Each column will span evenly to fill the whole row. You can use modifier classes to alter that behavior. At default, all `.columns` will have a gap set by `var(--clea-columns-gap)`.

<div class="cleacss-demo">
  <div class="columns">
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
<div class="columns">
  <div class="column"></div>
  <div class="column"></div>
  ...
</div>
```

## Sizing

You can use classes `column-1` to `column-12` to size individual columns. Columns will wrap, if the sum of all numbers used in classes exceeds 12.

<div class="cleacss-demo">
  <div class="columns">
    <div class="column column-1">
      <div class="cleacss-column-demo">column-1</div>
    </div>
    <div class="column column-6">
      <div class="cleacss-column-demo">column-6</div>
    </div>
    <div class="column column-5">
      <div class="cleacss-column-demo">column-5</div>
    </div>
    <div class="column column-2">
      <div class="cleacss-column-demo">column-2</div>
    </div>
    <div class="column column-10">
      <div class="cleacss-column-demo">column-10</div>
    </div>
    <div class="column column-3">
      <div class="cleacss-column-demo">column-3</div>
    </div>
    <div class="column column-9">
      <div class="cleacss-column-demo">column-9</div>
    </div>
  </div>
</div>

```html
<div class="columns">
  <div class="column column-1"></div>
  <div class="column column-6"></div>
  <div class="column column-5"></div>
  <div class="column column-2"></div>
  <div class="column column-10"></div>
  <div class="column column-3"></div>
  <div class="column column-9"></div>
</div>
```

## Responsive sizing

To configure breakpoint based column sizing, you can append the corresponding breakpoint name on the sizing class, e.g. `column-6-desktop` meaning the column will be 6 columns wide starting from the desktop breakpoint. Have a look at the [available breakpoints](/guide/#breakpoints).

<div class="cleacss-demo">
  <div class="columns">
    <div class="column column-3-desktop column-6-tablet column-12-mobile">
      <div class="cleacss-column-demo">column-3</div>
    </div>
    <div class="column column-9-desktop column-6-tablet column-12-mobile">
      <div class="cleacss-column-demo">column-9</div>
    </div>
  </div>
</div>

```html
<div class="columns">
  <div class="column column-3-desktop column-6-tablet column-12-mobile">
    <div class="cleacss-column-demo">column-3</div>
  </div>
  <div class="column column-9-desktop column-6-tablet column-12-mobile">
    <div class="cleacss-column-demo">column-9</div>
  </div>
</div>
```

## Narrow

To make a `.column` match it's contents, simply add the class `.column-narrow`. You can use the breakpoint modifiers, too.

<div class="cleacss-demo">
  <div class="columns pb-6">
    <div class="column">
      <div class="cleacss-column-demo">column</div>
    </div>
    <div class="column column-narrow">
      <div class="cleacss-column-demo px-4">column-narrow</div>
    </div>
  </div>
   <div class="columns">
    <div class="column">
      <div class="cleacss-column-demo">column</div>
    </div>
    <div class="column column-narrow-desktop">
      <div class="cleacss-column-demo px-4">column-narrow-desktop</div>
    </div>
  </div>
</div>

```html
<div class="columns">
  <div class="column"></div>
  <div class="column column-narrow"></div>
</div>
```

## Offset

Since cleacss is using flexbox, you can use auto margin classes to handle offsets.

<div class="cleacss-demo">
  <div class="columns pb-6">
    <div class="column column-2">
      <div class="cleacss-column-demo">column-2</div>
    </div>
    <div class="column column-6 ml-a">
      <div class="cleacss-column-demo">column-6 ml-a</div>
    </div>
  </div>
   <div class="columns pb-6">
    <div class="column column-2">
      <div class="cleacss-column-demo">column-2</div>
    </div>
    <div class="column column-6 mx-a">
      <div class="cleacss-column-demo">column-6 mx-a</div>
    </div>
  </div>
   <div class="columns pb-6">
    <div class="column column-2 mr-a">
      <div class="cleacss-column-demo">column-2 mr-a</div>
    </div>
    <div class="column column-3">
      <div class="cleacss-column-demo">column-3</div>
    </div>
    <div class="column column-3 mr-a">
      <div class="cleacss-column-demo">column-3 mr-a</div>
    </div>
  </div>
</div>

```html
<div class="columns">
  <div class="column column-2"></div>
  <div class="column column-6 ml-a"></div>
</div>
```

## Gapless

By default, `.columns` have a gap of `var(--clea-gap-large)`. You can add the class `.column-gapless` to get rid of the gap.

<div class="cleacss-demo">
  <div class="columns is-gapless">
    <div class="column column-6">
      <div class="cleacss-column-demo">column-6</div>
    </div>
    <div class="column column-6">
      <div class="cleacss-column-demo">column-6</div>
    </div>
  </div>
</div>

```html
<div class="columns is-gapless">
  <div class="column column-6"></div>
  <div class="column column-6"></div>
</div>
```

## One line

By default, columns do wrap. You can make `.columns` stay on one row by adding `column-oneline`. Overflow will be scrollable.

<div class="cleacss-demo">
  <div class="columns is-oneline">
    <div class="column column-10">
      <div class="cleacss-column-demo">column-10</div>
    </div>
    <div class="column column-6">
      <div class="cleacss-column-demo">column-6</div>
    </div>
  </div>
</div>

```html
<div class="columns is-oneline">
  <div class="column column-10">
    <div class="cleacss-column-demo">column-10</div>
  </div>
  <div class="column column-6">
    <div class="cleacss-column-demo">column-6</div>
  </div>
</div>
```

## Phone layout

By default, all columns are stacked and `100%` width on the smallest breakpoint. You can avoid this by adding the `column-phone` class on `.columns`

<div class="cleacss-demo">
  <div class="columns is-phone">
    <div class="column column-6">
      <div class="cleacss-column-demo">column-6</div>
    </div>
    <div class="column column-6">
      <div class="cleacss-column-demo">column-6</div>
    </div>
  </div>
</div>

```html
<div class="columns is-phone">
  <div class="column column-6"></div>
  <div class="column column-6"></div>
</div>
```
