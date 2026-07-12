import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data.js';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="main-nav" className={scrolled ? 'scrolled' : ''}>
      <a className="nav-brand" href="#hero">
        <div className="nav-logo-mark">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <text x="3" y="19" fontFamily="monospace" fontSize="14" fontWeight="700" fill="#1AA08A">{'</>'}</text>
          </svg>
        </div>
        <div className="nav-logo-name">Newbie Tech</div>
      </a>
      <ul>
        {NAV_LINKS.map(l => (
          <li key={l.href}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>
      <a href="#contact" className="nav-cta">Get a Quote</a>
    </nav>
  );
}
