import React, { useState } from "react";

function MyCmp() {
  const [food, setFood] = useState(["Apple", "Banana", "Mango"]);
  return (
    <>
      <div>
        <h1>List of Food Items</h1>
        <ul>
          {food.map((food, index) => (
            <li></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MyCmp;
