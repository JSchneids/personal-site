import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Jakob Schneider</h2>
        <p><a href="mailto:jakobschneider15@gmail.com">jakobschneider15@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Jakob. I like building things.
        I am a data scientist, Esri employee, <a href="https://icme.stanford.edu/">FSU</a> graduate. Before Arthena I was
        at <a href="https://matroid.com">St. Charles County IT</a>
  
        , and <a href="https://seds.org">T-Kartor</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jakob Schneider <Link to="/">jschneider.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
