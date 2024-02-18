---
---

# Input

## Elements

```html
<div class="input">
  <label for="text">Text</label>
  <input type="text" id="text" placeholder="Text" />
</div>
```

<div class="columns">

  <div class="column column-12">
    <div class="input">
      <label for="text">Text</label>
      <input type="text" id="text" placeholder="Text">
    </div>
  </div>
</div>
<div class="columns mt-3">

  <div class="column column-6">
    <div class="input">
      <label for="color">Color</label>
      <input type="color" id="color">
    </div>
  </div>

  <div class="column column-6">
    <div class="input">
      <label for="date">Date</label>
      <input type="date" id="date">
    </div>
  </div>

  <div class="column column-6">
    <div class="input">
      <label for="datetime-local">Datetime local</label>
      <input type="datetime-local" id="datetime-local">
    </div>
  </div>

  <div class="column column-6">
    <div class="input">
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="max@mustermann.de">
    </div>
  </div>

  <div class="column column-6">
    <div class="input">
      <label for="file">File</label>
      <input type="file" id="file">
    </div>
  </div>

  <div class="column column-6">
    <div class="input">
      <label for="hidden">Hidden</label>
      <input type="hidden" id="hidden">
    </div>
  </div>

  <div class="column column-6">
    <div class="input">
      <label for="month">Month</label>
      <input type="month" id="month" placeholder="01">
    </div>
  </div>

  <div class="column column-6">
    <div class="input">
      <label for="number">Number</label>
      <input type="number" id="number" placeholder="0">
    </div>
  </div>

  <div class="column column-6">
    <div class="input">
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="********">
    </div>
  </div>

  <div class="column column-6">
    <div class="input">
      <label for="range">Range</label>
      <input type="range" id="range" min="0" max="100">
    </div>
  </div>

  <div class="column column-6">
    <div class="input">
      <label for="search">Search</label>
      <input type="search" id="search" placeholder="search">
    </div>
  </div>

  <div class="column column-6">
    <div class="input">
      <label for="tel">Tel</label>
      <input type="tel" id="tel" placeholder="+49 1234 56 78">
    </div>
  </div>

  <div class="column column-6">
    <div class="input">
      <label for="time">Time</label>
      <input type="time" id="time" placeholder="Time">
    </div>
  </div>

  <div class="column column-6">
    <div class="input">
      <label for="url">Url</label>
      <input type="url" id="url" placeholder="https://cleacss.dev">
    </div>
  </div>

  <div class="column column-6">
    <div class="input">
      <label for="week">Week</label>
      <input type="week" id="week" placeholder="1">
    </div>
  </div>

  <div class="column column-6">
    <div class="input">
      <label for="textarea">Textarea</label>
      <textarea id="textarea" placeholder="Lorem Ipsum..."></textarea>
    </div>
  </div>

</div>

## Select

```html
<div class="select">
  <select type="select" id="select">
    <option disabled>Lorem Ipsum</option>
    <option>Varius urna</option>
    <option>Facilisi natoque</option>
  </select>
</div>
```

<div class="columns mt-4">
  <div class="column column-12">
    <div class="select">
      <select type="select" id="select1">
        <option disabled>Lorem Ipsum</option>
        <option>Varius urna</option>
        <option>Facilisi natoque</option>
      </select>
    </div>
  </div>
</div>


## Checkboxes

```html
<div class="checkbox">
  <label for="checkbox1">
    <input type="checkbox" id="checkbox1" />
    Lorem Ipsum
  </label>
</div>
<div class="checkbox">
  <label for="checkbox2">
    <input type="checkbox" id="checkbox2" />
    Lorem Ipsum
  </label>
</div>
```

<div class="columns mt-4">
  <div class="column column-12">
    <div class="checkbox">
      <label for="checkbox1">
        <input type="checkbox" id="checkbox1">
        Lorem Ipsum
      </label>
    </div>
    <div class="checkbox">
      <label for="checkbox2">
        <input type="checkbox" id="checkbox2">
        Lorem Ipsum
      </label>
    </div>
  </div>
</div>

## Radio

```html
<div class="radio">
  <label for="radio1">
    <input type="radio" id="radio1" name="radio" />
    Lorem Ipsum
  </label>
</div>
<div class="radio">
  <label for="radio2">
    <input type="radio" id="radio2" name="radio" />
    Lorem Ipsum
  </label>
</div>
```

<div class="columns mt-4">
  <div class="column column-12">
    <div class="radio">
      <label for="radio1">
        <input type="radio" id="radio1" name="radio">
        Lorem Ipsum
      </label>
    </div>
    <div class="radio">
      <label for="radio2">
        <input type="radio" id="radio2" name="radio">
        Lorem Ipsum
      </label>
    </div>
  </div>
</div>

## Disabled

<div class="columns mt-4">
  <div class="column column-12">
    <div class="input">
      <label for="textd">Lorem Ipsum</label>
      <input type="text" disabled id="textd" value="Lorem Ipsum">
    </div>
  </div>
  <div class="column column-12">
    <div class="radio is-disabled">
      <label for="radio3">
        <input type="radio" id="radio3" disabled>
        Lorem Ipsum
      </label>
    </div>
  </div>
  <div class="column column-12">
    <div class="checkbox is-disabled">
      <label for="checkbox3">
        <input type="checkbox" id="checkbox3" disabled>
        Lorem Ipsum
      </label>
    </div>
  </div>
</div>

## Readonly

<div class="columns">
  <div class="column column-12">
    <div class="input">
      <label for="textr">Lorem Ipsum</label>
      <input type="text" readonly id="textr" value="Lorem Ipsum">
    </div>
  </div>
</div>

## Messages

```html
<div class="input">
  <label for="text">Lorem Ipsum</label>
  <input type="text" id="text" placeholder="Lorem Ipsum" />
  <span class="message">This is a helpful message.</span>
  <span class="message message--error">Input is required.</span>
</div>
```

<div class="columns">
  <div class="column column-12">
    <div class="input">
      <label for="textm">Lorem Ipsum</label>
      <input type="text" id="textm" placeholder="Lorem Ipsum">
      <span class="message">This is a helpful message.</span>
      <span class="message message--error">Input is required.</span>
    </div>
  </div>
</div>
