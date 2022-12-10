import React from "react";
import { UserContextProvider } from "./context/userProvider";
import { TrackerContextProvider } from "./context/trackerProvider";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <TrackerContextProvider>
      <UserContextProvider>      
          <App /> 
      </UserContextProvider>
      </TrackerContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
