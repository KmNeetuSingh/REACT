import React, { useState, useEffect } from 'react';
// import './App.css';

// Fetching Data from an API
const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

// Subscribing to External Events
const MouseMove = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = event => {
      setCoords({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h2>Mouse Coordinates</h2>
      <p>X: {coords.x}, Y: {coords.y}</p>
    </div>
  );
};

// Updating the Document Title
const UpdateTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h2>Update Document Title</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment Count ({count})
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>React useEffect Examples</h1>
      <FetchData />
      <MouseMove />
      <UpdateTitle />
    </div>
  );
};

export default App;
