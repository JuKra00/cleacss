var f=Object.defineProperty;var y=(a,n,e)=>n in a?f(a,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[n]=e;var g=(a,n,e)=>y(a,typeof n!="symbol"?n+"":n,e);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();class b extends HTMLElement{constructor(){super();g(this,"debugColumns",null);g(this,"toggleButton",null);g(this,"STORAGE_KEY","cleacss-grid-visibility");this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners();const e=this.getStoredVisibility();this.toggleGridVisibility(e)}disconnectedCallback(){var e;(e=this.toggleButton)==null||e.removeEventListener("click",this.handleToggleClick)}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
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
            [full-start] minmax(var(--grid-margin-min), var(--grid-margin-max)) [content-start] repeat(12, minmax(0, 1fr)) [content-end] minmax(var(--grid-margin-min), var(--grid-margin-max)) [full-end];
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
    `,this.toggleButton=this.createButton(),this.shadowRoot.appendChild(this.toggleButton),this.debugColumns=this.shadowRoot.querySelector(".grid-columns-debug"))}generateColumnSpans(){return Array.from({length:14},(e,o)=>`<span data-col="${o>0&&o<13?o:"—"}"></span>`).join("")}createButton(){const e=document.createElement("button");return e.classList.add("grid-overlay-toggle"),e.textContent="Show Grid",e}setupEventListeners(){var e;this.handleToggleClick=this.handleToggleClick.bind(this),(e=this.toggleButton)==null||e.addEventListener("click",this.handleToggleClick)}handleToggleClick(){var o;const e=((o=this.debugColumns)==null?void 0:o.style.display)!=="none";this.toggleGridVisibility(!e)}toggleGridVisibility(e){!this.debugColumns||!this.toggleButton||(this.debugColumns.style.display=e?"grid":"none",this.toggleButton.textContent=e?"Hide Grid":"Show Grid",this.saveVisibilityState(e),e?document.body.classList.add("grid-overlay"):document.body.classList.remove("grid-overlay"))}getStoredVisibility(){try{return sessionStorage.getItem(this.STORAGE_KEY)==="true"}catch{return!1}}saveVisibilityState(e){try{sessionStorage.setItem(this.STORAGE_KEY,e.toString())}catch{}}}customElements.define("grid-visualizer",b);const m=document.createElement("canvas").getContext("2d"),v=()=>{const a=[0,50,100,200,300,400,500,600,700,800,900,1e3],n=document.getElementById("swatches"),e=document.getElementById("hue-input"),o=document.getElementById("chroma-input"),t=document.getElementById("hue-value"),r=document.getElementById("chroma-value");if(n===null||e===null||o===null||t===null||r===null)return;a.forEach(s=>{const i=document.createElement("div");i.className="flow has-items-center has-gap-2xs has-w-auto";const d=document.createElement("div");d.className=`swatch has-background-neutral-${s}`,s===0&&(d.style.border="1px solid var(--color-neutral-200)");const l=document.createElement("span");l.className="swatch-label",l.textContent=`${s}`;const u=document.createElement("code");u.className="swatch-label",u.id=`hex-${s}`,i.appendChild(d),i.appendChild(l),i.appendChild(u),n.appendChild(i)});function c(s){if(!m)return"";m.fillStyle=s,m.fillRect(0,0,1,1);const[i,d,l]=m.getImageData(0,0,1,1).data;return"#"+[i,d,l].map(u=>u.toString(16).padStart(2,"0")).join("")}function h(){n&&a.forEach(s=>{const i=n.querySelector(`.has-background-neutral-${s}`);if(!i)return;const d=getComputedStyle(i).backgroundColor,l=document.getElementById(`hex-${s}`);l&&(l.textContent=c(d))})}function p(){if(!e||!o||!t||!r)return;const s=e.value,i=o.value;t.textContent=s,r.textContent=i,document.documentElement.style.setProperty("--color-neutral-h",s),document.documentElement.style.setProperty("--color-neutral-c",i),requestAnimationFrame(h)}e.addEventListener("input",p),o.addEventListener("input",p),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{requestAnimationFrame(h)}),h()};document.addEventListener("DOMContentLoaded",v);
