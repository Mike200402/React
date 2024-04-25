import React from "react";
import UserDetails from "./UserDetails";
import "./Card.css";


const Card = ({ character }) => {
  return (
    <NavLink className="nav-link" to={`/character?id=${character.id}`} >
      <div className="card">
        <UserDetails character={character} />
      </div>
    </NavLink>

  );
};

export default Card;