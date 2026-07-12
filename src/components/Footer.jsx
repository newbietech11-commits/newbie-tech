import { PRODUCTS } from '../data.js';

export default function Footer() {
  return (
    <footer id="main-footer">
      <a className="ft-brand" href="#hero">
        <div className="ft-mark">N</div>
        <div className="ft-name">Newbie Tech</div>
      </a>
      <p>&copy; 2026 Newbie Tech &middot; Full-Stack &amp; AI Engineering Studio &middot; All rights reserved</p>
      <p className="ft-products">
        Our products:{' '}
        {PRODUCTS.map((p, i) => (
          <span key={p.title}>
            {i > 0 && ', '}
            <a href={p.href} target="_blank" rel="noopener noreferrer">{p.title} ↗</a>
          </span>
        ))}
      </p>
    </footer>
  );
}
