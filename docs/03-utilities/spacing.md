There are helper classes to modify space between elements.
The classes follow this scheme:

`has-` +
`p` (padding) or `m` (margin) +
`x` or `y` (orientation) or `t` or `b` or `l` or `r` (top, bottom,left, right)

For example `has-px` sets `padding-inline: var(--space-default)`

## Define the spacing

There are 9 space sizes built-in ranging from `2xs` to `4xl`. Additionally there are 12 space sizes spanning from one space to another other.

You can attach the name of the space to your helper class like this:
`has-pt-2xl` sets `padding-top: var(--space-2xl)`


## Auto margin

To set margin to auto, use the letter `a` for the size.
For example `has-mx-a` will set `margin-inline: auto`

## Configuration

```css
:root {
  --space-default: var(--space-s-l);

  --space-2xs: clamp(0.25rem, 0.2292rem + 0.0694vw, 0.3125rem);
  --space-xs: clamp(0.5rem, 0.4583rem + 0.1389vw, 0.625rem);
  --space-s: clamp(1rem, 0.9167rem + 0.2778vw, 1.25rem);
  --space-m: clamp(1.5rem, 1.375rem + 0.4167vw, 1.875rem);
  --space-l: clamp(2rem, 1.8333rem + 0.5556vw, 2.5rem);
  --space-xl: clamp(3rem, 2.75rem + 0.8333vw, 3.75rem);
  --space-2xl: clamp(4rem, 3.6667rem + 1.1111vw, 5rem);
  --space-3xl: clamp(6rem, 5.5rem + 1.6667vw, 7.5rem);
  --space-4xl: clamp(8rem, 7.3333rem + 2.2222vw, 10rem);

  --space-2xs-xs: clamp(0.25rem, 0.125rem + 0.4167vw, 0.625rem);
  --space-xs-s: clamp(0.5rem, 0.25rem + 0.8333vw, 1.25rem);
  --space-s-m: clamp(1rem, 0.7083rem + 0.9722vw, 1.875rem);
  --space-m-l: clamp(1.5rem, 1.1667rem + 1.1111vw, 2.5rem);
  --space-l-xl: clamp(2rem, 1.4167rem + 1.9444vw, 3.75rem);
  --space-xl-2xl: clamp(3rem, 2.3333rem + 2.2222vw, 5rem);
  --space-2xl-3xl: clamp(4rem, 2.8333rem + 3.8889vw, 7.5rem);
  --space-3xl-4xl: clamp(6rem, 4.6667rem + 4.4444vw, 10rem);

  --space-s-l: clamp(1rem, 0.5rem + 1.6667vw, 2.5rem);
  --space-m-xl: clamp(1.5rem, 0.75rem + 2.5vw, 3.75rem);
  --space-xl-3xl: clamp(3rem, 1.5rem + 5vw, 7.5rem);
  --space-xl-4xl: clamp(3rem, 0.6667rem + 7.7778vw, 10rem);
}
```
