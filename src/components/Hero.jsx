import { HERO_METRICS } from '../data.js';
import { useCountUp } from '../hooks/useCountUp.js';
import CodeWindow from './CodeWindow.jsx';

function Metric({ m }) {
  if (m.static) {
    return (
      <div className="mtr">
        <div className="mtr-n" style={{ fontSize: 22, letterSpacing: -1 }}>
          {m.static}<sup style={{ fontSize: 11, color: 'var(--gold)' }}>{m.sup}</sup>
        </div>
        <div className="mtr-l">{m.label}</div>
      </div>
    );
  }
  return (
    <div className="mtr">
      <div className="mtr-n">
        <span data-count-up={m.countUp}>0</span><sup>{m.sup}</sup>
      </div>
      <div className="mtr-l">{m.label}</div>
    </div>
  );
}

export default function Hero() {
  useCountUp();

  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>

      <div className="hero-left">
        <div className="hero-tag">
          <div className="hero-tag-dot"></div>
          Startup Studio · Freelance &amp; Enterprise
        </div>
        <h1 className="htitle">Ship faster.<br /><em>Scale</em> further.<br />Stay secure.</h1>
        <p className="hero-sub">
          Newbie Tech is a startup engineering studio, 5+ years building full-stack products,
          cloud infrastructure, Android apps, and AI systems. Small freelance projects or large
          enterprise builds; we fit your scale and budget.
        </p>
        <div className="hero-btns">
          <a href="#contact" className="btn-p">Start a Project</a>
          <a href="#work" className="btn-g">See Our Work</a>
        </div>
        <div className="metrics-bar">
          {HERO_METRICS.map(m => <Metric key={m.label} m={m} />)}
        </div>
      </div>

      <div className="hero-right" id="code-window-root">
        <CodeWindow />
      </div>
    </section>
  );
}
