// https://github.com/uiwjs/react-textarea-code-editor
import CodeEditor from '@uiw/react-textarea-code-editor';

const TextAreaEditor = ({ code }) => {
    return (
        <div className="code">
            <h2>
                <a href="https://github.com/uiwjs/react-textarea-code-editor" target="_blank" rel="noreferrer">React Textarea Code Editor</a>
            </h2>
            <ul>
                <li>A simple code editor with syntax highlighting.</li>
                <li>yaml support integrated. No need to install other packages or dependencies.</li>
                <li>Not display line number.</li>
                <li>Easy to customize.</li>
            </ul>

            <CodeEditor
                value={code}
                language="yaml"
                padding={15}
                style={{
                    fontSize: 12,
                    backgroundColor: "#FFF",
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
            />
        </div>
    );
};

export default TextAreaEditor;