import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  // Stores all products fetched from the API
  const [products, setProducts] = useState([]);

  // Controls how many products are displayed on the screen
  const [visibleCount, setVisibleCount] = useState(10);

  // Stores error message if API request fails
  const [error, setError] = useState("");

  // Runs only once when the component mounts
  useEffect(() => {
    // Async function to fetch data from API
    const fetchDatafromAPI = async () => {
      try {
        // Make GET request to fetch products
        const res = await axios.get("https://fakestoreapi.com/products");

        // Save API response data into state
        setProducts(res.data);
      } catch (error) {
        // Show error message if API call fails
        setError("Error in the Data");
      }
    };

    // Calling the function
    fetchDatafromAPI();
  }, []);

  // Function to display 10 more products when button is clicked
  const showMorebtn = () => {
    setVisibleCount((prev) => prev + 10);
  };

  // Get only the products that need to be shown
  const visibleProducts = products.slice(0, visibleCount);

  console.log(visibleProducts);

  return (
    <div className="main">
      {/* Application Heading */}
      <h1>React Products</h1>

      {/* Display error message if any */}
      {error && <p>{error}</p>}

      {/* Products Grid */}
      <div className="product-container">
        {visibleProducts.map((prod) => (
          <div key={prod.id} className="product-card">
            {/* Product Image */}
            <img src={prod.image} alt="" />
            <h3>{prod.title}</h3>
            {/* Product Price */}
            <p>
              <strong>Price:</strong> ${prod.price}
            </p>
            {/* Product Category */}
            <p>
              <strong>Category:</strong> {prod.category}
            </p>
            {/* Product Description */}
            <p>{prod.description}</p>
          </div>
        ))}
      </div>

      {/* Show More button appears only if there are more products left */}
      {visibleCount < products.length && (
        <button onClick={showMorebtn}>Show More</button>
      )}
    </div>
  );
};

export default App;
