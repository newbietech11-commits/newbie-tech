import { Component } from './Component.js';
import { CODE_LINES, CODE_BADGES } from '../data.js';

export class CodeWindow extends Component {
  constructor(el) {
    super(el);
    this._visible = 0;
  }

  render() {
    const badges = CODE_BADGES.map(b => `
      <div class="cw-badge" style="background:${b.bg}22;border:1px solid ${b.bg}55;color:${b.color}">
        ${b.label}
      </div>`).join('');

    return `
      <div class="code-window">
        <div class="cw-titlebar">
          <div class="cw-dot" style="background:#FF5F57"></div>
          <div class="cw-dot" style="background:#FFBD2E"></div>
          <div class="cw-dot" style="background:#27C93F"></div>
          <div class="cw-title">newbietech/launch.ts</div>
        </div>
        <div class="cw-body" id="cw-lines"></div>
        <div class="cw-badge-row">${badges}</div>
      </div>
    `;
  }

  bindEvents() {
    this._linesEl = this.find('#cw-lines');
    this._animate();
  }

  _buildLine(line, showCursor) {
    const code = line.parts.map(p =>
      p.c ? `<span class="${p.c}">${this._esc(p.t)}</span>` : this._esc(p.t)
    ).join('') + (showCursor ? '<span class="cw-cursor"></span>' : '');

    const div = document.createElement('div');
    div.className = 'cw-line';
    div.innerHTML = `<span class="cw-ln">${line.ln}</span><span class="cw-code">${code}</span>`;
    return div;
  }

  _esc(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  _animate() {
    const total = CODE_LINES.length;

    const showNext = () => {
      if (this._visible >= total) {
        const finalDiv = document.createElement('div');
        finalDiv.className = 'cw-line';
        finalDiv.innerHTML = `<span class="cw-ln">${total + 1}</span><span class="cw-code"><span class="cw-cursor"></span></span>`;
        this._linesEl.appendChild(finalDiv);
        return;
      }

      this._linesEl.querySelector('.cw-cursor')?.remove();
      this._linesEl.appendChild(
        this._buildLine(CODE_LINES[this._visible], this._visible < total - 1)
      );
      this._visible++;
      setTimeout(showNext, this._visible === 1 ? 600 : 120);
    };

    setTimeout(showNext, 300);
  }
}
