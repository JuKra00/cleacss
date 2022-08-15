---
sidebarDepth: 3
---

# Overview

Cleacss is inspired by some of the most amazing css frameworks out there. A huge inspiration was [spectre.css](https://picturepan2.github.io/spectre/index.html) as well as [bulma.io](https://bulma.io). You should check them out, if you need a more complex css framework or pre made components.

Cleacss aims to give you a solid and versatile foundation for modern websites and webapplications without building too much of a boilerplate and limiting your own css skills.

## Beta

This framework is currently in open beta. Feel free to check it out and contribute feedback. Since the base work is done, I don't expect to introduce breaking changes anymore, but nevertheless you should be aware: **Use in production at your own risk.**

## Installation

### Install via npm

Use your prefered packagemanager to install the cleacss package from [npmjs](https://npmjs.com).

```bash
  pnpm add cleacss
```

```bash
  yarn add cleacss
```

```bash
  npm install cleacss
```

## Usage

### Import in js

```js
// Import the scss version
import "cleacss";
// Or import css version
import "cleacss/css";
```

### Import in scss

```scss
// Optionally import global scss methods (e.g. mixins) to use in your code
@import "cleacss/global";

// Import main scss file
@import "cleacss";
```

## Concepts

### Variables

Although cleacss uses sass itself, you can customize most parts using css variables. All variables are prefixed with `clea` to avoid conflicts with your codebase. Using these variables, you can easily override properties on an element basis, too.

<style>
  .is-secondary {
    --clea-base-color: hotpink;
  }
</style>

<a class="button is-secondary" href="/guide/variables/sizes.html#sizes">Find out more</a>

```html
<style>
  .is-secondary {
    --clea-base-color: hotpink;
  }
</style>
<button class="button is-secondary">Find out more</button>
```

### Breakpoints

To handle responsiveness, cleacss has 5 breakpoints built-in. If your using the sass version in your project, there are handy @mixins for you to use. Each mixin is named as referenced in the following table.

```scss
@include desktop {
  width: 5rem;
}
```

| name              | min-width | max-width |
| ----------------- | --------- | --------- |
| `phone`           | -         | `479px`   |
| `mobile`          | `480px`   | -         |
| `mobile-only`     | `480px`   | `839px`   |
| `tablet`          | `840px`   | -         |
| `tablet-only`     | `840px`   | `959px`   |
| `desktop`         | `960px`   | -         |
| `desktop-only`    | `960px`   | `1279px`  |
| `widescreen`      | `1280px`  | -         |
| `widescreen-only` | `1280px`  | `1439px`  |
| `fullhd`          | `1440px`  | -         |
