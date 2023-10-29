---
---

# Spacing

There are spacing classes built in, which you can use to define the `margin` and `padding` of your elements. You can use numbers from `0` to `7` which resonate to the sizing values used for typography.

| classname | description                          |
| --------- | ------------------------------------ |
| m-\*      | margin: \*;                          |
| mt-\*     | margin-top: \*;                      |
| mr-\*     | margin-right: \*;                    |
| mb-\*     | margin-bottom: \*;                   |
| ml-\*     | margin-left: \*;                     |
| mx-\*     | margin-left: \*; margin-right: \*;   |
| my-\*     | margin-bottom: \*; margin-top: \*;   |
| p-\*      | padding: \*;                         |
| pt-\*     | padding-top: \*;                     |
| pr-\*     | padding-right: \*;                   |
| pb-\*     | padding-bottom: \*;                  |
| pl-\*     | padding-left: \*;                    |
| px-\*     | padding-left: \*; padding-right: \*; |
| py-\*     | padding-bottom: \*; padding-top: \*; |

<div class="cleacss-demo">
  <section class="section-dotted">
    <div class="container">
     <div class="columns">
        <div class="column">
          <div class="has-background p-0 my-0">
            <span class="has-text-bold">p-0 my-0</span>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="has-background p-1 my-1">
            <span class="has-text-bold">p-1 my-1</span>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="has-background p-2 my-2">
            <span class="has-text-bold">p-2 my-2</span>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="has-background p-3 my-3">
            <span class="has-text-bold">p-3 my-3</span>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="has-background p-4 my-4">
            <span class="has-text-bold">p-4 my-4</span>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="has-background p-5 my-5">
            <span class="has-text-bold">p-5 my-5</span>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="has-background p-6 my-6">
            <span class="has-text-bold">p-6 my-6</span>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="has-background p-7 my-7">
            <span class="has-text-bold">p-7 my-7</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

## Extend to use breakpoints


If you use the scss version you can make them responsive using the [breakpoint modifiers](/guide/#breakpoints), e.g. `mt-1-desktop` by extending using the `spacing` mixin like this. But be aware, that this add a lot of size to the css file.

```css
@include phone {
  @include spacing("phone");
}

@include mobile {
  @include spacing("mobile");
}

@include mobile-only {
  @include spacing("mobile-only");
}

@include tablet {
  @include spacing("tablet");
}

@include tablet-only {
  @include spacing("tablet-only");
}

@include desktop {
  @include spacing("desktop");
}

@include desktop-only {
  @include spacing("desktop-only");
}

@include widescreen {
  @include spacing("widescreen");
}

@include widescreen-only {
  @include spacing("widescreen-only");
}

@include fullhd {
  @include spacing("fullhd");
}
```
