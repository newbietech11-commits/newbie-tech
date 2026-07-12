import { useEffect, useState } from 'react';
import { API_BASE } from '../config.js';

export default function Work({ onLoaded }) {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    let cancelled = false;
    fetch(`${API_BASE}/api/works`)
      .then(res => (res.ok ? res.json() : []))
      .catch(() => [])
      .then(data => {
        if (!cancelled) setWorks(data || []);
      })
      .finally(() => {
        if (!cancelled) onLoaded?.();
      });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="work" className="sec">
      <div className="eyebrow reveal">Case Studies</div>
      <h2 className="stitle reveal">Delivered <em>results</em><br />at scale</h2>
      <p className="sdesc reveal">A selection of complex engineering challenges our team has solved in production environments.</p>
      <div className="work-grid">
        {works.map((w, i) => (
          <div key={w.id} className="work-card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="wnum">Case Study {String(i + 1).padStart(2, '0')}</div>
            <h3>{w.title}</h3>
            <p>{w.desc}</p>
            <div className="woutcome">{w.outcome}</div>
            <div className="wtags">
              {w.tags.map(t => <span key={t} className="wtag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
