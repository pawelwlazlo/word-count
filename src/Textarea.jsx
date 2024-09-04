import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");
  const [warning, setWarning] = useState(false);
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      setWarningText("No script tag allowed!");
      setWarning(true);
      newText = newText.replace("<script>", "");
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter some text here..."
        spellCheck="false"
      />
      {warning && <Warning warningText={warningText} />}
    </div>
  );
}
