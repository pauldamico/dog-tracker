import React, {useContext } from "react";
import { TrackerContext } from "../../context/trackerProvider";
import GiveDogTreat from "./GiveDogTreat"
import TakeDogOut from "./TakeDogOut";
export default function Tracker() {

    const {hours, submitBathroomTime, submitTreatTime} = useContext(TrackerContext)

  return (
    <div>
      <div>
        <div>
        <h1>Took dog out?</h1>
        <TakeDogOut submitTime={submitBathroomTime} hours={hours}/>
        </div>
        <h1>Fed dog?</h1>        
        <h1>Last time dog had a treat?</h1>
        <GiveDogTreat submitTime={submitTreatTime} hours={hours}/>
        <h1>Medical info?</h1>
        <h1>Last grooming?</h1>
      </div>

    
    </div>
  );
}
