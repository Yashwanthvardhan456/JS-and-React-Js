import React, { useState } from "react";

const Child = () => {
  // State to store the current values entered in the form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State to store the submitted form data
  // Initially null because the form hasn't been submitted yet
  const [submittedData, setSubmittedData] = useState(null);

  // State to control whether password is visible or hidden
  const [showPassword, setShowPassword] = useState(false);

  // Runs when the form is submitted
  function submitFunc(e) {
    // Prevents page refresh on form submission
    e.preventDefault();

    // Save the current form data into submittedData
    // so we can display it below the form
    setSubmittedData(formData);

    // Clear all input fields after submission
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  }

  // Common handler for all input fields
  function handleFunc(e) {
    // Update the specific field that was changed
    // e.target.name => name/email/password
    // e.target.value => value typed by the user
    setFormData({
      ...formData, // keep existing values
      [e.target.name]: e.target.value, // update only the changed field
    });
  }

  return (
    <div>
      {/* Form */}
      <form onSubmit={submitFunc}>
        {/* Name Input */}
        Name:{" "}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFunc}
          placeholder="Enter Name"
          required
        />
        {/* Email Input */}
        Email:{" "}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleFunc}
          placeholder="Enter Email"
          required
        />
        {/* Password Input */}
        Password:{" "}
        <input
          // If showPassword is true, display text
          // otherwise hide it as password
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleFunc}
          placeholder="Enter Password"
          required
        />
        {/* Toggle password visibility */}
        <button
          type="button" // prevents form submission
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
        {/* Submit Button */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {/* Display submitted data only after form submission */}
      <div>
        {submittedData && (
          <div>
            <h1>Form Submitted</h1>

            {/* Display submitted name */}
            <h1>Name: {submittedData.name}</h1>

            {/* Display submitted email */}
            <h1>Email: {submittedData.email}</h1>

            {/* Display submitted password */}
            <h1>Password: {submittedData.password}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Child;
