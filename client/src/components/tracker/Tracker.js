import React, { useState, useContext } from "react";
import Time from "./Time";
import Treats from "./Treats";
import Bathroom from "./Bathroom";
import { TrackerContext } from "../../context/trackerProvider";



export default function Tracker(props) {



  const { _id, bathroomAM, bathroomPM, treatsAM, treatsPM, food } = props;
  const {updateSelectedTime} = useContext(TrackerContext);

///fix this



  return (
    <div>
      <div>
        <div>
          <h1>Took dog out?</h1>
          <section>AM</section> 
          <div className="time-div">        
          
          {bathroomAM.map(item=>(<Time name ="updateTimeBathAM" updateSelectedTime={updateSelectedTime} key={item._id} {...item}/>))}
          </div>
          <section>PM</section>
          <div className="time-div">  
            
            {bathroomPM.map(item=>(<Time name ="updateTimeBathPM" updateSelectedTime={updateSelectedTime} key={item._id} {...item}/>))}
          </div>
          {/* <TakeDogOut submitTime={submitBathroomTime} hours={hours} trackerId={_id}/> */}
        </div>
        <h1>Fed dog?</h1>
        <button>Morning</button><button>Lunch</button><button>Dinner</button>
        <h1>Last time dog had a treat?</h1>
        <section>AM</section>
        <div className="time-div">              
            {treatsAM.map(item=>(<Time name="updateTimeTreatsAM" updateSelectedTime={updateSelectedTime} key={item._id} {...item}/>))}
          </div>
          <section>PM</section>
          <div className="time-div">            
            {treatsPM.map(item=>(<Time name="updateTimeTreatsPM" updateSelectedTime={updateSelectedTime} key={item._id} {...item}/>))}
          </div>
        {/* <GiveDogTreat submitTime={submitTreatTime} hours={hours} trackerId={_id}/> */}
        <h1>Medical info?</h1>
        <h1>Last grooming?</h1>
      </div>
    </div>
  );
}


// const bathRoomAMArray = Object.values(bathroomAM)
// const bathRoomPMArray = Object.values(bathroomPM)
// const treatsAMArray = Object.values(bathroomAM)
// const treatsPMArray = Object.values(bathroomPM)