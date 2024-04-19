import React from "react";
import "./CharacterSection.css";

const CharacterSection = ({ user }) => {
  return (
    <div className="contenedor">
      <img src={user.image} alt={`avatar de ${user.name}`}></img>

      <button className="botones">{user.status}</button>

      <h2>{user.name}</h2>

      <p>{user.gender}</p>
    </div>
  );
};

export default CharacterSection;
