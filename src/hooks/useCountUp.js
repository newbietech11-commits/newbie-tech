import { useEffect } from 'react';

/* Animates every [data-count-up] element from 0 to its target value once
   it scrolls into view. */
export function useCountUp(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('[data-count-up]');
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.countUp, 10);
        observer.unobserve(el);

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

    els.forEach(el => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
