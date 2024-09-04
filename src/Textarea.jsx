import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");
  const [warning, setWarning] = useState(false);

  const handleChange = (e) => {
    const newText = e.target.value;
    if (newText.includes("<script>")) {
      newText.replace("<script>", "");
      setWarning(true);
      return;
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
      {warning && <Warning />}
    </div>
  );
}
