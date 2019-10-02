import React, {useEffect} from 'react';
import './local-nav.scss';

function scrollTo(ev) {
  ev.preventDefault();
  const target = ev.target;
  if (target && target.attributes && target.attributes.href && target.attributes.href.nodeValue) {
    const toElementId = target
      .attributes
      .href
      .nodeValue
      .slice(1);
    const toElement = document.getElementById(toElementId);
    if (toElement) {
      toElement.scrollIntoView({block: 'start', behavior: 'smooth'});
    }
  }
}

export default() => {
  useEffect(() => {
    const links = new Array(...document.getElementsByClassName("local-nav__link"));

    links.forEach(link => {
      link.addEventListener('click', scrollTo);
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