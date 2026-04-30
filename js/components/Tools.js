import { Component } from './Component.js';
import { TOOLS } from '../data.js';

export class Tools extends Component {
  constructor(el) {
    super(el);
    this._active = 0;
  }

  _navHtml() {
    return TOOLS.map((t, i) => `
      <button class="tnav-btn ${i === this._active ? 'active' : ''}" data-index="${i}">
        <div class="tnb-icon">${t.icon}</div>
        <div>
          <div class="tnb-title">${t.title}</div>
          <div class="tnb-sub">${t.sub}</div>
        </div>
      </button>`).join('');
  }

  _panelHtml(tool) {
    return `
      <div class="tool-panel">
        <h3>${tool.title}</h3>
        <p class="tool-desc">${tool.desc}</p>
        <div class="dlabel">Input</div>
        <input class="dinput" id="tool-input" placeholder="${tool.placeholder.replace(/"/g, '&quot;')}" />
        <button class="drun" id="tool-run">Analyze →</button>
        <div class="dout" id="tool-output" style="display:none"></div>
      </div>`;
  }

  render() {
    return `
      <div class="eyebrow reveal">Live Demos</div>
      <h2 class="stitle reveal">Try the technology<br><em>right now</em></h2>
      <p class="sdesc reveal">Interactive demonstrations of the core data extraction and AI capabilities we build for clients.</p>
      <div class="tools-layout">
        <div class="tools-nav reveal" id="tools-nav">${this._navHtml()}</div>
        <div class="reveal" id="tool-panel">${this._panelHtml(TOOLS[this._active])}</div>
      </div>
    `;
  }

  bindEvents() {
    this.find('#tools-nav').addEventListener('click', e => {
      const btn = e.target.closest('.tnav-btn');
      if (!btn) return;
      this._setActive(parseInt(btn.dataset.index, 10));
    });
    this._bindPanel();
  }

  _setActive(index) {
    this._active = index;
    this.findAll('.tnav-btn').forEach((b, i) => b.classList.toggle('active', i === index));
    this.find('#tool-panel').innerHTML = this._panelHtml(TOOLS[index]);
    this._bindPanel();
  }

  _bindPanel() {
    const input  = this.find('#tool-input');
    const runBtn = this.find('#tool-run');
    const output = this.find('#tool-output');
    const tool   = TOOLS[this._active];

    const execute = () => {
      output.textContent = tool.run(input.value);
      output.style.display = 'block';
    };

    runBtn.addEventListener('click', execute);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') execute(); });
    input.addEventListener('input', () => { output.style.display = 'none'; });
  }
}
