import { Component } from './Component.js';
import { TEAM_COLUMNS, WHY_CARDS } from '../data.js';

export class Team extends Component {
  render() {
    const cols = TEAM_COLUMNS.map((col, i) => `
      <div class="team-col reveal" style="transition-delay:${i * 100}ms">
        <div class="tc-label">${col.label}</div>
        <ul class="tc-list">
          ${col.items.map(it => `<li><span class="tc-dot"></span>${it}</li>`).join('')}
        </ul>
      </div>`).join('');

    const why = WHY_CARDS.map(c => `
      <div class="why-card reveal">
        <div class="why-icon">${c.icon}</div>
        <div class="why-title">${c.title}</div>
        <div class="why-desc">${c.desc}</div>
      </div>`).join('');

    return `
      <div class="eyebrow reveal">Our Team</div>
      <h2 class="stitle reveal">A studio built for<br><em>the full product</em></h2>
      <p class="sdesc reveal">Frontend specialists, backend engineers, and AI experts, collaborating so you never have to coordinate multiple agencies.</p>
      <div class="team-cols">${cols}</div>
      <div class="why-grid">${why}</div>
    `;
  }
}
