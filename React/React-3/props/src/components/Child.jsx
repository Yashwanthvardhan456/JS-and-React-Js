import React from "react";
import "./child.css";

const Child = (prop) => {
  return (
    <div className="card">
      <div>
        <img src={prop.pizza} alt="" />
        <h1>{prop.title}</h1>
        <p>Price: {prop.price}</p>
        <button>Order Now</button>
      </div>
    </div>
  );
};

export default Child;
