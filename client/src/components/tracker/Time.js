import React, {useState} from "react"
export default function PM (props){
const {type, time, updateTime} = props

    

// const [currentTime, setCurrentTime] = useState(time);


function timeUpdateHandler() {
  updateTime(time)

}
return (
  <div onClick={timeUpdateHandler}>
    <h2>{time}</h2>
  
  </div>
);
}

