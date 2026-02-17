import "./index.css";
import "./grid-visualizer";


const ctx = document.createElement('canvas').getContext('2d');

const generateColorPalette = () => {

  const steps = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  const swatchContainer = document.getElementById('swatches');
  const hueInput = document.getElementById('hue-input') as HTMLInputElement | null;
  const chromaInput = document.getElementById('chroma-input') as HTMLInputElement | null;
  const hueValue = document.getElementById('hue-value');
  const chromaValue = document.getElementById('chroma-value');

  if (swatchContainer === null || hueInput === null || chromaInput === null || hueValue === null || chromaValue === null) return;

  // Build swatch elements
  steps.forEach(step => {
    const col = document.createElement('div');
    col.className = 'flow has-items-center has-gap-2xs has-w-auto';

    const swatch = document.createElement('div');
    swatch.className = `swatch has-background-neutral-${step}`;
    if (step === 0) swatch.style.border = '1px solid var(--color-neutral-200)';

    const label = document.createElement('span');
    label.className = 'swatch-label';
    label.textContent = `${step}`;

    const hex = document.createElement('code');
    hex.className = 'swatch-label';
    hex.id = `hex-${step}`;

    col.appendChild(swatch);
    col.appendChild(label);
    col.appendChild(hex);
    swatchContainer.appendChild(col);
  });


  function colorToHex(cssColor: string) {
    if (!ctx) return "";
    ctx.fillStyle = cssColor;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
    return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
  }

  function updateHexValues() {
    if (!swatchContainer) return;
    steps.forEach(step => {
      const swatch = swatchContainer.querySelector(`.has-background-neutral-${step}`) as HTMLElement | null;
      if (!swatch) return;
      const computed = getComputedStyle(swatch).backgroundColor;
      const target = document.getElementById(`hex-${step}`) as HTMLElement | null;
      if (!target) return;
      target.textContent = colorToHex(computed);
    });
  }

  function update() {
    if (!hueInput || !chromaInput || !hueValue || !chromaValue) return;
    const h = hueInput.value;
    const c = chromaInput.value;
    hueValue.textContent = h;
    chromaValue.textContent = c;
    document.documentElement.style.setProperty('--color-neutral-h', h);
    document.documentElement.style.setProperty('--color-neutral-c', c);
    requestAnimationFrame(updateHexValues);
  }

  hueInput.addEventListener('input', update);
  chromaInput.addEventListener('input', update);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    requestAnimationFrame(updateHexValues);
  });

  updateHexValues();
}


document.addEventListener('DOMContentLoaded', generateColorPalette);

const tooltips = document.querySelectorAll("[popover='hint']") as NodeListOf<HTMLElement>;
const buttons = document.querySelectorAll("[data-demo-tooltip]") as NodeListOf<HTMLButtonElement>;

function addEventListeners(i: number) {
  buttons[i].addEventListener("mouseover", () => {
    tooltips[i].showPopover();
  });

  buttons[i].addEventListener("mouseout", () => {
    tooltips[i].hidePopover();
  });

  buttons[i].addEventListener("focus", () => {
    tooltips[i].showPopover();
  });

  buttons[i].addEventListener("blur", () => {
    tooltips[i].hidePopover();
  });
}

for (let i = 0; i < buttons.length; i++) {
  addEventListeners(i);
}
