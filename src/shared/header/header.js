import React from 'react';
import './header.scss';

export default () => (
  <header className="app-header">
    <nav className="nav">
      <a className="nav__link" href={'/'}><b>01.</b> HOME</a>
      <a className="nav__link" href={'/cv'}><b>02.</b> CV</a>
      <a className="nav__link" href={'/lab'}><b>03.</b> LAB</a>
    </nav>
  </header>
);