import React, { useState, useRef, useEffect } from "react";
import Time from "./Time";
export default function GiveDogTreat(props) {
  const { trackerId, hours, submitTime } = props;
  const count = useRef(0);
  const initValue = {
    treatsAM: [],
    treatsPM: [],
  };

  const [treatTime, setTreatTime] = useState(initValue);
  const [dayTimes, setDayTimes] = useState(hours());

  function updateTreatsAM(clickedTime) {
    const timeIndex = treatTime.treatsAM.indexOf(clickedTime);
    const checkIfAdded = treatTime.treatsAM.find(
      (time) => time === clickedTime
    );
    checkIfAdded
      ? treatTime.treatsAM.splice(timeIndex, 1) &&
        submitTime(treatTime, trackerId)
      : setTreatTime((prev) => ({
          ...prev,
          treatsAM: [...prev.treatsAM, clickedTime],
        })) && submitTime(treatTime, trackerId);
  }

  function updateTreatsPM(clickedTime) {
    const timeIndex = treatTime.treatsPM.indexOf(clickedTime);
    const checkIfAdded = treatTime.treatsPM.find(
      (time) => time === clickedTime
    );
    checkIfAdded
      ? treatTime.treatsPM.splice(timeIndex, 1) &&
        submitTime(treatTime, trackerId)
      : setTreatTime((prev) => ({
          ...prev,
          treatsPM: [...prev.treatsPM, clickedTime],
        })) && submitTime(treatTime, trackerId);
  }
  useEffect(() => {
    count.current = count.current + 1;
    count.current > 2 && submitTime(treatTime, trackerId);
  }, [treatTime]);

  return (
    <div>
      <form>
        <section>AM</section>
        <div className="am-div">
          {dayTimes.map((time) => (
            <Time
              {...time}     
              type={"treats"}
              updateTime={updateTreatsAM}
              key={time.id}
              trackerId={trackerId}
            />
          ))}
        </div>
        <section>PM</section>
        <div className="pm-div">
          {dayTimes.map((time) => (
            <Time
              {...time}          
              type={"treats"}
              updateTime={updateTreatsPM}
              key={time.id}
              trackerId={trackerId}
            />
          ))}
        </div>
      </form>
    </div>
  );
}

/* <label>Ate Breakfast, Lunch or Dinner</label>
<section>AM</section>
<div className="food-am-div">
{dayTimes.map(time=><AM {...time} type={'food'} key={time.id }/>)}
</div>
<section>PM</section>
<div className="food-pm-div">
{dayTimes.map(time=><PM {...time} type={'food'} key={time.id} />)}
</div>
<input/>
<label>Medical</label>
<input/>
<label>Groomed last</label>
<input/> */

// treats: {
//     am: [],
//     pm: []
// },
// food: {lunch: false, dinner: true},
// medical: {medicineName: "test", lastMedicineDate: "2021-10-20T04:00:00.000Z", nextVetApt: "2021-10-20T04:00:00.000Z"},
// groomed:""
