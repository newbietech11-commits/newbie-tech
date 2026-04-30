import { ACCENT_COLORS, THEME_DEFAULTS } from '../data.js';

export class ThemeManager {
  constructor() {
    this._key = 'nt_tweaks';
    this._state = this._load();
    this._listeners = [];
  }

  _load() {
    try {
      return { ...THEME_DEFAULTS, ...JSON.parse(localStorage.getItem(this._key) || '{}') };
    } catch {
      return { ...THEME_DEFAULTS };
    }
  }

  get(key) { return this._state[key]; }

  set(key, value) {
    this._state[key] = value;
    localStorage.setItem(this._key, JSON.stringify(this._state));
    this._applyAccent();
    this._listeners.forEach(fn => fn(this._state));
  }

  onChange(fn) { this._listeners.push(fn); }

  apply() { this._applyAccent(); }

  _applyAccent() {
    const a = ACCENT_COLORS[this._state.accent] || ACCENT_COLORS.teal;
    const s = document.documentElement.style;
    s.setProperty('--gold',       a.gold);
    s.setProperty('--gold-mid',   a.mid);
    s.setProperty('--gold-light', a.light);
    s.setProperty('--navy',       a.navy);
    s.setProperty('--navy2',      a.navy2);
    s.setProperty('--navy3',      a.navy3);
  }
}
