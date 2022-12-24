import React, { useState, useContext } from "react";
import { nanoid } from "nanoid";
import { UserContext } from "../../context/userProvider.js";
import DogAddForm from "./DogAddForm.js";
import { ProfileContext } from "../../context/profileProvider.js";
import Dog from "./Dog.js";
export default function DogProfile() {
  const { username, token, userId } = useContext(UserContext);
  const {deleteProfile, userAxios, profiles, submitUpdatedProfile, addNewProfile } =
    useContext(ProfileContext);
  const [addToggle, setAddToggle] = useState(false);

  function addToggler(value) {
    setAddToggle(value);
  }

  return (
    <div className="main-profile-div">

      <div>
        {profiles.length < 1 && (
          <div>
            <DogAddForm
              submitUpdatedProfile={submitUpdatedProfile}
              addNewProfile={addNewProfile}
              username={username}
              token={token}
              userId={userId}
              addToggler={addToggler}
            />
          </div>
        )}
      </div>

      {!addToggle &&<div>
        {profiles.map((profile) => (
          <Dog
            userAxios={userAxios}
            key={nanoid()}
            {...profile}
            submitUpdatedProfile={submitUpdatedProfile}
            addNewProfile={addNewProfile}
            username={username}
            token={token}
            userId={userId}
            deleteProfile={deleteProfile}
          />
        ))}
        <button className = "addpet" onClick={()=>{addToggler(true)}}>Add pet</button>
      </div>}
      

      {addToggle && profiles.length >= 1 && (
        <div className="profile-form-div">
          <DogAddForm
            submitUpdatedProfile={submitUpdatedProfile}
            addNewProfile={addNewProfile}
            username={username}
            token={token}
            userId={userId}
            addToggler={addToggler}
          />
        </div>
      )}
    </div>
  );
}
