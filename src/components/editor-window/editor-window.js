import React from "react";
import "./editor-window.scss";
import EditorTab from "./editor-tab/editor-tab";

const EditorWindow = ({ title, children }) => (
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
    <div className="editor-window__body"></div>
  </section>
);

export default EditorWindow;
