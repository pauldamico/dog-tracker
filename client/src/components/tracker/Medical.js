import MedicalForm from "./MedicalForm";
import React, { useState } from "react";
export default function Medical(props) {
  const { notes, vetApt } = props;

  const [toggle, setToggle] = useState(true);
  function toggler (){
    setToggle(!toggle)
  }

  return (
    <div >
{toggle ?
      <div onClick={toggler}>
    <h1>Medical/Vet</h1>
        <div>
          <section>Schedule Vet Date</section>
          <section>{vetApt}</section>
        </div>        
        <div>
          <section>{notes}</section>
          <section>Notes</section>
        </div>        
        <section>{notes}</section>
      </div>
      :
      
      <MedicalForm toggler={toggler} />
   
      }
    </div>
  );
}
