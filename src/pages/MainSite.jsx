import { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import Nav from '../components/Nav.jsx';
import Hero from '../components/Hero.jsx';
import Marquee from '../components/Marquee.jsx';
import Services from '../components/Services.jsx';
import Team from '../components/Team.jsx';
import Work from '../components/Work.jsx';
import Products from '../components/Products.jsx';
import Tools from '../components/Tools.jsx';
import Experience from '../components/Experience.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

export default function MainSite() {
  const [worksLoaded, setWorksLoaded] = useState(false);
  const [contactLoaded, setContactLoaded] = useState(false);

  /* Work and Contact fetch async and add their own .reveal elements after
     mount, so the observer needs to re-scan once each has rendered. */
  useReveal([worksLoaded, contactLoaded]);

  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Team />
      <Work onLoaded={() => setWorksLoaded(true)} />
      <Products />
      <Tools />
      <Experience />
      <Contact onLoaded={() => setContactLoaded(true)} />
      <Footer />
    </>
  );
}
