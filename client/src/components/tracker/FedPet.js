import React, { useState } from "react";
export default function FedPet() {
  const [fedTime, setFedTime] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
  });

  function breakfastClickHandler() {
    setFedTime((prev) => ({ ...prev, breakfast: !prev.breakfast }));
    console.log(fedTime)
  }
  function lunchClickHandler() {
    setFedTime((prev) => ({ ...prev, lunch: !prev.lunch }));
    console.log(fedTime)
  }
  function dinnerClickHandler() {
    setFedTime((prev) => ({ ...prev, dinner: !prev.dinner }));
    console.log(fedTime)
  }

  return (
    <div>
      <button onClick={breakfastClickHandler}>Breakfast</button>
      <button onClick={lunchClickHandler}>Lunch</button>
      <button onClick={dinnerClickHandler}>Dinner</button>
    </div>
  );
}
