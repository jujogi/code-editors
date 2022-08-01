// https://uiwjs.github.io/react-codemirror/
import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { yaml } from "@codemirror/legacy-modes/mode/yaml";

const CodeEditor = ({code}) => {
    return (
          <CodeMirror
            value={code}
            height="200px"
            extensions={[StreamLanguage.define(yaml)]}
          />
      );
};

export default CodeEditor;