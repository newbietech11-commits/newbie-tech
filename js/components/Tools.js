import { Component } from './Component.js';

export class Tools extends Component {
  render() {
    return `
      <div class="eyebrow reveal">Live Demos</div>
      <h2 class="stitle reveal">Try the technology<br><em>right now</em></h2>
      <p class="sdesc reveal">Interactive demonstrations of the core data extraction and AI capabilities we build for clients.</p>
      <div class="tools-coming-soon reveal">
        <div class="tcs-icon">⚙️</div>
        <h3>Coming Soon</h3>
        <p>We're building interactive demos for you to experience our technology first-hand. Check back shortly.</p>
      </div>
    `;
  }

  bindEvents() {}
}
