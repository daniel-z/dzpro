import React, {useEffect} from 'react';
import './local-nav.scss';
import {anchorScrollToId} from '../../../utils/utils';

export default() => {
  useEffect(() => {
    const links = new Array(...document.getElementsByClassName("local-nav__link"));

    links.forEach(link => {
      link.addEventListener('click', anchorScrollToId);
    });
  }, []);

  return (
    <nav className="local-nav">
      <a className="local-nav__link" href={'#about'}>
        <b>01. {" "}</b>
        About</a>
      <a className="local-nav__link" href={'#experience'}>
        <b>02. {" "}</b>
        Experience</a>
      <a className="local-nav__link" href={'#code-experiments'}>
        <b>03. {" "}</b>
        Code Experiments</a>
    </nav>
  )
};