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
    <div className="vet-div">
{toggle ?
      <div onClick={toggler}>
    <h1>Vet Appointment</h1>
        <div className="next-medical-appointment-div">
          {/* <section>Next Appointment</section> */}
          <section className="vetapt-date">{trackerInfo.find(item=>item.vetApt.length > 1 ) ? trackerInfo.find(item=>item.vetApt.length > 1 ).vetApt : ""}</section>
        </div>        
        <div className="medical-notes-div">
        
          {/* <section>Notes</section> */}
           
        <section className="vetapt-notes">{trackerInfo.find(item=>item.medicalNotes.length > 1 ) ? trackerInfo.find(item=>item.medicalNotes.length > 1 ).medicalNotes : ""}</section>
        </div>    
      </div>
      :
      
      <MedicalForm trackerInfo={trackerInfo} trackerId={trackerId} medicalNotes={medicalNotes} vetApt={vetApt }toggler={toggler} />
   
      }
    </div>
  );
}
