import { TEAM_COLUMNS, WHY_CARDS } from '../data.js';

export default function Team() {
  return (
    <section id="team" className="sec">
      <div className="eyebrow reveal">Our Team</div>
      <h2 className="stitle reveal">A studio built for<br /><em>the full product</em></h2>
      <p className="sdesc reveal">Frontend specialists, backend engineers, and AI experts, collaborating so you never have to coordinate multiple agencies.</p>
      <div className="team-cols">
        {TEAM_COLUMNS.map((col, i) => (
          <div key={col.label} className="team-col reveal" style={{ transitionDelay: `${i * 100}ms` }}>
            <div className="tc-label">{col.label}</div>
            <ul className="tc-list">
              {col.items.map(it => <li key={it}><span className="tc-dot"></span>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="why-grid">
        {WHY_CARDS.map(c => (
          <div key={c.title} className="why-card reveal">
            <div className="why-icon">{c.icon}</div>
            <div className="why-title">{c.title}</div>
            <div className="why-desc">{c.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
