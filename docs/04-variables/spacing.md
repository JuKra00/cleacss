---
title: Spacing
---

cleacss uses a fluid spacing system that scales smoothly between viewport sizes.

## Fixed sizes

9 spacing values from tiny to huge:

| Variable      | Small viewport | Large viewport |
| ------------- | -------------- | -------------- |
| `--space-2xs` | 4px            | 5px            |
| `--space-xs`  | 8px            | 10px           |
| `--space-s`   | 16px           | 20px           |
| `--space-m`   | 24px           | 30px           |
| `--space-l`   | 32px           | 40px           |
| `--space-xl`  | 48px           | 60px           |
| `--space-2xl` | 64px           | 80px           |
| `--space-3xl` | 96px           | 120px          |
| `--space-4xl` | 128px          | 160px          |

## Paired sizes

| Variable          | Small viewport | Large viewport |
| ----------------- | -------------- | -------------- |
| `--space-2xs-xs`  | 4px            | 10px           |
| `--space-xs-s`    | 8px            | 20px           |
| `--space-s-m`     | 16px           | 30px           |
| `--space-m-l`     | 24px           | 40px           |
| `--space-l-xl`    | 32px           | 60px           |
| `--space-xl-2xl`  | 48px           | 80px           |
| `--space-2xl-3xl` | 64px           | 120px          |
| `--space-3xl-4xl` | 96px           | 160px          |

## Jump sizes

| Variable         | Small viewport | Large viewport |
| ---------------- | -------------- | -------------- |
| `--space-s-l`    | 16px           | 40px           |
| `--space-m-xl`   | 24px           | 60px           |
| `--space-xl-3xl` | 48px           | 120px          |
| `--space-xl-4xl` | 48px           | 160px          |

## Default spacing

```css
:root {
  --space-default: var(--space-s-l);
}
```

Used by the grid gap and flow utilities when no size is specified.

## Usage

Use spacing variables anywhere you need consistent space:

```css
.card {
  padding: var(--space-m);
  margin-bottom: var(--space-l);
  gap: var(--space-s);
}

/* Fluid section spacing */
.section {
  padding-block: var(--space-xl-3xl);
}
```
