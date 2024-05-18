// src/components/ToggleButton.jsx

import React, { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <p>{isOn ? "ON" : "OF"}</p>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

export default ToggleButton;
