import React, { useContext, useEffect } from "react";
import { TrackerContext } from "../context/trackerProvider";
import { UserContext } from "../context/userProvider";

import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const { token, logout, currentUser } = useContext(UserContext);

  
  return (
    <div className="nav-main-div">
      {token && <button onClick={logout}>Logout</button>}
      {token &&<div className="nav-div">
        <Link to="/profile">Profile</Link>
        <Link to="/tracker">Tracker</Link>
      </div>}
    </div>
  );
}
