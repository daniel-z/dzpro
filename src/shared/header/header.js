import React from 'react';
import './header.scss';

export default() => {
  return (
    <header className="app-header">
      <nav className="local-nav">
        <a className="local-nav__link" href={'/'}>Home</a>
      </nav>
    </header>
  )
};