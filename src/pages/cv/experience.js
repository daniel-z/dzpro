import React, {useEffect, createRef} from "react";
import ConsoleTyper from "../../utils/console-typer";
import TerminalWindow from "../../components/terminal-window/terminal-window";
import EditorWindow from "../../components/editor-window/editor-window";
import JobExperience from "../../components/job-experience/job-experience";
import {ROUTES} from "../../constants";

import "./experience.scss";

const CV = () => {
  const typerParagraphFirst = createRef();
  const consoleTyperFirst = createRef();

  useEffect(() => {
    consoleTyperFirst.current = new ConsoleTyper({paragraphElement: typerParagraphFirst.current, loop: true, loopAfterSeconds: 6});

    setTimeout(() => consoleTyperFirst.current.startTyping(), 1000);

    document
      .getElementById('header')
      .addEventListener('click', ev => {
        ev.preventDefault();
        window.location.href = `#${ROUTES.HOME}`;
      })

  });

  return (
    <div className="experience-page">
      <div className="experience-page__content">
        <div className="experience-page__header" id="header">
          <h1 className="experience-page__title">
            Daniel Zamorano
          </h1>
          <h4 className="experience-page__subtitle">
            Software Engineer
          </h4>
        </div>
        <div className="experience-page__intro">
          <TerminalWindow>
            <p className="experience-page__intro-text" ref={typerParagraphFirst}>
              I code software solutions for the web and lead teams. I work on-site or
              remotely. I like to learn, experiment, share and teach.
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

export default CV;
