import React,{useState, createContext} from "react";

export const TrackerContext = createContext()
export  function TrackerContextProvider(props){


return (<TrackerContext.Provider value={{}}>
{props.children}
</TrackerContext.Provider>)

}