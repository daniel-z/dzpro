function smoothScroll(toElement) {
  if (toElement) {
    toElement.scrollIntoView({block: 'start', behavior: 'smooth'});
  }
}

export function anchorScrollToId(ev) {
  ev.preventDefault();
  const target = ev.target;
  if (target && target.attributes && target.attributes.href && target.attributes.href.nodeValue) {
    const elementId = target
      .attributes
      .href
      .nodeValue
      .slice(1);
    const toElement = document.getElementById(elementId);
    smoothScroll(toElement);
  }
}

export function scrollToClass(className) {
  const target = document.getElementsByClassName(className)[0];
  if (target) {
    smoothScroll(target);
  }
}