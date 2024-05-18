import { useState } from "react";

function ShowHideText() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShowText(prevShowText => !prevShowText);
        }}
      >
        Show/Hide Text
      </button>
      {showText && <p>This is a toggled text!</p>}
    </div>
  );
}

export default ShowHideText;
