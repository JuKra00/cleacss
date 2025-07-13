---
title: cleacss
description: A lightweight and powerful framework thoughtfully designed for developers who love writing CSS.
---

# Overview

cleacss is a thoughtfully designed CSS framework for developers who love writing CSS. Rather than abstracting away CSS or overwhelming you with utility classes, cleacss provides a solid foundation with essential defaults while empowering you to write your own custom styles. It leverages modern CSS features like custom properties, subgrid, and responsive sizing to create a lightweight yet powerful system.

## Installation

Use your prefered package manager to install the cleacss package, or just download the latest release from the [releases page](https://github.com/jukra00/cleacss/releases).

> [!WARNING]
> Version 2 is currently in beta.


```bash
  npm install cleacss@2.0.0-beta.5
```

## Usage

## Import

When you're using a bundler like vite you can import the css file directly from the cleacss package in your javascript or css file.

### Javascript
```js
import "cleacss";
```

### CSS
```css
@import "cleacss";
```


## Concepts

### Custom properties

cleass is built on top of custom properties. You can use them to customize almost every part of the framework. All variables are on the `:root` level so you can easily override them on an element basis.

### Breakpoints

Cleacss has 5 breakpoints built-in. Internally, they are defined as custom media queries.

```css
@custom-media --s (min-width: 30rem);
@custom-media --s-max (max-width: 30rem);
@custom-media --m (min-width: 48rem);
@custom-media --m-max (max-width: 48rem);
@custom-media --l (min-width: 64rem);
@custom-media --l-max (max-width: 64rem);
@custom-media --xl (min-width: 80rem);
@custom-media --xl-max (max-width: 80rem);
@custom-media --2xl (min-width: 120rem);
@custom-media --2xl-max (max-width: 120rem);
```



If you want to be able to modify the breakpoint values, or use custom media queries yourself, you need to import the untranspiled version and use [Lightning CSS](https://lightningcss.dev) or another css preprocessor that supports custom media queries to convert them to browser standard.

```css
/* Import untranspiled version in css file */
@import "cleacss/untranspiled";
/* Overwrite default breakpoints */
@custom-media --m (min-width: 52rem);
@custom-media --m-max (max-width: 52rem);
```

