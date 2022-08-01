// https://github.com/securingsincity/react-ace
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-github";

const Ace = ({code}) => {
    return (
        <AceEditor
        mode="yaml"
        theme="github"
        name="ace"
        value={code}
      />
    )
};

export default Ace;