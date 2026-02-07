---
title: Input
---

Form inputs use a wrapper pattern for consistent styling across all input types. The wrapper provides layout structure while the input itself handles user interaction.

## Structure

Each input type uses a container class (`.input`, `.select`, `.checkbox`, `.radio`) that wraps the label, input element, and optional messages. This structure enables:
- Consistent vertical spacing between label and input
- Proper error message positioning
- Unified styling across browsers

## Basic input

```html
<div class="input">
  <label for="text">Text</label>
  <input type="text" id="text" placeholder="Text">
  <span class="message">This is a helpful message.</span>
  <span class="message message--error">Input is required.</span>
</div>
```

## Select input

```html
<div class="select">
  <label for="select">Select</label>
  <select type="select" id="select">
    <option disabled>Lorem Ipsum</option>
    <option>Varius urna</option>
    <option>Facilisi natoque</option>
  </select>
  <span class="message">This is a helpful message.</span>
  <span class="message message--error">Input is required.</span>
</div>
```

## Checkbox input

```html
<div class="checkbox">
  <label for="checkbox">
    <input type="checkbox" id="checkbox" />
    Vivamus hendrerit tortor sagittis hac npraesent
  </label>
  <span class="message">This is a helpful message.</span>
  <span class="message message--error">Input is required.</span>
</div>
```

## Radio input

```html
<div class="radio">
  <label for="radio">
    <input type="radio" id="radio" name="radio" />
    Lorem Ipsum
  </label>
  <span class="message">This is a helpful message.</span>
  <span class="message message--error">Input is required.</span>
</div>
```

## Configuration

```css
:root {
  /* Colors */
  --input-color: var(--color-neutral-900);
  --input-color-error: var(--color-error);
  --input-color-disabled: var(--color-neutral-300);
  --input-background-color: var(--color-neutral-50);
  --input-placeholder-color: var(--color-neutral-500);
  --input-message-color: var(--color-neutral-500);

  /* Label */
  --input-label-color: var(--color-neutral-700);
  --input-label-weight: var(--font-weight-normal);
  --input-label-padding: 0 0 var(--space-xs) 0;
  --input-label-font-size: var(--font-size-7);

  /* Sizing */
  --input-font-size: var(--font-size-7);
  --input-min-height: calc(var(--input-padding-y) * 2 + 1.5rem);
  --input-padding-y: 0.5rem;
  --input-padding-x: 0.75rem;

  /* Border */
  --input-border-width: 1px;
  --input-border-radius: var(--border-radius-s);
  --input-border-color: var(--color-neutral-300);

  /* Focus outline */
  --input-outline-color: var(--outline-color);
  --input-outline-width: var(--outline-width);
  --input-outline-offset: var(--outline-offset);

  /* Checkbox & Radio */
  --input-checkbox-border-radius: var(--border-radius-s);
  --input-checkbox-accent: var(--color-accent);
  --input-radio-border-radius: var(--border-radius-rounded);
  --input-radio-accent: var(--color-accent);

  /* Select & Range */
  --input-select-accent: var(--color-accent);
  --input-range-accent: var(--color-accent);
  --input-range-handle-border-radius: var(--border-radius-rounded);
}
```
