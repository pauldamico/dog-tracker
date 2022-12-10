import React, { useState } from "react";

export default function DogProfileForm(props) {
  const {
    userAxios,
    dogName,
    breed,
    age,
    weight,
    birthday,
    vet,
    username,
    userId,
    updateToggler,
    submitUpdatedProfile,
    _id,
  } = props;

  const [updatedProfile, setUpdatedProfile] = useState({
    dogName,
    breed,
    age,
    weight,
    birthday,
    vet,
    _id,
  });
  console.log(_id);

  function updateChangeHandler(event) {
    const { name, value } = event.target;
    setUpdatedProfile((prev) => ({ ...prev, [name]: value }));
    console.log(updatedProfile);
  }

  function updateSubmitHandler(event) {
    event.preventDefault();
    const updatedInfo = {
      dogName: updatedProfile.dogName,
      breed: updatedProfile.breed,
      age: updatedProfile.age,
      weight: updatedProfile.weight,
      birthday: updatedProfile.birthday,
      vet: updatedProfile.vet,
      _id: updatedProfile._id,
    };
    userAxios
      .put(`/api/profile/update/${_id}`, updatedInfo)
      .then((res) => submitUpdatedProfile(_id, res.data))
      .catch((err) => console.log(err));

    //    submitUpdatedProfile(userId, updatedProfile. updatedProfile)
    //    {!dogName && addNewProfile(updatedProfile)}
    updateToggler();
  }

  return (
    <div>
      <form onSubmit={updateSubmitHandler}>
        <div>
          <div>
            <input
              type="text"
              name="dogName"
              value={updatedProfile.dogName}
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
                  value={updatedProfile.breed}
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
                  value={updatedProfile.age}
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
                  value={updatedProfile.weight}
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
                  value={updatedProfile.birthday}
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
                  value={updatedProfile.vet}
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
