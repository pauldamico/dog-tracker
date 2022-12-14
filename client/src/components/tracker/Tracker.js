import React, { useContext } from "react";
import { TrackerContext } from "../../context/trackerProvider";

export default function Tracker(props) {
  const { _id, bathroomAM, bathroomPM, treatsAM, treatsPM, food } = props;
  const {} = useContext(TrackerContext);


  return (
    <div>
      <div>
        <div>
          <h1>Took dog out?</h1>
          <div>
            <h5>AM</h5>
            <button>{bathroomAM[1].number}</button>
            <button>{bathroomAM[2].number}</button>
            <button>{bathroomAM[3].number}</button>
            <button>{bathroomAM[4].number}</button>
            <button>{bathroomAM[5].number}</button>
            <button>{bathroomAM[6].number}</button>
            <button>{bathroomAM[7].number}</button>
            <button>{bathroomAM[8].number}</button>
            <button>{bathroomAM[9].number}</button>
            <button>{bathroomAM[10].number}</button>
            <button>{bathroomAM[11].number}</button>
            <button>{bathroomAM[12].number}</button>
          </div>
          <div>
            <h5>PM</h5>
            <button>{bathroomPM[1].number}</button>
            <button>{bathroomPM[2].number}</button>
            <button>{bathroomPM[3].number}</button>
            <button>{bathroomPM[4].number}</button>
            <button>{bathroomPM[5].number}</button>
            <button>{bathroomPM[6].number}</button>
            <button>{bathroomPM[7].number}</button>
            <button>{bathroomPM[8].number}</button>
            <button>{bathroomPM[9].number}</button>
            <button>{bathroomPM[10].number}</button>
            <button>{bathroomPM[11].number}</button>
            <button>{bathroomPM[12].number}</button>
          </div>
          {/* <TakeDogOut submitTime={submitBathroomTime} hours={hours} trackerId={_id}/> */}
        </div>
        <h1>Fed dog?</h1>
        <button>Morning</button><button>Lunch</button><button>Dinner</button>
        <h1>Last time dog had a treat?</h1>
        <div>
            <h5>AM</h5>
            <button>{treatsAM[1].number}</button>
            <button>{treatsAM[2].number}</button>
            <button>{treatsAM[3].number}</button>
            <button>{treatsAM[4].number}</button>
            <button>{treatsAM[5].number}</button>
            <button>{treatsAM[6].number}</button>
            <button>{treatsAM[7].number}</button>
            <button>{treatsAM[8].number}</button>
            <button>{treatsAM[9].number}</button>
            <button>{treatsAM[10].number}</button>
            <button>{treatsAM[11].number}</button>
            <button>{treatsAM[12].number}</button>
          </div>
          <div>
            <h5>PM</h5>
            <button>{treatsPM[1].number}</button>
            <button>{treatsPM[2].number}</button>
            <button>{treatsPM[3].number}</button>
            <button>{treatsPM[4].number}</button>
            <button>{treatsPM[5].number}</button>
            <button>{treatsPM[6].number}</button>
            <button>{treatsPM[7].number}</button>
            <button>{treatsPM[8].number}</button>
            <button>{treatsPM[9].number}</button>
            <button>{treatsPM[10].number}</button>
            <button>{treatsPM[11].number}</button>
            <button>{treatsPM[12].number}</button>
          </div>
        {/* <GiveDogTreat submitTime={submitTreatTime} hours={hours} trackerId={_id}/> */}
        <h1>Medical info?</h1>
        <h1>Last grooming?</h1>
      </div>
    </div>
  );
}
