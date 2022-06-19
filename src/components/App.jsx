import React from "react";
import emojipedia from "./../emojipedia";
import Entry from "./Entry";

function createcard(emoji) {
  return (
    <Entry emoji={emoji.emoji} name={emoji.name} meaning={emoji.meaning} />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createcard)}</dl>
    </div>
  );
}

export default App;
