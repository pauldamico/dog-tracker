import React, {useContext, useRef, useState, useEffect } from "react";
import { TrackerContext } from "../../context/trackerProvider";
import Tracker from "./Tracker"
export default function TrackerList (){
   
    const {trackerInfo} = useContext(TrackerContext)
    const count = useRef(0)

trackerInfo && console.log(trackerInfo.sort((a, b)=>b.dateOrder - a.dateOrder))
const [index, setIndex] = useState(0)

   function showPreviousDay(){   
  if(count.current !== trackerInfo.length - 1){
    count.current += 1
    setIndex(prev=>count.current)
 
  }
   }


   function showNextDay(){   
    console.log(count)
    if(count.current === trackerInfo.length - 1){

    }
   if(count.current !== 0){
     count.current -= 1
     setIndex(prev=>count.current)
     console.log(count)
   }
    }


    return (<div>
   {trackerInfo && <div className="tracker-list-div">
    <div>
<Tracker key={trackerInfo[index]._id} {...trackerInfo[index]} />
</div> 


<div>
    
 <button style={{backgroundColor: index < trackerInfo.length -1 ? "green" : "grey", border:"none" }} onClick={showPreviousDay}>previous</button>
<button style={{backgroundColor: index < 0 -1 ? "green" : "grey", border:"none" }} onClick={showNextDay}>Next</button>
</div>
</div>}


</div>)
}


//{trackerInfo.map(tracker=><Tracker key={tracker._id} {...tracker} />)}