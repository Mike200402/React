import React from "react";
import "./EpisodeSection.css";

  const EpisodeSection = ({ user }) => {
    return (
      <div className="contenedor">
        <img src={user.image} alt={`avatar de ${user.name}`}></img>

        <div className="buttons">
            <button className="botones" key={user.status}>
            {user.status}</button>
        </div>
  
        <p>{user.species}</p>
      </div>
    );
  };
  
  export default EpisodeSection;