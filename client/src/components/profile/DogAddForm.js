import React, { useState, useContext } from "react";
import {ProfileContext } from "../../context/profileProvider";

export default function DogAddForm(props) {
  const {getUserProfile} = useContext(ProfileContext)
  const {
 
    addNewProfile,
    addToggler, 
  } = props;

  const [updatedNewProfile, setUpdatedNewProfile] = useState({
    dogName: "",
    breed: "",
    age: "",
    weight: "",
    birthday: "",
    vet: "",
  });

  function updateChangeHandler(event) {
    const { name, value } = event.target;
    setUpdatedNewProfile((prev) => ({ ...prev, [name]: value }));
   
  }

  function updateSubmitHandler(event) {
    event.preventDefault();
    addNewProfile(updatedNewProfile);
    setUpdatedNewProfile((prev) => ({
      dogName: "",
      breed: "",
      age: "",
      weight: "",
      birthday: "",
      vet: "",
    }));
    // getTrackerData()
    getUserProfile()
    addToggler(false)
  
  }

  return (
    <div>
      <form className="add-profile-from" onSubmit={updateSubmitHandler}>
        <div>
          <div>
          <h3 className="add-dog-title">Name</h3>
            <input
              type="text"
              name="dogName"
              value={updatedNewProfile.dogName}
              onChange={updateChangeHandler}
            />
          </div>
          <div>
            <div>
              <h3 className="add-dog-title">Breed</h3>
              <section>
                <input
                  name="breed"
                  type="text"
                  value={updatedNewProfile.breed}
                  onChange={updateChangeHandler}
                />
              </section>
            </div>
            <div>
              <h3 className="add-dog-title">Age</h3>
              <section>
                <input
                  name="age"
                  type="number"
                  value={updatedNewProfile.age}
                  onChange={updateChangeHandler}
                />
              </section>
            </div>
            <div>
              <h3 className="add-dog-title">Weight</h3>
              <section>
                <input
                  name="weight"
                  type="number"
                  value={updatedNewProfile.weight}
                  onChange={updateChangeHandler}
                />
              </section>
            </div>
            <div>
              <h3 className="add-dog-title">Birthday</h3>
              <section>
                <input
                  name="birthday"
                  type="text"
                  value={updatedNewProfile.birthday}
                  onChange={updateChangeHandler}
                />
              </section>
            </div>
            <div>
              <h3 className="add-dog-title">Vet Info</h3>
              <section>
                <input
                  name="vet"
                  type="text"
                  value={updatedNewProfile.vet}
                  onChange={updateChangeHandler}
                />
              </section>
            </div>
          </div>
          <div>
            
          </div>
        </div>
        <button className="add-dog-button">Save Info</button>
      </form>
    </div>
  );
}
