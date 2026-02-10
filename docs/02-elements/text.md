The `text` class is a wrapper for common typographic styles used with preformated content.

## Unordered list

Nested lists automatically get differentiated markers (square, disc, circle):

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

Nested ordered lists cycle through decimal, lower-alpha, and lower-roman:

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

## Blockquote

Blockquotes get a left accent border:

```html
<div class="text flow">
  <blockquote>
    <p>This is a blockquote with an accent-colored left border.</p>
  </blockquote>
</div>
```

## Inline elements

The following inline elements are styled globally (not limited to `.text`):

```html
<p>Use <mark>mark</mark> to highlight text.</p>
<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
<p>The <abbr title="World Wide Web">WWW</abbr> was invented in 1989.</p>
```

## Links

Links inside `.text` use the `--color-link` variable for their underline and hover color. Override it to customize link appearance independently from accent-colored elements:

```css
:root {
  --color-link: oklch(0.6 0.2 240); /* Custom blue links */
}
```
