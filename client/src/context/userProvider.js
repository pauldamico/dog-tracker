import React, { useState, createContext, useContext, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "./profileProvider";
import { TrackerContext } from "./trackerProvider";
export const UserContext = createContext();
export function UserContextProvider(props) {
  const count = useRef(0)
  const { getUserProfile, updatePagination } = useContext(ProfileContext);
  const {getTrackerData, addTracker} = useContext(TrackerContext)

  const initUser = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
  };
  const [currentUser, setCurrentUser] = useState(initUser);
  const { _id: userId, username } = currentUser.user;
  const { token } = currentUser;
  const navigate = useNavigate();

  function signup(newUser) {
    axios
      .post("/auth/signup", newUser)
      .then((res) => {
        const { user, token } = res.data;

        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
        setCurrentUser((prev) => ({ ...prev, user, token }));      
        navigate("/profile");
        token && getUserProfile();
        token && addTracker()
        // token && getTrackerData()
        console.log("test")
 
      })
      .catch((err) => console.log(err));
  
  }
  function login(userInfo) {
    axios
      .post("/auth/login", userInfo)
      .then((res) => {
        const { user, token } = res.data;

        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
        setCurrentUser((prev) => ({ ...prev, user, token }));      
        navigate("/profile");
        
          token && getUserProfile();
          token && addTracker()
          token && getTrackerData()
        
      })
      .catch((err) => console.log(err));
      
  }



  useEffect(() => {
    count.current = count.current + 1
    {
 
      token && getUserProfile()
      // token && addTracker()
      token && getTrackerData()

    }
 
  }, [navigate, ]);

  return (
    <UserContext.Provider value={{ username, token, signup, login, userId }}>
      {props.children}
    </UserContext.Provider>
  );
}
