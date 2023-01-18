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
 

  function updateChangeHandler(event) {
    const { name, value } = event.target;
    setUpdatedProfile((prev) => ({ ...prev, [name]: value }));
    console.log(updatedProfile)
   
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

    submitUpdatedProfile(_id, updatedInfo)
  
    // userAxios
    //   .put(`/api/profile/update/${_id}`, updatedInfo)
    //   .then((res) => submitUpdatedProfile(_id, res.data))
    //   .catch((err) => console.log(err));

    //    submitUpdatedProfile(userId, updatedProfile. updatedProfile)
    //    {!dogName && addNewProfile(updatedProfile)}
    updateToggler();
  }

  return (
    <div className="profile-dog-update-div">
      <form onSubmit={updateSubmitHandler}>
        <div>
          <div className="update-div-text">
          <h3>Name</h3>
       
            <input
              type="text"
              name="dogName"
              value={updatedProfile.dogName}
              onChange={updateChangeHandler}
            />
        
          </div>
          <div>
            <div className="update-div-text">
              <h3>Breed</h3>
            
                <input
                  name="breed"
                  type="text"
                  value={updatedProfile.breed}
                  onChange={updateChangeHandler}
                />
          
            </div>
            <div className="update-div-text">
              <h3>Age</h3>
          
                <input
                  name="age"
                  type="number"
                  value={updatedProfile.age}
                  onChange={updateChangeHandler}
                />
           
            </div>
            <div className="update-div-text">
              <h3>Weight</h3>
       
                <input
                  name="weight"
                  type="number"
                  value={updatedProfile.weight}
                  onChange={updateChangeHandler}
                />
         
            </div>
            <div className="update-div-text">
              <h3>Birthday</h3>
         
                <input
                  name="birthday"
                  type="text"
                  value={updatedProfile.birthday}
                  onChange={updateChangeHandler}
                />
           
            </div>
            <div className="update-div-text">
              <h3>Vet Info</h3>
     
                <input
                  name="vet"
                  type="text"
                  value={updatedProfile.vet}
                  onChange={updateChangeHandler}
                />
       
            </div>
          </div>
        
        </div>
        <div className="button-save-info-div">
        <button >Save Info</button>
        </div>
      </form>
    </div>
  );
}
