---
---

# Sizes

These variables are the base for typographic sizes. The default size is 6, getting larger to 1 and smaller to 7.

All `-min`, `-pref` and `-max` variables are used for the calculation of responsive font-sizes, where `-min` marks the smallest and `-max` the largest possible value. `-pref` should be a `vw` value and is used as a factor to determin the actual font-size.

**Read more about [clamp() at mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp).**

```css
:root {
  --clea-size-0: 0;
  --clea-size-1: 3rem;
  --clea-size-1-min: 1.75rem;
  --clea-size-1-pref: 3vw;
  --clea-size-1-max: 3rem;
  --clea-size-2: 2.5rem;
  --clea-size-2-min: 1.5rem;
  --clea-size-2-pref: 2.5vw;
  --clea-size-2-max: 2.5rem;
  --clea-size-3: 2rem;
  --clea-size-3-min: 1.35rem;
  --clea-size-3-pref: 2vw;
  --clea-size-3-max: 2rem;
  --clea-size-4: 1.75rem;
  --clea-size-4-min: 1.25rem;
  --clea-size-4-pref: 1.5vw;
  --clea-size-4-max: 1.75rem;
  --clea-size-5: 1.35rem;
  --clea-size-5-min: 1.15rem;
  --clea-size-5-pref: 1.25vw;
  --clea-size-5-max: 1.35rem;
  --clea-size-6: 1rem;
  --clea-size-6-min: 1rem;
  --clea-size-6-pref: 1rem;
  --clea-size-6-max: 1rem;
  --clea-size-7: 0.75rem;
  --clea-size-7-min: 0.75rem;
  --clea-size-7-pref: 0.75rem;
  --clea-size-7-max: 0.75rem;
}
```