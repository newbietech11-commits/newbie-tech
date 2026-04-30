import { Component } from './Component.js';
import { MARQUEE_ITEMS } from '../data.js';

export class Marquee extends Component {
  render() {
    const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
    const items = doubled.map(t => `<div class="marquee-item">${t}</div>`).join('');
    return `
      <div class="marquee-strip">
        <div class="marquee-inner">${items}</div>
      </div>
    `;
  }
}
