import React, { useState } from "react";
const App = () => {
  const [text, setText] = useState();
  return (
    <div>
      <div>
        <select onChange={(e) => setText(e.target.value)}>
          <option value="">Select City</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Banglore">Banglore</option>
          <option value="Chennai">Chennai</option>
        </select>
        <h1>Selected City: {text}</h1>
      </div>
    </div>
  );
};
export default App;
