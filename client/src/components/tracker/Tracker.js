import React, {useContext } from "react";
import FedPet from "./FedPet";
import Time from "./Time";
import { TrackerContext } from "../../context/trackerProvider";



export default function Tracker(props) {



  const { _id:trackerId, bathroomAM, bathroomPM, treatsAM, treatsPM, food, date } = props;
  const {updateSelectedTime} = useContext(TrackerContext);





  return (
    <div className="main-tracker-div1">
      <div className="main-tracker-div2">
        <div className="tracker-took-out-pet-div">
          <h1>Took dog out?</h1>
          <section>AM</section> 
         
          <div className="time-div">        
          
          {bathroomAM.map(item=>(<Time name ="updateTimeBathAM" frontEndName="bathroomAM" trackerId={trackerId} updateSelectedTime={updateSelectedTime} key={item._id} {...item}/>))}
          </div>
          <section>PM</section>
          <div className="time-div">  
            
            {bathroomPM.map(item=>(<Time name ="updateTimeBathPM" frontEndName="bathroomPM" trackerId={trackerId} updateSelectedTime={updateSelectedTime} key={item._id} {...item}/>))}
          </div>
          {/* <TakeDogOut submitTime={submitBathroomTime} hours={hours} trackerId={_id}/> */}
        </div >
        <div className="tracker-time-div">{date}</div>
        <div className="tracker-fed-pet-div">
        <h1>Fed dog?</h1>
        <FedPet food={food} trackerId={trackerId}/>
      
        </div>
        <div className="tracker-treat-div">
        <h1>Last time dog had a treat?</h1>
        <section>AM</section>
        <div className="time-div">              
            {treatsAM.map(item=>(<Time name="updateTimeTreatsAM" frontEndName="treatsAM" trackerId={trackerId} updateSelectedTime={updateSelectedTime} key={item._id} {...item}/>))}
          </div>
          <section>PM</section>
          <div className="time-div">            
            {treatsPM.map(item=>(<Time name="updateTimeTreatsPM" frontEndName="treatsPM"trackerId={trackerId} updateSelectedTime={updateSelectedTime} key={item._id} {...item}/>))}
          </div>
          </div>
       <div className="tracker-medical-div">
        <h1>Medical info?</h1>
        </div>
        <div className="tracker-grooming-div">
        <h1>Last grooming?</h1>
        </div>
      </div>
    </div>
  );
}


// const bathRoomAMArray = Object.values(bathroomAM)
// const bathRoomPMArray = Object.values(bathroomPM)
// const treatsAMArray = Object.values(bathroomAM)
// const treatsPMArray = Object.values(bathroomPM)