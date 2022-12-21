import React, { useState, useContext } from "react";
import { TrackerContext } from "../../context/trackerProvider";

export default function FedPet(props) {
  const {updateFedPet, getTrackerData} = useContext(TrackerContext)
  const {trackerId, fedBreakfast, fedLunch, fedDinner} = props

  const [fedFood, setFedFood] = useState({fedBreakfast,   
    fedLunch,
    fedDinner
  });



  function breakfastClickHandler() {
    // getTrackerData()
    const fedName = "fedBreakfast"
    setFedFood((prev) => ({ ...prev, fedBreakfast: !prev.fedBreakfast }));
  console.log(fedBreakfast)
    updateFedPet(!fedFood.fedBreakfast, trackerId, fedName)
   
  }
  function lunchClickHandler() {
    const fedName = "fedLunch"
    setFedFood((prev) => ({ ...prev, fedLunch: !prev.fedLunch }));  
    updateFedPet(!fedFood.fedLunch, trackerId, fedName)   
  }

  function dinnerClickHandler() {
    const fedName = "fedDinner"
    setFedFood((prev) => ({ ...prev, fedDinner: !prev.fedDinner }));
    updateFedPet(!fedFood.fedDinner, trackerId, fedName)
  }



  return (
    <div className="fedpet">
      <button style={{backgroundColor:fedFood.fedBreakfast === true ? "green" : "white"}} onClick={breakfastClickHandler}>Breakfast</button>
      <button style={{backgroundColor:fedFood.fedLunch === true ? "green" : "white"}} onClick={lunchClickHandler}>Lunch</button>
      <button style={{backgroundColor:fedFood.fedDinner === true ? "green" : "white"}} onClick={dinnerClickHandler}>Dinner</button>
    </div>
  );
}
