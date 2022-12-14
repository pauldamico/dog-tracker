import React, { useState, useContext } from "react";
import { UserContext } from "../../context/userProvider.js";
import DogAddForm from "./DogAddForm.js";
import { ProfileContext } from "../../context/profileProvider.js";
import Dog from "./Dog.js";
export default function DogProfile() {
  const { username, token, userId } = useContext(UserContext);
  const {deleteProfile, userAxios, profiles, submitUpdatedProfile, addNewProfile } =
    useContext(ProfileContext);
  const [addToggle, setAddToggle] = useState(false);

  function addToggler() {
    setAddToggle(!addToggle);
  }

  return (
    <div>
      <section>Welcome {username} </section>

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

      <div>
        {profiles.map((profile) => (
          <Dog
            userAxios={userAxios}
            key={profile._id}
            {...profile}
            submitUpdatedProfile={submitUpdatedProfile}
            addNewProfile={addNewProfile}
            username={username}
            token={token}
            userId={userId}
            deleteProfile={deleteProfile}
          />
        ))}
      </div>
      <button onClick={addToggler}>Add pet</button>

      {addToggle && profiles.length >= 1 && (
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
  );
}
