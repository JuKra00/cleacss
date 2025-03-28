All input elements come with a base styling and simplified markup.

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


## Playground

<script src="https://vite.test/lib/playground.js" type="module"></script>
<cleacss-playground src="https://vite.test/cleacss.css">

  <div class="grid">
    <div class="span-full subgrid">
      <div class="span-6 flow">
        <div class="input">
          <label for="text">Text</label>
          <input type="text" id="text" placeholder="Text">
          <span class="message">This is a helpful message.</span>
          <span class="message message--error">Input is required.</span>
        </div>
        <div class="input">
          <label for="color">Color</label>
          <input type="color" id="color">
          <span class="message">This is a helpful message.</span>
          <span class="message message--error">Input is required.</span>
        </div>
        <div class="input">
          <label for="date">Date</label>
          <input type="date" id="date">
          <span class="message">This is a helpful message.</span>
          <span class="message message--error">Input is required.</span>
        </div>
        <div class="input">
          <label for="datetime-local">Datetime local</label>
          <input type="datetime-local" id="datetime-local">
          <span class="message">This is a helpful message.</span>
          <span class="message message--error">Input is required.</span>
        </div>
        <div class="input">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="max@mustermann.de">
          <span class="message">This is a helpful message.</span>
          <span class="message message--error">Input is required.</span>
        </div>
        <div class="input">
          <label for="file">File</label>
          <input type="file" id="file">
          <span class="message">This is a helpful message.</span>
          <span class="message message--error">Input is required.</span>
        </div>
        <div class="input">
          <label for="month">Month</label>
          <input type="month" id="month" placeholder="01">
          <span class="message">This is a helpful message.</span>
          <span class="message message--error">Input is required.</span>
        </div>
        <div class="input">
          <label for="textarea">Textarea</label>
          <textarea id="textarea" placeholder="Lorem Ipsum..."></textarea>
          <span class="message">This is a helpful message.</span>
          <span class="message message--error">Input is required.</span>
        </div>
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
        <div class="input">
          <label for="hidden">Hidden</label>
          <input type="hidden" id="hidden">
          <span class="message">This is a helpful message.</span>
          <span class="message message--error">Input is required.</span>
        </div>
        <div class="input">
          <label for="textr">Readonly</label>
          <input type="text" readonly id="textr" value="Lorem Ipsum">
        </div>
        <div class="input">
          <label for="textr">Disabled</label>
          <input type="text" disabled id="textr" value="Lorem Ipsum">
        </div>
      </div>
      <div class="span-6 flow">
        <div class="input">
          <label for="number">Number</label>
          <input type="number" id="number" placeholder="0">
          <span class="message">This is a helpful message.</span>
          <span class="message message--error">Input is required.</span>
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="********">
          <span class="message">This is a helpful message.</span>
          <span class="message message--error">Input is required.</span>
        </div>
        <div class="input">
          <label for="range">Range</label>
          <input type="range" id="range" min="0" max="100">
          <span class="message">This is a helpful message.</span>
          <span class="message message--error">Input is required.</span>
        </div>
        <div class="input">
          <label for="search">Search</label>
          <input type="search" id="search" placeholder="search">
          <span class="message">This is a helpful message.</span>
          <span class="message message--error">Input is required.</span>
        </div>
        <div class="input">
          <label for="tel">Tel</label>
          <input type="tel" id="tel" placeholder="+49 1234 56 78">
          <span class="message">This is a helpful message.</span>
          <span class="message message--error">Input is required.</span>
        </div>
        <div class="input">
          <label for="time">Time</label>
          <input type="time" id="time" placeholder="Time">
          <span class="message">This is a helpful message.</span>
          <span class="message message--error">Input is required.</span>
        </div>
        <div class="input">
          <label for="url">Url</label>
          <input type="url" id="url" placeholder="https://cleacss.dev">
          <span class="message">This is a helpful message.</span>
          <span class="message message--error">Input is required.</span>
        </div>
        <div class="input">
          <label for="week">Week</label>
          <input type="week" id="week" placeholder="1">
          <span class="message">This is a helpful message.</span>
          <span class="message message--error">Input is required.</span>
        </div>
        <div class="checkbox">
          <label for="checkbox1">
            <input type="checkbox" id="checkbox1" />
            Vivamus hendrerit tortor sagittis hac nec bibendum potenti dictumst nascetur proin torquent quisque praesent
            non
          </label>
          <span class="message">This is a helpful message.</span>
          <span class="message message--error">Input is required.</span>
        </div>
        <div class="checkbox">
          <label for="checkbox2">
            <input type="checkbox" id="checkbox2" />
            Lorem Ipsum
          </label>
          <span class="message">This is a helpful message.</span>
          <span class="message message--error">Input is required.</span>
        </div>
        <div class="flow gap-xs">
          <div class="radio">
            <label for="radio1">
              <input type="radio" id="radio1" name="radio" />
              Lorem Ipsum
            </label>
            <span class="message">This is a helpful message.</span>
            <span class="message message--error">Input is required.</span>
          </div>
          <div class="radio">
            <label for="radio2">
              <input type="radio" id="radio2" name="radio" />
              Lorem Ipsum
            </label>
            <span class="message">This is a helpful message.</span>
            <span class="message message--error">Input is required.</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</cleacss-playground>
