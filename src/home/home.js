import React, { useEffect, createRef } from "react";
import ConsoleTyper from "../utils/console-typer";
import TerminalWindow from "../components/terminal-window/terminal-window";

import "./home.scss";

const Home = () => {
  const typerParagraphFirst = createRef();
  const consoleTyperFirst = createRef();

  useEffect(() => {
    consoleTyperFirst.current = new ConsoleTyper({
      paragraphElement: typerParagraphFirst.current,
      loop: true,
      loopAfterSeconds: 6
    });

    setTimeout(() => consoleTyperFirst.current.startTyping(), 1000);
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
            <TerminalWindow>
              <p className="home-page__intro-text" ref={typerParagraphFirst}>
                I code software solutions and lead teams. I work on-site or
                remotelly. I like to learn, experiment, share and teach.
              </p>
            </TerminalWindow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
