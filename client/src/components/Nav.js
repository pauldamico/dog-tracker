import React, { useContext } from "react";

import { UserContext } from "../context/userProvider";

import { Link } from "react-router-dom";

export default function Nav() {
 
  const { token, logout} = useContext(UserContext);

  
  return (
    <div className="nav-main-div">
      
      
      {token && <div className="logout-div"><button onClick={logout}>Log Out</button></div>}
      {token &&<div className="nav-div">
        <Link to="/profile">Profile</Link>
        <Link to="/tracker">Tracker</Link>
      </div>}
    </div>
  );
}
