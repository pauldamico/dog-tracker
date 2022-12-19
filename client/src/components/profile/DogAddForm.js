import React, { useState, useContext } from "react";
import { Tracker, TrackerContext } from "../../context/trackerProvider";

export default function DogAddForm(props) {
  const {getTrackerData} = useContext(TrackerContext)
  const {
 
    addNewProfile,
    addToggler,
    profile,
    username,
    userId,
    updateToggler,
    submitUpdatedProfile,
    _id,
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
    addToggler()
  
  }

  return (
    <div>
      <form onSubmit={updateSubmitHandler}>
        <div>
          <div>
          <h3>Name</h3>
            <input
              type="text"
              name="dogName"
              value={updatedNewProfile.dogName}
              onChange={updateChangeHandler}
            />
          </div>
          <div>
            <div>
              <h3>Breed</h3>
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
              <h3>Age</h3>
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
              <h3>Weight</h3>
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
              <h3>Birthday</h3>
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
              <h3>Vet Info</h3>
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
            <img />
          </div>
        </div>
        <button>Save Info</button>
      </form>
    </div>
  );
}
