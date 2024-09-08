import { useState } from "react";
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";
import Stats from "./Stats";
import Textarea from "./Textarea";

export default function Container() {
  const [text, setText] = useState("");
  const stats = {
    numberOfCharacters: text.length,
    numberOfWords: text.split(" ").filter((word) => word !== "").length,
    numberOfInstagramCharacters: INSTAGRAM_MAX_CHARACTERS - text.length,
    numberOfFacebookCharacters: FACEBOOK_MAX_CHARACTERS - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
