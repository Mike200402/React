import React from "react";
import "./UserDetails.css";

const UserDetails = ({ user }) => {
  return (
    <div className="contenedor">
      <img src={user.image} alt={`avatar de ${user.name}`}></img>

      <h1>{user.name}</h1>

      <h2>{user.status}</h2>

      <p>{user.species}</p>
    </div>
  );
};

export default UserDetails;