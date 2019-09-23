import React from "react";
import "./editor-window.scss";

const EditorWindow = ({ title, tabTitle, children }) => (
  <section className="editor-window">
    <div className="editor-window__header">
      <div className="editor-window__window-title">
        {title}
        <div className="editor-window__buttons-bar">
          <button className="editor-window__header-button close"></button>
          <button className="editor-window__header-button min"></button>
          <button className="editor-window__header-button max"></button>
        </div>
      </div>
    </div>
    <section className="editor-tab">{tabTitle}</section>
    <div className="editor-window__body">
      <section className="editor-content">{children}</section>
    </div>
  </section>
);

export default EditorWindow;
