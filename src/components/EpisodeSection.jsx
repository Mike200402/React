import React from "react";
import "./EpisodeSection.css";

  const EpisodeSection = ({ user }) => {
    return (
      <div className="contenedor">
        <div className="contenedor-pequeno">
          <p>{user.species}</p>
        </div>
        <div className="contenedor-pequeno">
          <p>{user.name}</p>
        </div>
        <div className="contenedor-pequeno">
          <p>{user.species}</p>
        </div>
        <div className="contenedor-pequeno">
          <p>{user.species}</p>
        </div>
        <div className="contenedor-pequeno">
          <p>{user.species}</p>
        </div>
      </div>
    );
  };
  
  export default EpisodeSection;
