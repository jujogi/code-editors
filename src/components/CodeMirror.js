// https://uiwjs.github.io/react-codemirror/
import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { yaml } from "@codemirror/legacy-modes/mode/yaml";

const CodeEditor = ({ code }) => {
    return (
      <div className="code">
        <h2>
          <a href="https://uiwjs.github.io/react-codemirror/" target="_blank" rel="noreferrer">React Code Mirror</a>
        </h2>
        <ul>
          <li>CodeMirror component for React.</li>
          <li>Need to import <u>code-mirror</u> and <u>code-mirror/legacy-mode</u> in order to use the yaml theme.</li>
          <li>After imports, easy to customize.</li>
        </ul>

        <CodeMirror
          value={code}
          height="200px"
          extensions={[StreamLanguage.define(yaml)]}
        />

      </div>

      );
};

export default CodeEditor;