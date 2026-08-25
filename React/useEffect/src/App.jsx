import React, { useState } from "react";
import Timer from "./Timer";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div>
        <button onClick={() => setShow(!show)}>
          {show ? "Stop Timer" : "Start Timer"}
        </button>
        {show && <Timer />}
      </div>
    </>
  );
};

export default App;
