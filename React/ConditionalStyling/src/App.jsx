import React, { useState } from "react";
import "./Classname.css";

const App = () => {
  const [storeNav, setStoreNav] = useState("Home");
  return (
    <div>
      <div>
        <button>Home</button>
        <button>Service</button>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default App;
