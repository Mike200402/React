import React from "react";
import Card from "./Card";
import Card1 from "./Card1";
import "./Card.css";

const CardAll = (props) => {
  const episode = props.episode;
  const user = props.user;

  return (
    <div>
        <Card key={user.name} user={user} />
        <Card1 key={episode.id} episode={episode} />
      
    </div>
  );
};

export default CardAll;