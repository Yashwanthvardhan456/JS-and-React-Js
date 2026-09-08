import React, { useState, useEffect } from "react";

function CardDetails({ cardId }) {
  const [cardDetails, setCardDetails] = useState(null);

  useEffect(() => {
    console.log("Fetching card details for", cardId);

    const mockData = {
      1: {
        name: "Platinum Card",
        limit: "5 Lakhs",
      },
      2: {
        name: "Gold Card",
        limit: "3 Lakhs",
      },
      3: {
        name: "Titanium Card",
        limit: "10 Lakhs",
      },
    };

    setCardDetails(mockData[cardId]);
  }, [cardId]);

  if (!cardDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Card Details</h2>

      <h3>{cardDetails.name}</h3>

      <p>
        Credit Limit:
        {cardDetails.limit}
      </p>
    </div>
  );
}

export default CardDetails;
