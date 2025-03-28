The `text` class is a wrapper for common typographic styles used with preformated content.

## Unordered list
<script src="https://vite.test/lib/playground.js" type="module"></script>
<cleacss-playground src="https://vite.test/cleacss.css">
  <div class="text flow">
    <ul>
      <li>Lorem Ipsum sit dolor amet</li>
      <li>Lorem Ipsum sit dolor amet
        <ul>
          <li>Lorem Ipsum sit dolor amet</li>
          <li>Lorem Ipsum sit dolor amet</li>
          <li>Lorem Ipsum sit dolor amet</li>
        </ul>
      </li>
      <li>Lorem Ipsum sit dolor amet</li>
    </ul>
  </div>
</cleacss-playground>

```html
<div class="text flow">
  <ul>
    <li>Lorem Ipsum sit dolor amet</li>
    <li>
      Lorem Ipsum sit dolor amet
      <ul>
        <li>Lorem Ipsum sit dolor amet</li>
        <li>Lorem Ipsum sit dolor amet</li>
        <li>Lorem Ipsum sit dolor amet</li>
      </ul>
    </li>
    <li>Lorem Ipsum sit dolor amet</li>
  </ul>
</div>
```

## Ordered list

<cleacss-playground src="https://vite.test/cleacss.css">
  <div class="text flow">
    <ol>
      <li>Lorem Ipsum sit dolor amet</li>
      <li>Lorem Ipsum sit dolor amet
        <ol>
          <li>Lorem Ipsum sit dolor amet</li>
          <li>Lorem Ipsum sit dolor amet</li>
          <li>Lorem Ipsum sit dolor amet</li>
        </ol>
      </li>
      <li>Lorem Ipsum sit dolor amet</li>
    </ol>
  </div>
</cleacss-playground>

```html
<div class="text flow">
  <ol>
    <li>Lorem Ipsum sit dolor amet</li>
    <li>
      Lorem Ipsum sit dolor amet
      <ol>
        <li>Lorem Ipsum sit dolor amet</li>
        <li>Lorem Ipsum sit dolor amet</li>
        <li>Lorem Ipsum sit dolor amet</li>
      </ol>
    </li>
    <li>Lorem Ipsum sit dolor amet</li>
  </ol>
</div>
```

## Paragraph

<cleacss-playground src="https://vite.test/cleacss.css">
  <div class="text flow">
    <p>Lorem ipsum dolor sit amet, <strong>consetetur sadipscing</strong> elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
    <p>At vero eos et accusam et <em>justo duo dolores</em> et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
    <p>At vero eos et accusam et <a href="#">justo duo dolores</a> et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
  </div>
</cleacss-playground>

```html
<div class="text flow">
  <p>
    Lorem ipsum dolor sit amet, <strong>consetetur sadipscing</strong> elitr,
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
    erat, sed diam voluptua.
  </p>
  <p>
    At vero eos et accusam et <em>justo duo dolores</em> et ea rebum. Stet clita
    kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua.
  </p>
  <p>
    At vero eos et accusam et <a href="#">justo duo dolores</a> et ea rebum.
    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet.
  </p>
</div>
```
