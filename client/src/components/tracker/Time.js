import React, {useState} from "react"
export default function Time (props){

    const {frontEndName, trackerId, name, updateSelectedTime, selected, n, _id} = props
const [currentTimeInfo, setCurrentTimeInfo] = useState({n:n, selected:selected, _id:_id})


    function timeClickHandler (){
        setCurrentTimeInfo(prev=>({...prev, selected:!prev.selected}))
        updateSelectedTime(currentTimeInfo._id, !currentTimeInfo.selected, name, trackerId, frontEndName)
    }
    return (<div>
<h2 className="time" onClick = {timeClickHandler} style={{backgroundColor:currentTimeInfo.selected ? "#0065e8" : "white"}}>{n}</h2>
    </div>)
}