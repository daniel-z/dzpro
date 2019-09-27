import React from 'react';
import './header.scss';

export default () => (
  <header className="app-header">
    <nav className="nav">
      <a className="nav__link" href={'/'}><b>01.</b> About</a>
      <a className="nav__link" href={'/'}><b>02.</b> Experience</a>
      <a className="nav__link" href={'/'}><b>03.</b> Coding Garage</a>
    </nav>
  </header>
);