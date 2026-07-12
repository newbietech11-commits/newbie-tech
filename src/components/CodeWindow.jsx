import { useEffect, useRef, useState } from 'react';
import { CODE_LINES, CODE_BADGES } from '../data.js';

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function lineHtml(line, showCursor) {
  const code = line.parts.map(p =>
    p.c ? `<span class="${p.c}">${escapeHtml(p.t)}</span>` : escapeHtml(p.t)
  ).join('') + (showCursor ? '<span class="cw-cursor"></span>' : '');
  return `<span class="cw-ln">${line.ln}</span><span class="cw-code">${code}</span>`;
}

export default function CodeWindow() {
  const linesRef = useRef(null);
  const [visible, setVisible] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const total = CODE_LINES.length;
    let timeoutId;

    const showNext = (count) => {
      if (count >= total) {
        setDone(true);
        return;
      }
      setVisible(count + 1);
      timeoutId = setTimeout(() => showNext(count + 1), count === 0 ? 600 : 120);
    };

    timeoutId = setTimeout(() => showNext(0), 300);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="code-window">
      <div className="cw-titlebar">
        <div className="cw-dot" style={{ background: '#FF5F57' }}></div>
        <div className="cw-dot" style={{ background: '#FFBD2E' }}></div>
        <div className="cw-dot" style={{ background: '#27C93F' }}></div>
        <div className="cw-title">newbietech/launch.ts</div>
      </div>
      <div className="cw-body" ref={linesRef}>
        {CODE_LINES.slice(0, visible).map((line, i) => (
          <div
            key={line.ln}
            className="cw-line"
            dangerouslySetInnerHTML={{ __html: lineHtml(line, i === visible - 1 && i < CODE_LINES.length - 1) }}
          />
        ))}
        {done && (
          <div className="cw-line">
            <span className="cw-ln">{CODE_LINES.length + 1}</span>
            <span className="cw-code"><span className="cw-cursor"></span></span>
          </div>
        )}
      </div>
      <div className="cw-badge-row">
        {CODE_BADGES.map(b => (
          <div key={b.label} className="cw-badge" style={{ background: `${b.bg}22`, border: `1px solid ${b.bg}55`, color: b.color }}>
            {b.label}
          </div>
        ))}
      </div>
    </div>
  );
}
