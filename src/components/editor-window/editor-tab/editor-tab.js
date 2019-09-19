import React from "react";
import "./editor-tab.scss";

const EditorTab = ({ title, children }) => (
  <section className="editor-tab">
    <div className="editor-tab__header">
      <button className="editor-tab__header-button close"></button>
      <div className="editor-tab__window-title">{title}</div>
    </div>
    <div className="editor-tab__body">{children}</div>
  </section>
);

export default EditorTab;
