import MedicalForm from "./MedicalForm";
import React, { useState, useContext } from "react";
import { TrackerContext } from "../../context/trackerProvider";
export default function Medical(props) {
  const { medicalNotes, vetApt, trackerId } = props;
  const {trackerInfo} = useContext(TrackerContext)

  const [toggle, setToggle] = useState(true);
  
  function toggler (){
    setToggle(!toggle)
  }


// findNewestDate ()
//   trackerInfo.find(item=>item.vetApt.length > 1 ).vetApt 
  return (
    <div >
{toggle ?
      <div onClick={toggler}>
    <h1>Medical/Vet</h1>
        <div>
          <section>Next Appointment</section>
          <section>{trackerInfo.find(item=>item.vetApt.length > 1 ) ? trackerInfo.find(item=>item.vetApt.length > 1 ).vetApt : ""}</section>
        </div>        
        <div>
        
          <section>Notes</section>
        </div>        
        <section>{trackerInfo.find(item=>item.medicalNotes.length > 1 ) ? trackerInfo.find(item=>item.medicalNotes.length > 1 ).medicalNotes : ""}</section>
      </div>
      :
      
      <MedicalForm trackerInfo={trackerInfo} trackerId={trackerId} medicalNotes={medicalNotes} vetApt={vetApt }toggler={toggler} />
   
      }
    </div>
  );
}
