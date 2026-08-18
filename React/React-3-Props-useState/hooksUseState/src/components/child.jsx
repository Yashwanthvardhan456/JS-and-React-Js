import React from "react";
const Child = ({ count, counter }) => {
  const IncreFunc = () => {
    counter(count + 1);
  };
  const DecreFunct = () => {
    counter(count - 1);
  };
  const Resetfunc = () => {
    counter(count * 0);
  };
  return (
    <div>
      <button onClick={IncreFunc}>Increment</button>
      <button onClick={DecreFunct}>Decrement</button>
      <button onClick={Resetfunc}>Reset</button>
    </div>
  );
};
export default Child;
