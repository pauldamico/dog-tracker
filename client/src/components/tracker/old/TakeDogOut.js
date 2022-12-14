import React, { useState, useEffect, useRef } from "react";
import { ProfileContext } from "../../context/profileProvider";
import Time from "./Time";
export default function TakeDogOut(props) {
  const { trackerId, hours, submitTime } = props;
const count = useRef(0)
  const initValue = {
    bathroomAM: [],
    bathroomPM: [],
  };
  const [bathroomTime, setBathroomTime] = useState(initValue);

  const [dayTimes, setDayTimes] = useState(hours());
  
// console.log(dayTimes.map(item=>item.time))
// console.log(bathroomTime.bathroomAM)
console.log(dayTimes.filter(item=>bathroomTime.bathroomAM.includes(item)))

  function updateBathroomAM(clickedTime) {
    const timeIndex = bathroomTime.bathroomAM.indexOf(clickedTime);
    const checkIfAdded = bathroomTime.bathroomAM.find(
      (time) => time === clickedTime
    );
    checkIfAdded
      ? bathroomTime.bathroomAM.splice(timeIndex, 1)
 && submitTime(bathroomTime, trackerId) && console.log(timeIndex)
      : setBathroomTime((prev) => ({
          ...prev,
          bathroomAM: [...prev.bathroomAM, clickedTime],
        })) 
        &&
        submitTime(bathroomTime, trackerId)
   ;
  }


  function updateBathroomPM(clickedTime) {
    const timeIndex = bathroomTime.bathroomPM.indexOf(clickedTime);
    const checkIfAdded = bathroomTime.bathroomPM.find(
      (time) => time === clickedTime
    );
    checkIfAdded
      ? bathroomTime.bathroomPM.splice(timeIndex, 1)
 && submitTime(bathroomTime, trackerId)
      : setBathroomTime((prev) => ({
          ...prev,
          bathroomPM: [...prev.bathroomPM, clickedTime],
        }))
        &&
        submitTime(bathroomTime, trackerId)
  }

  function updateSelected (numberId){
    // console.log(numberId)
    // setDayTimes(prev=>prev.map(item=>item))
  }

  useEffect(()=>{   
    count.current = count.current + 1 
count.current > 2 &&  submitTime(bathroomTime, trackerId)
  }, [bathroomTime])
  


  return (
    <div>
      <form>
        <section>AM</section>
        <div className="am-div">
          {dayTimes.map((time) => (
            <Time
              {...time}
              type={"bathroom"}              
              updateTime={updateBathroomAM}
              key={time.id}
              trackerId={trackerId}
              updateSelected={updateSelected}
            />
          ))}
        </div>
        <section>PM</section>
        <div className="pm-div">
          {dayTimes.map((time) => (
            <Time           
              {...time}
              type={"bathroom"}
              updateTime={updateBathroomPM}
              key={time.id}
              trackerId={trackerId}
              updateSelected={updateSelected}
            />
          ))}
        </div>
      </form>
    </div>
  );
}