import React, { useState, useEffect } from 'react';

const EventListenerAndTimerComponent = () => {
  // State for scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // State for timer
  const [time, setTime] = useState(0);

  // Effect for subscribing to scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add event listener for scroll event when component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Effect for timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    // Cleanup function to clear the timer when component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Event Listener and Timer Component</h1>
      <p>Scroll position: {scrollPosition}px</p>
      <p>Time: {time} seconds</p>
    </div>
  );
};

export default EventListenerAndTimerComponent;
