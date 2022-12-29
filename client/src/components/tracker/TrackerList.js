import React, {useContext, useRef, useState, useEffect } from "react";
import { TrackerContext } from "../../context/trackerProvider";
import Tracker from "./Tracker"
export default function TrackerList (){
   
    const {trackerInfo,loading, todaysDate, addTracker} = useContext(TrackerContext)
    const count = useRef(0)
    const countUseEffect = useRef(0)
  

const [index, setIndex] = useState(0)

   function showPreviousDay(){   
  if(count.current !== trackerInfo.length - 1){
    count.current += 1
    setIndex(prev=>count.current)
    // console.log(count)
  }
   }


   function showNextDay(){   
    // console.log(count)
    if(count.current === trackerInfo.length - 1){

    }
   if(count.current !== 0){
     count.current -= 1
     setIndex(prev=>count.current)
     console.log(count)
   }
    }

    // useEffect(()=>{
    //   addTrackerCount.current += 1
    //   console.log(addTrackerCount.current)
    //   if(addTrackerCount.current >= 3){

    //  addTracker() 
    //  getTrackerData()
   
    //   }
    // }, [])
    // console.log(console.log(trackerInfo.find(item=>item.date === todaysDate)))
    // console.log(todaysDate)



    return (<div>
    
   {trackerInfo && <div className="tracker-list-div">
    <div>
{trackerInfo[0] && <Tracker key={trackerInfo[index]._id} {...trackerInfo[index]} />}
</div> 


<div className="previousNext-div">

 <button style={{backgroundColor: index < trackerInfo.length -1 ? "white" : "rgb(235, 234, 233)", border:"none" }} onClick={showPreviousDay}>{"<"}</button>

<button style={{backgroundColor: index <= 0  ? "rgb(235, 234, 233)" : "white", border:"none" }} onClick={showNextDay}>{">"}</button>

</div>
{loading && <div className="loading-div"><div className="lds-dual-ring"></div>Loading<div  className="lds-dual-ring"></div></div>}
</div>}


</div>)
}


//{trackerInfo.map(tracker=><Tracker key={tracker._id} {...tracker} />)}