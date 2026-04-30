import { Component } from './Component.js';
import { ACCENT_COLORS } from '../data.js';

export class Tweaks extends Component {
  constructor(el, themeManager) {
    super(el);
    this._theme = themeManager;
  }

  render() {
    const swatches = Object.entries(ACCENT_COLORS).map(([key, a]) => `
      <button class="sw ${this._theme.get('accent') === key ? 'active' : ''}"
              style="background:${a.gold}"
              data-accent="${key}"
              title="${a.name}">
      </button>`).join('');

    return `
      <div class="tweaks-panel" id="tweaks-panel">
        <h4>Tweaks</h4>
        <div class="twk-row">
          <label>Accent Color</label>
          <div class="swatches">${swatches}</div>
        </div>
        <div class="twk-row">
          <label>Layout</label>
          <select class="twk-sel" id="layout-select">
            <option value="full">Full Layout</option>
            <option value="compact">Compact</option>
          </select>
        </div>
      </div>
      <button class="tweaks-toggle" id="tweaks-toggle" title="Tweaks">⚙</button>
    `;
  }

  bindEvents() {
    const panel  = this.find('#tweaks-panel');
    const toggle = this.find('#tweaks-toggle');

    toggle.addEventListener('click', () => panel.classList.toggle('open'));

    this.findAll('.sw').forEach(btn => {
      btn.addEventListener('click', () => {
        this._theme.set('accent', btn.dataset.accent);
        this.findAll('.sw').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }
}
