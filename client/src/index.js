import React from "react";
import {TrackerContextProvider}from "./context/trackerProvider";
import { UserContextProvider } from "./context/userProvider";
import { ProfileContextProvider } from "./context/profileProvider";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProfileContextProvider>
      <TrackerContextProvider>
      <UserContextProvider>      
          <App /> 
      </UserContextProvider>
      </TrackerContextProvider>
      </ProfileContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
