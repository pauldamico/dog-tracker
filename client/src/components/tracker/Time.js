import React, {useState} from "react"
export default function Time (props){

    const {name, updateSelectedTime, selected, n, _id} = props
const [currentTimeInfo, setCurrentTimeInfo] = useState({n:n, selected:selected, _id:_id})


    function timeClickHandler (){
        setCurrentTimeInfo(prev=>({...prev, selected:!prev.selected}))
        updateSelectedTime(currentTimeInfo._id, !currentTimeInfo.selected, name)
    }
    return (<div>
<h2 onClick = {timeClickHandler} style={{color:currentTimeInfo.selected ? "green" : "black"}}>{n}</h2>
    </div>)
}