import { useEffect } from 'react';

/* Observes every .reveal / .reveal-left / .reveal-scale element in the
   document and adds .visible when it scrolls into view. Runs once per
   mount of the page that calls it (after all sections have rendered). */
export function useReveal(deps = []) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 65);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07 });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach(el => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
