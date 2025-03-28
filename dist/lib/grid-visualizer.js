var r = Object.defineProperty;
var s = (o, e, t) => e in o ? r(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var n = (o, e, t) => s(o, typeof e != "symbol" ? e + "" : e, t);
class l extends HTMLElement {
  constructor() {
    super();
    n(this, "debugColumns", null);
    n(this, "toggleButton", null);
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render(), this.setupEventListeners(), this.toggleGridVisibility(!1);
  }
  disconnectedCallback() {
    var t;
    (t = this.toggleButton) == null || t.removeEventListener("click", this.handleToggleClick);
  }
  render() {
    this.shadowRoot && (this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 100vh;
          z-index: 998;
          pointer-events: none; /* Allow clicks to pass through to elements below */
        }

        .grid-columns-debug {
         display: grid;
          grid-template-columns:
            [full-start] minmax(var(--grid-margin-min), var(--grid-margin-max)) [content-start] repeat(10, minmax(0, 1fr)) [content-end] minmax(var(--grid-margin-min), var(--grid-margin-max)) [full-end];
          row-gap: var(--grid-gap-y);
          column-gap: var(--grid-gap-x);
          height: 100vh;
          background: rgba(255, 255, 255, 0.2);
        }

        .grid-columns-debug > span {
          border-inline: 1px dashed rgba(153, 153, 153, 0.8);
          font-size: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-weight: bold;
          position: relative;
        }

        .grid-columns-debug > span::after {
          content: attr(data-col);
          position: absolute;
          top: 32px; /* Change from bottom to top for better visibility */
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.7);
          padding: 2px 6px;
          border-radius: 4px;
        }

        /* Toggle button for grid overlay */
        .grid-overlay-toggle {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #333;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 8px 12px;
          font-family: sans-serif;
          cursor: pointer;
          z-index: 1001;
          pointer-events: auto; /* Make button clickable */
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
          transition: background-color 0.2s;
        }

        .grid-overlay-toggle:hover {
          background: #555;
        }
      </style>
      <div class="grid-columns-debug">
        ${this.generateColumnSpans()}
      </div>
    `, this.toggleButton = this.createButton(), this.shadowRoot.appendChild(this.toggleButton), this.debugColumns = this.shadowRoot.querySelector(".grid-columns-debug"));
  }
  generateColumnSpans() {
    return Array.from({ length: 12 }, (t, i) => `<span data-col="${i > 0 && i < 11 ? i : ""}"></span>`).join("");
  }
  createButton() {
    const t = document.createElement("button");
    return t.classList.add("grid-overlay-toggle"), t.textContent = "Show Grid", t;
  }
  setupEventListeners() {
    var t;
    this.handleToggleClick = this.handleToggleClick.bind(this), (t = this.toggleButton) == null || t.addEventListener("click", this.handleToggleClick);
  }
  handleToggleClick() {
    var i;
    const t = ((i = this.debugColumns) == null ? void 0 : i.style.display) !== "none";
    this.toggleGridVisibility(!t);
  }
  toggleGridVisibility(t) {
    !this.debugColumns || !this.toggleButton || (this.debugColumns.style.display = t ? "grid" : "none", this.toggleButton.textContent = t ? "Hide Grid" : "Show Grid", t ? document.body.classList.add("grid-overlay") : document.body.classList.remove("grid-overlay"));
  }
}
customElements.define("grid-visualizer", l);
