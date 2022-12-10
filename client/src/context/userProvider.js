import React, { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { TrackerContext } from "./trackerProvider";
export const UserContext = createContext();
export function UserContextProvider(props) {
const {getUserProfile} = useContext(TrackerContext)

  const initUser = { user:JSON.parse(localStorage.getItem("user"))||{} , token:localStorage.getItem("token")|| ""};
  const [currentUser, setCurrentUser] = useState(initUser);
const {_id:userId, username} = currentUser.user
const {token} = currentUser
const navigate = useNavigate()


  function signup(newUser) {
    
    axios
      .post("/auth/signup", newUser)
      .then((res) => {
        const {user, token} = res.data
        localStorage.setItem("user", JSON.stringify(res.data.user))
        localStorage.setItem("token", res.data.token)
        setCurrentUser(prev=>({...prev,user, token }))})       
             .catch((err) => console.log(err));
             {token && getUserProfile()    } 
    
  }
  function login(userInfo) {
    axios
      .post("/auth/login", userInfo)
      .then((res) => {
        const {user, token} = res.data
     
        localStorage.setItem("user", JSON.stringify(res.data.user))
        localStorage.setItem("token", res.data.token)
        setCurrentUser(prev=>({...prev,token, user}))       
        navigate('/profile')       
      })      
      .catch((err) => console.log(err));  

      {token && getUserProfile()    } 
  }
 
useEffect(()=>{
{token && getUserProfile()}
}, [])


  return (
    <UserContext.Provider value={{ username, token, signup, login, userId }}>
      {props.children}
    </UserContext.Provider>
  );
}
