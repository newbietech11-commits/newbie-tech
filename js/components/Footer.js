import { Component } from './Component.js';

export class Footer extends Component {
  render() {
    return `
      <a class="ft-brand" href="#hero">
        <div class="ft-mark">N</div>
        <div class="ft-name">Newbie Tech</div>
      </a>
      <p>&copy; 2026 Newbie Tech &middot; Full-Stack &amp; AI Engineering Studio &middot; All rights reserved</p>
    `;
  }
}
