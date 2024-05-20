import React, { useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  // Creating refs for input elements and a div element
  const inputRef = useRef(null);
  const uncontrolledInputRef = useRef(null);
  const divRef = useRef(null);

  // useEffect to focus the input field when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Function to handle click event on the div to change its background color
  const handleDivClick = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = 'lightblue';
    }
  };

  // Function to log the value of the uncontrolled input field
  const logInputValue = () => {
    if (uncontrolledInputRef.current) {
      console.log(uncontrolledInputRef.current.value);
    }
  };

  return (
    <div>
      <h1>useRef Hook Examples</h1>
      
      {/* Focusable Input Field */}
      <div>
        <h2>Focusable Input Field</h2>
        <input ref={inputRef} type="text" placeholder="Auto-focus on mount" />
      </div>

      {/* Uncontrolled Component */}
      <div>
        <h2>Uncontrolled Input Field</h2>
        <input ref={uncontrolledInputRef} type="text" placeholder="Type here..." onChange={logInputValue} />
        <p>The value is: {uncontrolledInputRef.current ? uncontrolledInputRef.current.value : ''}</p>
      </div>

      {/* Interacting with DOM Element */}
      <div>
        <h2>Interact with DOM Element</h2>
        <div
          ref={divRef}
          style={{ width: '200px', height: '100px', backgroundColor: 'lightcoral', cursor: 'pointer' }}
          onClick={handleDivClick}
        >
          Click me to change color
        </div>
      </div>
    </div>
  );
};

export default App;
