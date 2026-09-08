import React, { useState } from "react";

const App = () => {
  const [storeArray, setStoreArray] = useState(["Apple", "Orange"]);
  const [storeInput, setStoreInput] = useState("");

  const addItemFunc = () => {
    setStoreArray([...storeArray, storeInput]);
    setStoreInput("");
  };

  const deleteFunc = (index) => {
    const updateArray = [...storeArray];
    updateArray.splice(index, 1);
    setStoreArray(updateArray);
  };

  return (
    <>
      <div>
        {storeArray.map((item, index) => (
          <div key={index}>
            {item}
            <button onClick={() => deleteFunc(index)}>Delete Item</button>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={storeInput}
          onChange={(e) => setStoreInput(e.target.value)}
        />
      </div>
      <div></div>
      <div>
        <button onClick={() => addItemFunc()}>Add Item</button>
      </div>
    </>
  );
};

export default App;
