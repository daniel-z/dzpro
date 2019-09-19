import React from "react";
import "./terminal-window.scss";

const TerminalWindow = ({ children }) => (
  <section className="terminal-window">
    <div className="terminal-window__header">
      <button className="terminal-window__header-button close"></button>
      <button className="terminal-window__header-button min"></button>
      <button className="terminal-window__header-button max"></button>
    </div>
    <div className="terminal-window__body">{children}</div>
  </section>
);

export default TerminalWindow;
