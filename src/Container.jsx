import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

export default function Container() {
  const [text, setText] = useState("");
  const numberOfCharacters = text.length;
  const stats = {
    numberOfCharacters: text.length,
    numberOfWords: text.split(" ").filter((word) => word !== "").length,
    numberOfInstagramCharacters: 280 - text.length,
    numberOfFacebookCharacters: 2200 - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
