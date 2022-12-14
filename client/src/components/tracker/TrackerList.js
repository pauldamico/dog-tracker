import React, {useContext } from "react";
import { TrackerContext } from "../../context/trackerProvider";
import Tracker from "./Tracker"
export default function TrackerList (){
    const {trackerInfo} = useContext(TrackerContext)

const trackerElements = trackerInfo.map(tracker=><Tracker key={tracker._id} {...tracker} />)


    return (<div>
{trackerElements}

    </div>)
}