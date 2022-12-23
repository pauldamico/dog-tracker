import React, { useState, createContext } from "react";
import axios from "axios";

const userAxios = axios.create();
userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const ProfileContext = createContext();
export function ProfileContextProvider(props) {
  //profile info

  const [profiles, setProfiles] = useState([]);

  function submitUpdatedProfile(id, data) {
    console.log(data);
    setProfiles((prev) =>
      prev.map((profile) =>
        profile._id === id
          ? {
              ...profile, 
              dogName:data.dogName,      
              age: data.age,
              birthday: data.birthday,
              breed: data.breed,
              vet: data.vet,
              weight: data.weight
            
            }
          : { ...profile }
      )
    );
  }

  function addNewProfile(dogInfo) {
    userAxios
      .post(`backend-lw9q.onrender.com/api/profile/add`, dogInfo)
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
      .get("backend-lw9q.onrender.com/api/profile")
      .then((res) => setProfiles((prev) => res.data))
      .catch((err) => console.log(err));
  }

  function deleteProfile (profileId){
userAxios.delete(`backend-lw9q.onrender.com/api/profile/delete/${profileId}`)
.then(res=>setProfiles(profiles.filter(profile=>profile._id !== profileId)))
.catch(res=>console.log(res.data))
  }
  return (
    <ProfileContext.Provider
      value={{
        deleteProfile,
        addNewProfile,
        profiles,
        submitUpdatedProfile,
        getUserProfile,
        userAxios,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
}
