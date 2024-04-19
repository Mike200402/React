import React from "react";
import "./EpisodeSection.css";

const EpisodeSection = ({ episode }) => {
  console.log(episode);



  return (
    <div className="contenedor-1">
      <div className="contenedor-pequeno" key={episode.id}>
        <p className="texto-pequeno">{episode.name}</p>
        <p className="texto-pequeno">{episode.air_date}</p>
        <p className="texto-pequeno">{episode.episode}</p>
      </div>
    </div>
  );
};
  
export default EpisodeSection;
