---
---

<script setup>
  import { useRoute } from 'vitepress';
  import { watchEffect, ref, onMounted } from "vue";
  const route = useRoute();
  const addOrRemoveStyles = (route) => {
    if(route.path.includes('section')) {
      const style = document.createElement('style');
      style.id = 'containerstyle';
      style.innerText = `.page > .container, .next-and-prev-link > .container {max-width: none !important;}`;
      document.documentElement.appendChild(style);
    } else {
      if(document.getElementById('containerstyle')) {
        document.getElementById('containerstyle').remove();
      }
    }
  }


  const width = ref(0);
  const containerWidth = ref(0);
  const container = ref(null)


  onMounted(() => {
    watchEffect(() => addOrRemoveStyles(route))
    container.value = document.getElementById('cleacss-container');
    containerWidth.value = container.value.clientWidth;
    window.addEventListener('resize', () => {
      containerWidth.value = container.value.clientWidth;
      width.value = window.innerWidth;
    })
  })
  </script>

# Section

A `.section` is a wrapper used to group content. It's always full-width and has a default vertical margin of `--cleacss-section-gap`.

```html
<section class="section">Lorem</section>
```

## Container

If you combine `.section` with a child `.container`, it creates a grid used to limit the vertical size of it's content depending on the viewport.

<div class="cleacss-demo">
<section class="section">
  <div id="cleacss-container" class="container py-1">
    <div class="columns mb-2">
      <div class="column has-text-right">
        <div class="infobox">
          <p class="title has-size-7 my-0">Window Width: {{ width }}px</p>
          <p class="title has-size-7 my-0">Container Width: {{ containerWidth }}px</p>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-6">
        <div class="text">
          <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
          </p>
        </div>
      </div>
      <div class="column is-6">
        <div class="text">
          <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
          </p>
        </div>
      </div>
    </div>
  </div>
  </section>
</div>

<section class="section">
<div class="container">

```html
<section class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-6">
        <div class="text">
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      <div class="column is-6">
        <div class="text">
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

</div>
</section>
