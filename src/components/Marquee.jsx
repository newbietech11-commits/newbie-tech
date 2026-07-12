import { MARQUEE_ITEMS } from '../data.js';

export default function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div id="marquee">
      <div className="marquee-strip">
        <div className="marquee-inner">
          {doubled.map((t, i) => <div key={i} className="marquee-item">{t}</div>)}
        </div>
      </div>
    </div>
  );
}
