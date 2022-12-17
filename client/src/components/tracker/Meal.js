import React, {useState} from "react"
export default function Meal (props){

    
        const {name, updateSelectedTime, selected, n, _id} = props
    const [fedMeal, setFedMeal] = useState({n:n, selected:selected, _id:_id})
    
    
        function breakfastMealClickHandler (){
            setFedMeal(prev=>({...prev, meal}))
            updateSelectedTime(currentTimeInfo._id, !currentTimeInfo.selected, name)
        }
        return (<div>
    <h2 onClick = {breakfastMealClickHandler} style={{color:currentTimeInfo.selected ? "green" : "black"}}>{"test"}</h2>
        </div>)
    }




