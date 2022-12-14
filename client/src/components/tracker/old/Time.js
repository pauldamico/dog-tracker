import React, {useContext} from "react"
import { TrackerContext } from "../../context/trackerProvider";
export default function PM (props){
const {type, trackerId, time, updateTime, amSelectedTimes, pmSelectedTimes, selected, id, updateSelected, currentNumbersAM, currentNumbersPM} = props
const {trackerInfo} = useContext(TrackerContext)
    

const test = trackerInfo.filter(item=>item._id === trackerId && item)[0].bathroomAM.filter(item=>item)
const foundNumber = test.find(item => item === time)



function timeUpdateHandler() {
  updateTime(time)
 updateSelected(id)

  

}
return (
  <div onClick={timeUpdateHandler}>
    <h2 style={{ color:currentNumbersAM === time ? "green" : "red"}}> {time}</h2>
  
  </div>
);
}

