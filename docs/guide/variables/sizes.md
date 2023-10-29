---
---

# Sizes

These variables are the base for typographic sizes. The default size is 6, getting larger to 1 and smaller to 7.

All `-min`, `-pref` and `-max` variables are used for the calculation of responsive font-sizes, where `-min` marks the smallest and `-max` the largest possible value. `-pref` should be a `vw` value and is used as a factor to determin the actual font-size.

The values are based on a fluid typescale which utilizes a `16px` base font size on mobile and `20px` on desktop maschines.

You can look at the calculation and of course implement your own logic using the [Utopia Generator](https://utopia.fyi/type/calculator?c=320,16,1.25,1440,20,1.25,5,1,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l&g=s,l,xl,12).

**Read more about [clamp() at mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp).**

```css
:root {
  --clea-size-0: 0;
  --clea-size-1: 3.0519rem;
  --clea-size-1-min: 3.0519rem;
  --clea-size-1-pref: calc(2.8338rem + 1.0902vw);
  --clea-size-1-max: 3.815rem;
  --clea-size-2: 2.4413rem;
  --clea-size-2-min: 2.4413rem;
  --clea-size-2-pref: calc(2.2668rem + 0.8723vw);
  --clea-size-2-max: 3.0519rem;
  --clea-size-3: 1.9531rem;
  --clea-size-3-min: 1.9531rem;
  --clea-size-3-pref: calc(1.8137rem + 0.6973vw);
  --clea-size-3-max: 2.4413rem;
  --clea-size-4: 1.5625rem;
  --clea-size-4-min: 1.5625rem;
  --clea-size-4-pref: calc(1.4509rem + 0.558vw);
  --clea-size-4-max: 1.9531rem;
  --clea-size-5: 1.25rem;
  --clea-size-5-min: 1.25rem;
  --clea-size-5-pref: calc(1.1607rem + 0.4464vw);
  --clea-size-5-max: 1.5625rem;
  --clea-size-6: 1rem;
  --clea-size-6-min: 1rem;
  --clea-size-6-pref: calc(0.9286rem + 0.3571vw);
  --clea-size-6-max: 1.25rem;
  --clea-size-7: 0.8rem;
  --clea-size-7-min: 0.8rem;
  --clea-size-7-pref: calc(0.7429rem + 0.2857vw);
  --clea-size-7-max: 1rem;
}
```
