var r = Object.defineProperty;
var a = (n, t, e) => t in n ? r(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var o = (n, t, e) => a(n, typeof t != "symbol" ? t + "" : t, e);
class i extends HTMLElement {
  constructor() {
    var e, s;
    super();
    o(this, "container");
    o(this, "styleElement");
    o(this, "shadowRoot", null);
    this.shadowRoot = this.attachShadow({ mode: "open" }), this.container = document.createElement("div"), this.container.classList.add("playground-container"), this.styleElement = document.createElement("style"), (e = this.shadowRoot) == null || e.appendChild(this.styleElement), (s = this.shadowRoot) == null || s.appendChild(this.container), this.styleElement.textContent = `
      .playground-container {
        padding: 20px;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        background-color: #f9f9f9;
        margin: 16px 0;
      }
    `;
  }
  connectedCallback() {
    const e = this.innerHTML;
    this.container.innerHTML = e, this.loadCSSFramework();
  }
  loadCSSFramework() {
    var s;
    const e = document.createElement("link");
    e.rel = "stylesheet", e.href = this.getAttribute("src") || "/path/to/your/cleacss.css", (s = this.shadowRoot) == null || s.insertBefore(e, this.styleElement);
  }
  // Handle attribute changes
  static get observedAttributes() {
    return ["src"];
  }
}
customElements.define("cleacss-playground", i);
