import React, { useState } from "react";
import DogProfileForm from "./DogProfileForm.js";
import enzoscruffy from "../../images/enzoscruffy.png"

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
      <div className="profile-wrapper-div">
    {/* <img className="profile-img" src={enzoscruffy}/> */}
      {updateToggled && (
        <div className="dog-profile-text">
          <div className="profile-div-text">
          <h3 className="profile-title">Name</h3>
          <section className="profile-section">{dogName}</section>
          </div>
          <div>
          <div className="profile-div-text">
              <h3 className="profile-title">Breed</h3>
              <section className="profile-section">{breed}</section>
            </div>
            <div className="profile-div-text">
              <h3 className="profile-title">Age</h3>
              <section className="profile-section">{age}</section>
            </div>
            <div className="profile-div-text">
              <h3 className="profile-title">Weight</h3>
              <section className="profile-section">{weight}</section>
            </div>
            <div className="profile-div-text">
              <h3 className="profile-title">Birthday</h3>
              <section className="profile-section">{birthday}</section>
            </div>
            <div className="profile-div-text">
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
      )
      
      }
    </div>
    </div>
  );
}
