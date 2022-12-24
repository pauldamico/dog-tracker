import React, { useState } from "react";
import DogProfileForm from "./DogProfileForm.js";

export default function Dog(props) {
  const {
    deleteProfile,
    dogName,
    breed,
    age,
    weight,
    birthday,
    vet,
    submitUpdatedProfile,
    addNewProfile,
    username,    
    userId,
    userAxios,
    _id,
  } = props;

  const profile = { dogName, breed, age, weight, birthday, vet };

  const [updateToggled, setUpdateToggled] = useState(true);

  function updateToggler() {
    setUpdateToggled(!updateToggled);
  }

  return (
    <div className="profile-div">
      {updateToggled && (
        <div className="dog-profile-text">
          <div>
          <h3 className="profile-title">Pet Name</h3>
          <section className="profile-section">{dogName}</section>
          </div>
          <div>
            <div>
              <h3 className="profile-title">Breed</h3>
              <section className="profile-section">{breed}</section>
            </div>
            <div>
              <h3 className="profile-title">Age</h3>
              <section className="profile-section">{age}</section>
            </div>
            <div>
              <h3 className="profile-title">Weight</h3>
              <section className="profile-section">{weight}</section>
            </div>
            <div>
              <h3 className="profile-title">Birthday</h3>
              <section className="profile-section">{birthday}</section>
            </div>
            <div>
              <h3 className="profile-title">Vet Info</h3>
              <section className="profile-section">{vet}</section>
            </div>
          </div>
          <div>
            
          </div>
          <button onClick={updateToggler}>Update Info</button>
          <button onClick={()=>{deleteProfile(_id)}}>Delete</button>
        </div>
      )}
      {!updateToggled && (
        <DogProfileForm
          userAxios={userAxios}
          _id={_id}
          addNewProfile={addNewProfile}
          {...profile}
          username={username}
          userId={userId}
          updateToggler={updateToggler}
          submitUpdatedProfile={submitUpdatedProfile}
        
        />
      )}
    </div>
  );
}
