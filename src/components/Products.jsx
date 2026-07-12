import { PRODUCTS } from '../data.js';

export default function Products() {
  return (
    <section id="products" className="sec">
      <div className="eyebrow reveal">Our Products</div>
      <h2 className="stitle reveal">Things we've<br /><em>built and run</em></h2>
      <p className="sdesc reveal">Beyond client work, we build and operate our own products end-to-end.</p>
      <div className="product-grid">
        {PRODUCTS.map((p, i) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="product-card reveal"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="product-tag">{p.tag}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="product-link">Visit {p.title} ↗</div>
          </a>
        ))}
      </div>
    </section>
  );
}
