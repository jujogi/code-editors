// https://github.com/securingsincity/react-ace
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-github";

const Ace = ({ code }) => {
    return (
      <div className="code">
        <h2>
          <a href="https://github.com/securingsincity/react-ace" target="blank">React ACE</a>
        </h2>
        <ul>
          <li>Need to import two dependencies in order to support yaml and theme.</li>
          <li>Easy to customize after import them.</li>
        </ul>

        <AceEditor
          mode="yaml"
          theme="github"
          name="ace"
          value={code}
          height={300}
        />
      </div>
    )
};

export default Ace;