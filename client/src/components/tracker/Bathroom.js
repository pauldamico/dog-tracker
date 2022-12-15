
import React, {useState, useContext} from "react"



export default function Bathroom (props){


        const {timeInfo, name, updateSelectedTime, trackerID, selected, number, id} = props
    
        const [toggleSelected, setToggleSelected]=useState(selected || false)
        const [bathroom, setBathroom] = useState({trackerID, id})
        
        function updateSelector () {
            updateSelectedTime(bathroom.trackerID, bathroom.id)
            console.log(bathroom.id)
        }
        
            return (<div onClick={updateSelector}>
        {number}
                </div>)
        
    }