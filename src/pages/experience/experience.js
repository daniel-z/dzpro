import React, {useEffect, createRef} from "react";
import ConsoleTyper from "../../utils/console-typer";
import TerminalWindow from "../../components/terminal-window/terminal-window";
import EditorWindow from "../../components/editor-window/editor-window";
import JobExperience from "../../components/job-experience/job-experience";
import {ROUTES} from "../../constants";
import {scrollToClass} from "../../utils/utils";

import "./experience.scss";

const Experience = () => {
  const typerParagraphFirst = createRef();
  const consoleTyperFirst = createRef();

  useEffect(() => {
    consoleTyperFirst.current = new ConsoleTyper({
      paragraphElement: typerParagraphFirst.current,
      loop: false,
      loopAfterSeconds: 6
    });

    setTimeout(() => {
      consoleTyperFirst
        .current
        .startTyping();
      scrollToClass('page');
    }, 200);

    document
      .getElementById('header')
      .addEventListener('click', ev => {
        ev.preventDefault();
        window.location.href = `#${ROUTES.HOME}`;
      })

  });

  return (
    <div className="experience-page page">
      <div className="experience-page__content">
        <div className="experience-page__header" id="header">
          <h1 className="experience-page__title">
            Daniel Zamorano
          </h1>
          <h4 className="experience-page__subtitle">
            Software Engineer
          </h4>
          <a className="experience-page-link print-only" href="https://www.danielzamorano.pro">
            www.danielzamorano.pro
          </a>
        </div>
        <div className="experience-page__intro">
          <TerminalWindow>
            <p className="experience-page__intro-text" ref={typerParagraphFirst}>
              I provide value to your projects through my experience with web applications.
              I have experience with different kind of projects and companies. I have lead technology decisions for startups, I have built and implemented opensource software for the government and also e-commerce for private companies. I like to do Frontend and backend with javascript and I have experience in multiple frontend areas like SEO, accessibility, leadership, programming best practices, etc.
            </p>
          </TerminalWindow>
        </div>
        <div className="experience-page__editor">
          <EditorWindow title="Daniel Zamorano" tabTitle="Work Experience">
            <JobExperience/>
          </EditorWindow>
        </div>
      </div>
    </div>
  );
};

export default Experience;