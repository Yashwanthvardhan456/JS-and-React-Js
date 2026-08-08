import React from "react";
import "./profile.css";
const Profile = () => {
  const name = "Yaswanth",
    Age = 26,
    Role = "Software Developer";
  return (
    <div className="header">
      <p>Name = {name}</p>
      <p>Age = {Age}</p>
      <p>Role = {Role} </p>
    </div>
  );
};

export default Profile;
