// src/components/ScoreKeeper.jsx

import { useState } from "react";

function ScoreKeeper() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <p>Score: {score}</p>
      <button
        onClick={() => {
          /* complete the missing code */
        }}
      >
        Increase by 5
      </button>
      <button
        onClick={() => {
          /* complete the missing code */
        }}
      >
        Decrease by 5
      </button>
    </div>
  );
}

export default ScoreKeeper;
