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
        <div>
          <h3>Pet Name</h3>
          <div>{dogName}</div>
          <div>
            <div>
              <h3>Breed</h3>
              <section>{breed}</section>
            </div>
            <div>
              <h3>Age</h3>
              <section>{age}</section>
            </div>
            <div>
              <h3>Weight</h3>
              <section>{weight}</section>
            </div>
            <div>
              <h3>Birthday</h3>
              <section>{birthday}</section>
            </div>
            <div>
              <h3>Vet Info</h3>
              <section>{vet}</section>
            </div>
          </div>
          <div>
            <img alt="dog" />
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
