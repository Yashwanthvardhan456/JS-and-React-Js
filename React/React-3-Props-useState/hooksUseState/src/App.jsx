import React, { useState } from "react";
import Child from "./components/child";
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <Child count={count} counter={setCount} />
    </div>
  );
};
export default App;
