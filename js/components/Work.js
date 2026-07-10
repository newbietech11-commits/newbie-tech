import { Component } from './Component.js';
import { API_BASE } from '../config.js';

export class Work extends Component {
  async init() {
    if (!this.el) return this;
    try {
      const res = await fetch(`${API_BASE}/api/works`);
      this._works = res.ok ? await res.json() : [];
    } catch {
      this._works = [];
    }
    this.el.innerHTML = this.render();
    this.bindEvents();
    return this;
  }

  render() {
    const works = this._works || [];
    const cards = works.map((w, i) => `
      <div class="work-card reveal" style="transition-delay:${i * 60}ms">
        <div class="wnum">Case Study ${String(i + 1).padStart(2, '0')}</div>
        <h3>${w.title}</h3>
        <p>${w.desc}</p>
        <div class="woutcome">${w.outcome}</div>
        <div class="wtags">
          ${w.tags.map(t => `<span class="wtag">${t}</span>`).join('')}
        </div>
      </div>`).join('');

    return `
      <div class="eyebrow reveal">Case Studies</div>
      <h2 class="stitle reveal">Delivered <em>results</em><br>at scale</h2>
      <p class="sdesc reveal">A selection of complex engineering challenges our team has solved in production environments.</p>
      <div class="work-grid">${cards}</div>
    `;
  }
}
