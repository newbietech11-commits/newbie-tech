import { TIMELINE_ITEMS } from '../data.js';

export default function Experience() {
  return (
    <section id="experience" className="sec">
      <div className="eyebrow reveal">Experience</div>
      <h2 className="stitle reveal">Five+ years of<br />building at scale</h2>
      <div className="exp-layout">
        <div className="reveal">
          <h3 className="exp-left-title">Proven track record</h3>
          <p className="exp-left-desc">
            5+ years of hands-on delivery across full-stack, cloud, DevOps, mobile, security,
            and AI, from zero-to-one startup builds to enterprise-scale production systems
            supporting millions of users.
          </p>
          <div className="exp-callout">
            <h4>5+</h4>
            <p>Years across full-stack, cloud &amp; AI</p>
          </div>
        </div>
        <div className="timeline reveal">
          {TIMELINE_ITEMS.map(item => (
            <div key={item.title} className="tl-item">
              <div className="tl-dot"></div>
              <div>
                <div className="tl-date">{item.date}</div>
                <div className="tl-title">{item.title}</div>
                <div className="tl-co">{item.company}</div>
                <ul>
                  {item.points.map(pt => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
