import React, { useState, createContext, useContext, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "./profileProvider";
import { TrackerContext } from "./trackerProvider";
export const UserContext = createContext();
export function UserContextProvider(props) {
  const count = useRef(0)
  const { getUserProfile } = useContext(ProfileContext);
  const {getTrackerData, addTracker} = useContext(TrackerContext)

  const initUser = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
  };

  // const initUser = {
  //   user: {_id:"", username:""},
  //   token:"",
  // };


  const [currentUser, setCurrentUser] = useState(initUser);
const [loading, setLoading] = useState(false)
  const [loginError, setLoginError] = useState("")
  // const { _id: userId, username } = currentUser.user;
  const { token } = currentUser;
  const navigate = useNavigate();

  function signup(newUser) {
    setLoading(true)
    axios
      .post("https://backend-lw9q.onrender.com/auth/signup", newUser)
      .then((res) => {
        const { user, token } = res.data;
        console.log(res.data)
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
        setCurrentUser((prev) => ({ ...prev, user, token }));      
        navigate("/profile");
        token && getUserProfile();
        token && addTracker()
        token && getTrackerData()       
      })
      .then(res=> setLoading(false))
      .catch((err) => {
        setLoading(false)
        setLoginError(err.response.data.errMsg)});
      console.log(loginError)
  
  }
  function login(userInfo) {
    setLoading(true)
    axios
      .post("https://backend-lw9q.onrender.com/auth/login", userInfo)
      .then((res) => {
        const { user, token } = res.data;

        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
        setCurrentUser((prev) => ({ ...prev, user, token }));      
        navigate("/profile");
        
          token && getUserProfile();
          // token && addTracker()
          token && getTrackerData()
        
      })
      .then(res=> setLoading(false))
      .catch((err) =>{ 
        setLoading(false)
        setLoginError(err.response.data.errMsg)});      
     
  }

  function logout (){
    localStorage.clear()
    setCurrentUser((prev) => ({ ...prev, user:{}, token:"" }));  
    navigate('/login')
}

function resetError(){
  setLoginError("")
}


  useEffect(() => {
    count.current = count.current + 1
    

      token && getUserProfile()      
      // token && count.current === 2 && addTracker() 
      token && getTrackerData()

    
 
  },[navigate] );

  return (
    <UserContext.Provider value={{loginError, ...currentUser.user, token, loading, signup, login, logout, currentUser, resetError }}>
      {props.children}
    </UserContext.Provider>
  );
}
