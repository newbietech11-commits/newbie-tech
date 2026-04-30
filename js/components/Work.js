import { Component } from './Component.js';
import { WORKS } from '../data.js';

export class Work extends Component {
  render() {
    const cards = WORKS.map((w, i) => `
      <div class="work-card reveal" style="transition-delay:${i * 60}ms">
        <div class="wnum">Case Study ${w.num}</div>
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
