export class ScrollReveal {
  constructor(threshold = 0.07) {
    this._observer = new IntersectionObserver(this._onIntersect.bind(this), { threshold });
  }

  _onIntersect(entries) {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 65);
        this._observer.unobserve(entry.target);
      }
    });
  }

  observe(root = document) {
    root.querySelectorAll('.reveal, .reveal-left, .reveal-scale')
      .forEach(el => this._observer.observe(el));
  }

  destroy() { this._observer.disconnect(); }
}
