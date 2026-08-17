import React from "react";
import "./App.css";
import Child from "./components/Child";
import pizza from "./assets/pizza.jpg";
import pizza2 from "./assets/pizza2.jpg";
import pizza3 from "./assets/pizza3.jpg";

function App() {
  const title = "Pizza";
  const price = 300;
  const title2 = "Pizza2";
  const price2 = 200;
  const title3 = "Pizza3";
  const price3 = 100;
  return (
    <>
      <div className="main">
        <Child pizza={pizza} title={title} price={price} />
        <Child pizza={pizza2} title={title2} price={price2} />
        <Child pizza={pizza3} title={title3} price={price3} />
      </div>
    </>
  );
}

export default App;
