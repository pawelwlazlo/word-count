import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    const newText = e.target.value;
    if (newText.includes("<script>")) {
      setText("");
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
      <Warning />
    </div>
  );
}
