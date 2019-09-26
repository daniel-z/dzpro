import React, { useEffect, createRef } from "react";
import ConsoleTyper from "../../utils/console-typer";

import "./home.scss";

const Home = () => {
  const typerParagraph = createRef();
  const consoleTyper = createRef();

  useEffect(() => {
    consoleTyper.current = new ConsoleTyper({
      paragraphElement: typerParagraph.current,
      loop: false,
      typingSpeedMs: 40,
      stopCursorAfterBlinks: 200
    });

    setTimeout(() => consoleTyper.current.startTyping(), 1000);
  });

  return (
    <div className="home-page">
      <div className="home-page__content">
        <div className="row home-page__header">
          <div className="six column">
            <h1 className="home-page__title"> Daniel Zamorano </h1>
            <h4 className="home-page__subtitle"> Software Engineer </h4>
          </div>
        </div>
        <div className="row home-page__intro">
          <div className="six column">
            <p className="home-page__intro-text" ref={typerParagraph}>
              I code software solutions for the web and lead teams. I work on-site or
              remotely. I like to learn, experiment, share and teach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
