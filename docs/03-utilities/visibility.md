You can use helper classes to hide or show elements on certain breakpoints.

## Hiding elements

| Class name          | Breakpoint |
| ------------------- | ---------- |
| `is-hidden`         | `all`      |
| `is-hidden:s`       | `> s`      |
| `is-hidden:s-max`   | `< s`      |
| `is-hidden:m`       | `> m`      |
| `is-hidden:m-max`   | `< m`      |
| `is-hidden:l`       | `> l`      |
| `is-hidden:l-max`   | `< l`      |
| `is-hidden:xl`      | `> xl`     |
| `is-hidden:xl-max`  | `< xl`     |
| `is-hidden:2xl`     | `> 2xl`    |
| `is-hidden:2xl-max` | `< 2xl`    |

## Showing elements

The inverse of `is-hidden`. Elements are hidden by default and shown at the specified breakpoint:

| Class name           | Shows at |
| -------------------- | -------- |
| `is-visible`         | `all`    |
| `is-visible:s`       | `> s`    |
| `is-visible:s-max`   | `< s`    |
| `is-visible:m`       | `> m`    |
| `is-visible:m-max`   | `< m`    |
| `is-visible:l`       | `> l`    |
| `is-visible:l-max`   | `< l`    |
| `is-visible:xl`      | `> xl`   |
| `is-visible:xl-max`  | `< xl`   |
| `is-visible:2xl`     | `> 2xl`  |
| `is-visible:2xl-max` | `< 2xl`  |

```html
<!-- Only visible on medium screens and up -->
<div class="is-visible:m">Desktop navigation</div>

<!-- Only visible below medium -->
<div class="is-visible:m-max">Mobile menu button</div>
```

## Screen reader only

Hide an element visually while keeping it accessible to screen readers:

```html
<button>
  <svg><!-- icon --></svg>
  <span class="sr-only">Close menu</span>
</button>
```

## Loading skeleton

Apply a pulsing gradient overlay to indicate loading state:

```html
<div class="is-loading" style="height: 1em; width: 200px;">
  Loading content...
</div>
```

The `.is-loading` class hides the element's text and overlays a shimmer animation. It inherits the element's `border-radius`.
