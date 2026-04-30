import { Component } from './Component.js';
import { NAV_LINKS } from '../data.js';

export class Nav extends Component {
  render() {
    const links = NAV_LINKS.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('');
    return `
      <a class="nav-brand" href="#hero">
        <div class="nav-logo-mark">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <text x="3" y="19" font-family="monospace" font-size="14" font-weight="700" fill="#1AA08A">&lt;/&gt;</text>
          </svg>
        </div>
        <div class="nav-logo-name">Newbie Tech</div>
      </a>
      <ul>${links}</ul>
      <a href="#contact" class="nav-cta">Get a Quote</a>
    `;
  }

  bindEvents() {
    const nav = this.el;
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });
  }
}
