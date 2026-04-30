import { ThemeManager } from './utils/ThemeManager.js';
import { ScrollReveal } from './utils/ScrollReveal.js';

import { Nav }        from './components/Nav.js';
import { Hero }       from './components/Hero.js';
import { Marquee }    from './components/Marquee.js';
import { Services }   from './components/Services.js';
import { Team }       from './components/Team.js';
import { Work }       from './components/Work.js';
import { Tools }      from './components/Tools.js';
import { Experience } from './components/Experience.js';
import { Contact }    from './components/Contact.js';
import { Footer }     from './components/Footer.js';
import { Tweaks }     from './components/Tweaks.js';

/* ── Theme (must run before any render) ── */
const theme = new ThemeManager();
theme.apply();

/* ── Render all sections ── */
new Nav       ('#main-nav'   ).init();
new Hero      ('#hero'       ).init();
new Marquee   ('#marquee'    ).init();
new Services  ('#services'   ).init();
new Team      ('#team'       ).init();
new Work      ('#work'       ).init();
new Tools     ('#tools'      ).init();
new Experience('#experience' ).init();
new Contact   ('#contact'    ).init();
new Footer    ('#main-footer').init();
new Tweaks    ('#tweaks-root', theme).init();

/* ── Scroll reveal (after all content is in DOM) ── */
new ScrollReveal().observe(document);
