import { Component } from './Component.js';
import { TIMELINE_ITEMS } from '../data.js';

export class Experience extends Component {
  render() {
    const timeline = TIMELINE_ITEMS.map(item => `
      <div class="tl-item">
        <div class="tl-dot"></div>
        <div>
          <div class="tl-date">${item.date}</div>
          <div class="tl-title">${item.title}</div>
          <div class="tl-co">${item.company}</div>
          <ul>${item.points.map(pt => `<li>${pt}</li>`).join('')}</ul>
        </div>
      </div>`).join('');

    return `
      <div class="eyebrow reveal">Experience</div>
      <h2 class="stitle reveal">Five+ years of<br>building at scale</h2>
      <div class="exp-layout">
        <div class="reveal">
          <h3 class="exp-left-title">Proven track record</h3>
          <p class="exp-left-desc">
            5+ years of hands-on delivery across full-stack, cloud, DevOps, mobile, security,
            and AI — from zero-to-one startup builds to enterprise-scale production systems
            supporting millions of users.
          </p>
          <div class="exp-callout">
            <h4>5+</h4>
            <p>Years across full-stack, cloud &amp; AI</p>
          </div>
        </div>
        <div class="timeline reveal">${timeline}</div>
      </div>
    `;
  }
}
