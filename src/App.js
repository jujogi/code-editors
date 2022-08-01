import CodeEditor from "./components/CodeMirror";
import ReactTextArea from "./components/ReactTextArea";
import Ace from "./components/Ace";
import code from "./code";
import "./styles.css";

const App = () => {
  return (
    <>
    <h2>React CodeMirror</h2>
    <CodeEditor code={code} />

    <h2>React Textarea Code Editor</h2>
    <ReactTextArea code={code} />

    <h2>Ace</h2>
    <Ace code={code} />
    </>
  );
}

export default App;
