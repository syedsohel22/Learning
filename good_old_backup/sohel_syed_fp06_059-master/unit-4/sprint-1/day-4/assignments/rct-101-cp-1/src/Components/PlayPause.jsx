// Write Code here
// do a default export
import React, { useState } from "react";

const PlayPause = () => {
  let [paused, setPaused] = useState(false);

  return (
    <div>
      <h1>{paused ? "the state is playing" : "the state is paused"}</h1>
      <button
        onClick={() => {
          setPaused(!paused);
        }}
      >
        {paused ? "Playing" : "Paused"}
      </button>
    </div>
  );
};

export default PlayPause;
