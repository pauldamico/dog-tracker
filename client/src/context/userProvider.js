import React, { useState, createContext } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
export const UserContext = createContext();
export function UserContextProvider(props) {
  const initUser = { user:JSON.parse(localStorage.getItem("user"))||{username: "", password: "", _id:""} , token:localStorage.getItem("token")|| ""};
  const [currentUser, setcurrentUser] = useState(initUser);
const {_id, username} = currentUser.user
const {token} = currentUser
const navigate = useNavigate()


  function signup(newUser) {
    
    axios
      .post("/auth/signup", newUser)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user))
        localStorage.setItem("token", res.data.token)
        setcurrentUser(prev=>res.data)})
      .catch((err) => console.log(err));
      console.log(currentUser);
  }
  function login(userInfo) {
    axios
      .post("/auth/login", userInfo)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user))
        localStorage.setItem("token", res.data.token)
        setcurrentUser(prev=>res.data)
        navigate('/profile')
      
      })
      .catch((err) => console.log(err));
  }

  return (
    <UserContext.Provider value={{ username, token, signup, login }}>
      {props.children}
    </UserContext.Provider>
  );
}
