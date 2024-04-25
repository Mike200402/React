import React from "react";
import UserDetails from "./UserDetails";
import "./Card1.css";
import { NavLink } from "react-router-dom";

const Card1 = ({ user }) => {
  // console.log(user);
  return (
    <NavLink className="nav-link" to={`/character?id=${user.id}`} >
      <div className="card1">
        <UserDetails user={user} />
      </div>
    </NavLink>
  );
};

export default Card1;