// https://github.com/uiwjs/react-textarea-code-editor
import CodeEditor from '@uiw/react-textarea-code-editor';

const TextAreaEditor = ({code}) => {
    return (
    <CodeEditor
        value={code}
        language="yaml"
        padding={15}
        style={{
            fontSize: 12,
            backgroundColor: "#f5f5f5",
            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
    />
    );
};

export default TextAreaEditor;