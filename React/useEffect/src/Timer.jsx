import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTimer] = useState(0);

  useEffect(() => {
    console.log("Timer Started");
    const stopTimer = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Timer Stopped");
      clearInterval(stopTimer);
    };
  }, []);

  return <div>{time}</div>;
};

export default Timer;
