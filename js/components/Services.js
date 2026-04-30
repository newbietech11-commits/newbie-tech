import { Component } from './Component.js';
import { SERVICES } from '../data.js';

export class Services extends Component {
  render() {
    const cards = SERVICES.map((s, i) => `
      <div class="svc-card reveal" style="transition-delay:${i * 40}ms">
        <div class="svc-icon">${s.icon}</div>
        <h4>${s.title}</h4>
        <p>${s.desc}</p>
        <div class="svc-tags">
          ${s.tags.map(t => `<span class="svc-tag">${t}</span>`).join('')}
        </div>
      </div>`).join('');

    return `
      <div class="eyebrow reveal">Services</div>
      <h2 class="stitle reveal">Everything your<br><em>product needs</em></h2>
      <p class="sdesc reveal">Cloud, security, mobile, AI, and full-stack — startup-speed delivery with enterprise-grade quality.</p>
      <div class="svc-grid">${cards}</div>
    `;
  }
}
