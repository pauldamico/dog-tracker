import React, {useState, useContext} from "react"
import {ProfileContext} from '../../context/profileProvider.js'

export default function Treats (props){

    const {userAxios} = useContext(ProfileContext)
    const {timeInfo, name, updateSelectedTime, trackerID, selected, number, id} = props

    const [toggleSelected, setToggleSelected]=useState(selected || false)
    const [treats, setTreats] = useState(id)
    
    function updateSelector () {

        const addedItem = "test"
        // updateSelectedTime(trackerID, name, number, id)
       userAxios.post(`api/tracker/add/time/${trackerID}`,treats)
       .then(res=>console.log(res.data))
       .catch(err=>console.log(err))
 
    }
    
        return (<div onClick={updateSelector}>
    {number}
            </div>)
    
}


// updateSelectedTime(trackerID, name, number,  toggleSelected)
// console.log(toggleSelected)