import GroomingForm from "./GroomingForm"
import React, {useState} from "react"
export default function Grooming (props){    
    const {groomed} = props
    const [toggle, setToggle] = useState(true)

    function toggler (){
        setToggle(!toggle)
      }
      
    return(<div onClick={toggler}>
    
        {toggle ?
        <div>
                <h1>Grooming Appointment</h1>
{groomed}
        </div>
        :

    <GroomingForm toggler={toggler}/>

}
        </div>
    )
}