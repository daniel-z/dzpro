import React, { useEffect, createRef } from "react";
import ConsoleTyper from "../utils/console-typer";

import "./home.scss";

const Home = () => {
  let typerParagraph = createRef();
  let consoleTyper = createRef();

  useEffect(() => {
    consoleTyper.current = new ConsoleTyper({
      paragraphElement: typerParagraph.current,
      onStopTyping: () => {
        console.log("stoped typing");
      }
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
            {`{ `} I code software solutions and lead teams. {` }`}
          </p>
          <p>
            I can work remotelly. I like to learn, experiment, share knowledge
            and teach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
