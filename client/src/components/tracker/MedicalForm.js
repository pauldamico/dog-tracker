import React, { useState, useContext } from "react";
import { TrackerContext } from "../../context/trackerProvider";
export default function MedicalForm(props) {
  const {submitMedical} = useContext(TrackerContext);
  const { toggler, medicalNotes, vetApt, trackerId } = props;

  const [medicalInfo, setMedicalInfo] = useState({medicalNotes, vetApt})

  function submitHandler(event) {
    event.preventDefault()
    submitMedical(medicalInfo, trackerId) 
    toggler();
  console.log(medicalNotes)
  console.log(vetApt)
  }

function changeHandler (event){
const{name, value} = event.target
setMedicalInfo(prev=>({...prev, [name]:value}))

}

  return (
    <div>
      <form onSubmit={submitHandler}>
        <section>Next Appointment</section>
        <input type = "date" name="vetApt" onChange={changeHandler} value={medicalInfo.vetApt}  />
        <section>Notes</section>
        <textarea name = "medicalNotes" onChange={changeHandler} type="text" value={medicalInfo.medicalNotes} />
        <button>Save</button>
      </form>
    </div>
  );
}
