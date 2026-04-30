export class Component {
  constructor(selector) {
    this.el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector;
  }

  /* Override to return an HTML string */
  render() { return ''; }

  /* Override to attach event listeners after render */
  bindEvents() {}

  init() {
    if (!this.el) return this;
    this.el.innerHTML = this.render();
    this.bindEvents();
    return this;
  }

  /* Convenience: find a child element */
  find(selector) { return this.el.querySelector(selector); }
  findAll(selector) { return this.el.querySelectorAll(selector); }
}
