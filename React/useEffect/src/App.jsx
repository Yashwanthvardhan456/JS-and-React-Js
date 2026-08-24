import React, { useState } from "react";
import Timer from "./Timer";

const App = () => {
  // Controls whether the Timer component is displayed
  const [show, setShow] = useState(true);

  return (
    <div>
      {/* Toggle button to mount/unmount Timer component */}
      <button onClick={() => setShow(!show)}>
        {show ? "Stop Timer" : "Start Timer"}
      </button>

      {/* Timer is rendered only when show is true */}
      {show && <Timer />}
    </div>
  );
};

export default App;
