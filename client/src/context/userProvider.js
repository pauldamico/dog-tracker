import React, { useState, createContext } from "react";
import axios from "axios";

export const UserContext = createContext();
export function UserContextProvider(props) {
  const initUser = { user:{username: "", password: ""} , token:""};
  const [currentUser, setcurrentUser] = useState(initUser);

  function signup(newUser) {
    
    axios
      .post("/auth/signup", newUser)
      .then((res) => setcurrentUser(prev=>res.data))
      .catch((err) => console.log(err));
      console.log(currentUser);
  }
  function login(userInfo) {
    axios
      .post("/auth/login", userInfo)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <UserContext.Provider value={{ currentUser, signup, login }}>
      {props.children}
    </UserContext.Provider>
  );
}
