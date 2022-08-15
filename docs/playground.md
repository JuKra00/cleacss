---
sidebar: false
customLayout: true
---

<script setup>
  import { ref, watch, computed} from "vue"
  const baseColor = ref(0)
  const colors = ['var(--c-brand)', 'purple', 'olive', 'maroon', 'orange', 'teal']
  const newColor = computed(() => colors[baseColor.value])
  const columnsGap = ref(1.5);
  const sectionGap = ref(3);
</script>

<div class="playground-wrap" :style="{'--clea-base-color':newColor}">
  <section class="hero section">
    <div class="container is-fullwidth">
        <div class="grid is-vcentered is-oneline-tablet is-gapless">
          <div class="column is-5-tablet is-offset-1-tablet is-12 has-z-index-2">
            <div class="text has-background-mobile-only has-background-phone p-3">
              <h1 class="title is-size-1-responsive">
                Playground
              </h1>
              <p class="subtitle is-size-4-responsive">
                Most parts of cleacss can easily be modified by css variables.
              </p>
              <div class="columns pt-2">
                <div class="column is-6">
                  <div class="input">
                    <label for="basecolor">--clea-base-color: {{newColor}}</label>
                    <input type="range" id="basecolor" min="0" max="5" v-model="baseColor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-8-tablet is-offset-4-tablet is-12 is-hidden-mobile-only is-hidden-phone">
            <div class="has-background has-aspect-ratio-hd"></div>
          </div>
      </div>
    </div>
  </section>
  <section class="section py-1">
    <div class="container">
      <div class="columns">
        <div class="column is-4 has-text-centered">
          <p class="title is-size-1">📏</p>
          <p class="title is-size-4-responsive">
            Responsive Typography
          </p>
          <div class="text">
            <p>
              You can use size classes <code>is-size-1-responsive</code> to <code>is-size-7-responsive</code> to style typography that is resized according to the viewport. <a href="/guide/elements/title.html#responsive-sizes" class="">Read more</a>
            </p>
          </div>
        </div>
        <div class="column is-4 has-text-centered">
          <p class="title is-size-1">💭</p>
          <p class="title is-size-4-responsive">
            Bring your own css
          </p>
          <div class="text">
            <p>Since cleacss aims to give you a solid base for your own creations, you should bring your own style, may it be BEM, [data]-Attributes or any other way you like.</p>
          </div>
        </div>
        <div class="column is-4 has-text-centered">
          <p class="title is-size-1">👌</p>
          <p class="title is-size-4-responsive">
          Helpers are your friend
          </p>
          <div class="text">
            <p>There are neat little helper classes to simplify things like spacing <code>mb-6-desktop</code>, visibility <code>is-hidden-phone</code> or backgrounds <code>has-background-widescreen</code>.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="columns pt-2">
        <div class="column is-6 is-3-desktop ml-a">
          <div class="input mb-6">
            <label for="sectiongap">--clea-section-gap: {{sectionGap}}em</label>
            <input type="range" id="sectiongap" min="3" max="8" v-model="sectionGap" />
          </div>
          <div class="input">
            <label for="columnsgap">--clea-columns-gap: {{columnsGap}}em</label>
            <input type="range" id="columnsgap" min="1.5" max="8" step="0.5" v-model="columnsGap" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" :style="{'--clea-section-gap': sectionGap + 'em'}">
    <div class="container">
      <div class="columns is-bottom" :style="{'--clea-columns-gap': columnsGap + 'em'}">
        <div class="column is-6">
          <div class="text">
            <h3>The .columns you all know & like</h3>
            <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
         <div class="column is-6">
          <div class="text">
            <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>


   <section class="section mb-0">
    <div class="container is-fullwidth">
      <div class="grid is-vcentered">
        <div class="column is-6-tablet is-12">
          <div class="text">
            <figure>
            <img src="/woods.jpg" />
            <figcaption>
            Photo by <a href="https://unsplash.com/@filipz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Filip Zrnzević</a> on <a href="https://unsplash.com/s/photos/woods?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </figcaption>
            </figure>
          </div>
        </div>
         <div class="column is-5-tablet is-10 is-offset-1-phone is-offset-1-mobile-only">
          <div class="text pl-1-tablet">
            <h3>Powerful .grid</h3>
            <p>
            With the <code>.grid</code> class it is easy to break out of the norm and create sections which are both in and out  of the pages main content bounds.
            </p>
            <hr class="has-background" />
          </div>
        </div>
      </div>
    </div>

  </section>

</div>

<style>
  .hero {
    margin-top: 3.6rem;
  }

  input[type="range"] {
    background-color: transparent;
  }

  .hero .button {

  }
</style>
