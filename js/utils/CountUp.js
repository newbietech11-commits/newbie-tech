export class CountUp {
  static observe(root = document) {
    const els = root.querySelectorAll('[data-count-up]');
    if (!els.length) return;

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.countUp, 10);
        obs.unobserve(el);

        let startTime = null;
        const animate = (ts) => {
          if (!startTime) startTime = ts;
          const progress = Math.min((ts - startTime) / 1800, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target);
          if (progress < 1) requestAnimationFrame(animate);
          else el.textContent = target;
        };
        requestAnimationFrame(animate);
      });
    }, { threshold: 0.5 });

    els.forEach(el => obs.observe(el));
  }
}
