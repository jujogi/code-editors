import CodeEditor from "./components/CodeMirror";
import ReactTextArea from "./components/ReactTextArea";
import Ace from "./components/Ace";
import code from "./code";
import "./styles.css";

const App = () => {
  return (
    <>
    <CodeEditor code={code} />
    <Ace code={code} />
    <ReactTextArea code={code} />
    </>
  );
}

export default App;
