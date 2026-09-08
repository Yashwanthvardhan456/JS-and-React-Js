import React from "react";

const CardList = ({ cards, onSelectCard }) => {
  return (
    <div>
      <h2>Available Cards</h2>

      {cards.map((card) => (
        <div
          key={card.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{card.name}</h3>

          <p>Fee: {card.fee}</p>

          <p>Benefits: {card.benefits}</p>

          <button onClick={() => onSelectCard(card.id)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default React.memo(CardList);
