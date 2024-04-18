import React from "react";
import "./CharacterSection.css";

  const CharacterSection = ({ user }) => {
    return (
      <div className="contenedor">
        <img src={user.image} alt={`avatar de ${user.name}`}></img>

        <div className="buttons">
            <button className="botones" key={user.status}>
            {user.status}</button>
        </div>
  
        <p>{user.name}</p>
      </div>
    );
  };
  
  export default CharacterSection;