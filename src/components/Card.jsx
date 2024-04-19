import React from "react";
import UserDetails from "./UserDetails";
import ButtonSection from "./ButtonSection";
import CharacterSection from "./CharacterSection";
// import EpisodeSection from "./EpisodeSection";
import "./Card.css";

const Card = (props) => {
  const user = props.user;
  // const socialLinks = user["social-links"];
  // const rickAndMortyData=props.rickAndMortyData;

  return (
    <div className="card">
      <CharacterSection user={user} />
      {/* <UserDetails user={user} /> */}
      {/* <ButtonSection socialLinks={socialLinks} /> */}
      {/* <EpisodeSection rickAndMortyData={rickAndMortyData} /> */}
      
    </div>
  );
};

export default Card;