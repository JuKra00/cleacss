---
---

# Background

The `.has-background` helper adds a background-color to an element. It handles background and text color and provides inverted `::selection` colors, too.

<div class="cleacss-demo">
  <section class="section has-background">
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="py-1 has-text-bold">.has-background</div>
      </div>
    </div>
    </div>
  </section>
</div>

## Responsive backgrounds

You can use the [breakpoint modifiers](/guide/#breakpoints) to add a background on a certain breakpoint, e.g. `.has-background-desktop` will show the background-color on desktop and upwards.

<div class="cleacss-demo">
  <section class="section has-background-desktop">
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="py-1 has-text-bold">.has-background-desktop</div>
      </div>
    </div>
    </div>
  </section>
</div>


## Add your own colors

You can easily add your own background colors by extending the `.has-background` class.

```css
  .has-background--mycolor {
    --clea-background-color: teal;
    --clea-background-color-invert: yellow;
  }
```

<style>
  .has-background--mycolor {
    --clea-background-color: teal;
    --clea-background-color-invert: yellow;
  }
</style>
<div class="cleacss-demo">
  <section class="section has-background has-background--mycolor">
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="py-1 has-text-bold">.has-background</div>
      </div>
    </div>
    </div>
  </section>
</div>