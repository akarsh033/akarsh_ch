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
        <h2>Akarsh Chagantipati</h2>
        <h4>&quot;Expect The Unexpected&quot;</h4>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Akarsh. I like solving problems and exploring new things.
        I am currently pursuing undergraduation at <a href="http://www.vnrvjiet.ac.in/">VNR VJIET</a>. What I know is a drop, what I don&apos;t know is an ocean, so I would love to connect, explore and learn new things .
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Akarsh Chagantipati <Link to="/about">akarsh-ch.me</Link>.</p>
    </section>
  </section>
);

export default SideBar;
