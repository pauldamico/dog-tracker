import React, { useState, createContext, useContext } from "react";
import axios from "axios";

const userAxios = axios.create();
userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const TrackerContext = createContext();
export function TrackerContextProvider(props) {
  //profile info

  const [profiles, setProfiles] = useState([]);

  function submitUpdatedProfile(id, data) {
    console.log(data);
    setProfiles((prev) =>
      prev.map((profile) =>
        profile._id === id
          ? {
              ...profile,       
              age: data.age,
              birthday: data.birthday,
              breed: data.goldendoodle,
              vet: data.test,
              weight: data.weight
            
            }
          : { ...profile }
      )
    );
  }

  function addNewProfile(dogInfo) {
    userAxios
      .post(`/api/profile/add`, dogInfo)
      .then((res) => {
        console.log(res.data);
        const { dogName, breed, age, weight, birthday, vet, _id } = res.data;
        setProfiles((prev) => [
          ...prev,
          { dogName: dogName, breed, age, weight, birthday, vet, _id },
        ]);

        console.log(profiles);
      })

      .catch((err) => console.log(err));
  }

  function getUserProfile() {
    userAxios
      .get("/api/profile")
      .then((res) => setProfiles((prev) => res.data))
      .catch((err) => console.log(err));
  }

  return (
    <TrackerContext.Provider
      value={{
        addNewProfile,
        profiles,
        submitUpdatedProfile,
        getUserProfile,
        userAxios,
      }}
    >
      {props.children}
    </TrackerContext.Provider>
  );
}
