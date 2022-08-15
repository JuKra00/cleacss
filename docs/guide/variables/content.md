---
---

# Content

The `--clea-content-margin-*` variables define the horizontal spacing in `.section` and `.grid` elements. This is the clea equivalent to the container in most other css frameworks. By using relative `vw` values, the spacing will be responsive, too.

```css
:root {
    --clea-content-margin-phone: 1rem;
    --clea-content-margin-mobile: 1.5rem;
    --clea-content-margin-tablet: 5vw;
    --clea-content-margin-desktop: 5vw;
    --clea-content-margin-widescreen: 5vw;
    --clea-content-margin-fullhd: 6vw;
}
```