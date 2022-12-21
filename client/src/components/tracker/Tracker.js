import React, {useContext, useEffect } from "react";
import enzofield from "../../images/enzofield.jpg"
import FedPet from "./FedPet";
import Grooming from "./Grooming";
import Medical from "./Medical";
import Time from "./Time";
import { TrackerContext } from "../../context/trackerProvider";
export default function Tracker(props) {


console.log("test")
  const { _id:trackerId, bathroomAM, bathroomPM, treatsAM, treatsPM, fedBreakfast, fedLunch, fedDinner, date, medicalNotes, vetApt, groomed } = props;
  const {updateSelectedTime} = useContext(TrackerContext);



  return (
    <div className="main-tracker-div1">
    
      <div className="main-tracker-div2">
        <div className="tracker-took-out-pet-div">
          <h1 className="took-out-pet-title">Took dog out?</h1>
          
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
        <FedPet fedBreakfast={fedBreakfast} fedLunch={fedLunch} fedDinner={fedDinner} trackerId={trackerId}/>
      
        </div>
        <div className="tracker-treat-div">
        <h1 className="treat-title">Gave Treat?</h1>
        <section>AM</section>
        <div className="time-div">  
                    
            {treatsAM.map(item=>(<Time name="updateTimeTreatsAM" frontEndName="treatsAM" trackerId={trackerId} updateSelectedTime={updateSelectedTime} key={item._id} {...item}/>))}
          </div>
          <section>PM</section>  
          <div className="time-div">  
                  
            {treatsPM.map(item=>(<Time name="updateTimeTreatsPM" frontEndName="treatsPM" trackerId={trackerId} updateSelectedTime={updateSelectedTime} key={item._id} {...item}/>))}
          </div>
          </div>
       <div className="tracker-medical-div">    
        <Medical medicalNotes={medicalNotes} vetApt={vetApt} trackerId={trackerId}/>
        </div>
        <div className="tracker-grooming-div">        
        <Grooming groomed={groomed} trackerId={trackerId}/>
        </div>
        <img src ={enzofield} className="backgroundImg" />
      </div>
      
    </div>
  );
}


// const bathRoomAMArray = Object.values(bathroomAM)
// const bathRoomPMArray = Object.values(bathroomPM)
// const treatsAMArray = Object.values(bathroomAM)
// const treatsPMArray = Object.values(bathroomPM)