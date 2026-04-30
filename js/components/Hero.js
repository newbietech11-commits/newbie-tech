import { Component } from './Component.js';
import { CodeWindow } from './CodeWindow.js';
import { CountUp } from '../utils/CountUp.js';
import { HERO_METRICS } from '../data.js';

export class Hero extends Component {
  _renderMetric(m) {
    if (m.static) {
      return `
        <div class="mtr">
          <div class="mtr-n" style="font-size:22px;letter-spacing:-1px">
            ${m.static}<sup style="font-size:11px;color:var(--gold)">${m.sup}</sup>
          </div>
          <div class="mtr-l">${m.label}</div>
        </div>`;
    }
    return `
      <div class="mtr">
        <div class="mtr-n">
          <span data-count-up="${m.countUp}">0</span><sup>${m.sup}</sup>
        </div>
        <div class="mtr-l">${m.label}</div>
      </div>`;
  }

  render() {
    return `
      <div class="hero-bg"></div>
      <div class="hero-orb hero-orb-1"></div>
      <div class="hero-orb hero-orb-2"></div>

      <div class="hero-left">
        <div class="hero-tag">
          <div class="hero-tag-dot"></div>
          Startup Studio · Freelance &amp; Enterprise
        </div>
        <h1 class="htitle">Ship faster.<br><em>Scale</em> further.<br>Stay secure.</h1>
        <p class="hero-sub">
          Newbie Tech is a startup engineering studio — 5+ years building full-stack products,
          cloud infrastructure, Android apps, and AI systems. Small freelance projects or large
          enterprise builds; we fit your scale and budget.
        </p>
        <div class="hero-btns">
          <a href="#contact" class="btn-p">Start a Project</a>
          <a href="#work"    class="btn-g">See Our Work</a>
        </div>
        <div class="metrics-bar">
          ${HERO_METRICS.map(m => this._renderMetric(m)).join('')}
        </div>
      </div>

      <div class="hero-right" id="code-window-root"></div>
    `;
  }

  bindEvents() {
    new CodeWindow(this.find('#code-window-root')).init();
    CountUp.observe(this.el);
  }
}
