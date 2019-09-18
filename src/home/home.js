import React, { useEffect, createRef } from "react";
import ConsoleTyper from "../utils/console-typer";

import "./home.scss";

const Home = () => {
  let typerParagraph = createRef();
  let consoleTyper = createRef();

  useEffect(() => {
    consoleTyper.current = new ConsoleTyper({
      paragraphElement: typerParagraph.current
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
          <p className="six column home-page__intro-text" ref={typerParagraph}>
            I code solutions and lead teams. I can work remotelly and I do my
            best in every project. I learn every day. I like to share knowledge
            and teach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
