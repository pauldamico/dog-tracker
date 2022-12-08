import React, { useState, createContext } from "react";

export const TrackerContext = createContext();
export  function TrackerContextProvider(props) {

const initProfile = {dogName:"", breed:"", age:"", weight:"", birthday:"", vet:""}
    const [profile, setProfile]  = useState(initProfile)



  return (
    <TrackerContext.Provider value={{profile}}>
      {props.children}
    </TrackerContext.Provider>
  );
}
