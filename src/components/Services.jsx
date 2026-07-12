import { SERVICES } from '../data.js';

export default function Services() {
  return (
    <section id="services" className="sec">
      <div className="eyebrow reveal">Services</div>
      <h2 className="stitle reveal">Everything your<br /><em>product needs</em></h2>
      <p className="sdesc reveal">Cloud, security, mobile, AI, and full-stack, startup-speed delivery with enterprise-grade quality.</p>
      <div className="svc-grid">
        {SERVICES.map((s, i) => (
          <div key={s.title} className="svc-card reveal" style={{ transitionDelay: `${i * 40}ms` }}>
            <div className="svc-icon">{s.icon}</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
            <div className="svc-tags">
              {s.tags.map(t => <span key={t} className="svc-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
