import React, { useEffect, useState } from "react";

const Timer = () => {
  // Stores elapsed time in seconds
  const [time, setTimer] = useState(0);

  useEffect(() => {
    // Runs once when the component mounts
    console.log("Start timer");

    // Start an interval that increments the timer every second
    const stopTimer = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    // Cleanup function
    // Executes when the component unmounts
    // Prevents memory leaks by clearing the interval
    return () => {
      console.log("Stop timer");
      clearInterval(stopTimer);
    };
  }, []); // Empty dependency array => effect runs only once after initial render

  return <div>{time}</div>;
};

export default Timer;
