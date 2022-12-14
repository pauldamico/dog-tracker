import React, {useState} from "react"
export default function GroomingForm(props){
    const {toggler, trackerId, submitGrooming, groomed, } = props

    const [groomedDate,setGroomedDate] = useState(groomed)

    function groomSubmitHandler (event){
        event.preventDefault()
        submitGrooming(groomedDate, trackerId)
        toggler()
        console.log(groomedDate)
    }

    function groomingChangeHandler(event){
        const {value} = event.target
        setGroomedDate(value)
        console.log(groomedDate)
    }
    return(
        <div >
            <form onSubmit={groomSubmitHandler}>
                <section>Next Appointment</section>
                <input value= {groomedDate} type="date" onChange={groomingChangeHandler} name="groomed"/>
                <button>Save</button>               
            </form>
        </div>
    )
}