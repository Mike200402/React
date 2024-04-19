import React from "react";
import EpisodeSection from "./EpisodeSection";
import "./Card.css";

const Card1 = (props) => {
  const episode = props.episode;
  return (
    <div className="card">
      <EpisodeSection episode={episode} /> 
    </div>
  );
};

export default Card1;