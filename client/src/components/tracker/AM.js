import React, {useState} from "react"
export default function AM (props){
const {type, time, selected} = props

    
    const [currentTime, setCurrentTime] = useState({selected:false, type:{type}})

function timeChangeHandler (event){
const {checked, name} = event.target
setCurrentTime(prev=>({...prev, [name]:checked}))

}
function timeUpdateHandler(){
  
    
}
    return (<div>
                <input  
                onClick={timeUpdateHandler}                       
                    type="checkbox"
                    id={`bathroom${time}`}
                    name="selected"                
                    checked={currentTime.selected}
                    onChange={timeChangeHandler}
                />
                <label htmlFor={time}>{time}</label>
                <br />


            {currentTime.time}

    </div>)
}