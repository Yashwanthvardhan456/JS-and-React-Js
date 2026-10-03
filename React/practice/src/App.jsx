import React from "react";

const App = () => {
  const handleContainerClick = () => {
    console.log("Container clicked");
  };

  const handleCardClick = () => {
    console.log("Card clicked");
  };

  const handleButtonClick = (e) => {
    // e.stopPropagation();
    console.log("Button clicked");
  };

  return (
    <div>
      <div
        onClick={handleContainerClick}
        style={{
          padding: "40px",
          backgroundColor: "#dbeafe",
        }}
      >
        <div
          onClick={handleCardClick}
          style={{
            padding: "30px",
            backgroundColor: "#93c5fd",
          }}
        >
          <button onClick={handleButtonClick}>Click Me</button>
        </div>
      </div>
    </div>
  );
};

export default App;
