import React, { useState, useContext } from "react";
import { TrackerContext } from "../../context/trackerProvider";

export default function FedPet(props) {
  const {updateFedPet} = useContext(TrackerContext)
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
      <button style={{backgroundColor:fedFood.fedBreakfast === true ? "rgb(0, 101, 232)" : "white"}} onClick={breakfastClickHandler}>Breakfast</button>
      <button style={{backgroundColor:fedFood.fedLunch === true ? "rgb(0, 101, 232)" : "white"}} onClick={lunchClickHandler}>Lunch</button>
      <button style={{backgroundColor:fedFood.fedDinner === true ? "rgb(0, 101, 232)" : "white"}} onClick={dinnerClickHandler}>Dinner</button>
    </div>
  );
}
