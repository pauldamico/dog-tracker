import GroomingForm from "./GroomingForm"
import React, {useState, useContext} from "react"
import { TrackerContext } from "../../context/trackerProvider"
export default function Grooming (props){    
    const {submitGrooming, trackerInfo} = useContext(TrackerContext)
    const {groomed, trackerId} = props
    const [toggle, setToggle] = useState(true)
  

    function toggler (){
        setToggle(!toggle)        
      }
      
    //   trackerInfo.find(item=>item.groomed.length > 1 ).groomed 

    return(<div>
    
        {toggle ?
        <div onClick={toggler}>
                <h1>Grooming Appointment</h1>
{trackerInfo.find(item=>item.groomed.length > 1 ) ? trackerInfo.find(item=>item.vetApt.length > 1 ).groomed : "" }
        </div>
        :

    <GroomingForm trackerId={trackerId} submitGrooming={submitGrooming} groomed={groomed} toggler={toggler}/>

}
        </div>
    )
}