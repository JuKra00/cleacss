class GridVisualizer extends HTMLElement {
  private debugColumns: HTMLElement | null = null;
  private toggleButton: HTMLButtonElement | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
    // Initialize the grid as hidden
    this.toggleGridVisibility(false);
  }

  disconnectedCallback() {
    // Clean up event listeners when component is removed
    this.toggleButton?.removeEventListener('click', this.handleToggleClick);
  }

  private render() {
    if (!this.shadowRoot) return;
    this.shadowRoot.innerHTML = `
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
          row-gap: var(--grid-y-gap);
          column-gap: var(--grid-x-gap);
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
    `;

    this.toggleButton = this.createButton();
    this.shadowRoot.appendChild(this.toggleButton);
    this.debugColumns = this.shadowRoot.querySelector('.grid-columns-debug');
  }

  private generateColumnSpans() {
    return Array.from({ length: 12 }, (_, i) => {
      return `<span data-col="${i > 0 && i < 11 ? i : ''}"></span>`;
    }).join('');
  }

  private createButton() {
    const toggleButton = document.createElement('button');
    toggleButton.classList.add('grid-overlay-toggle');
    toggleButton.textContent = 'Show Grid';
    return toggleButton;
  }

  private setupEventListeners() {
    // Use bound method to handle event properly
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.toggleButton?.addEventListener('click', this.handleToggleClick);
  }

  private handleToggleClick() {
    const isCurrentlyVisible = this.debugColumns?.style.display !== 'none';
    this.toggleGridVisibility(!isCurrentlyVisible);
  }

  private toggleGridVisibility(visible: boolean) {
    if (!this.debugColumns || !this.toggleButton) return;

    this.debugColumns.style.display = visible ? 'grid' : 'none';
    this.toggleButton.textContent = visible ? 'Hide Grid' : 'Show Grid';

    // Optionally toggle a class on body if needed for other styling
    if (visible) {
      document.body.classList.add('grid-overlay');
    } else {
      document.body.classList.remove('grid-overlay');
    }
  }
}

customElements.define('grid-visualizer', GridVisualizer);
