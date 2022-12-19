import React, {useState} from "react"
export default function GroomingForm(props){
    const {toggler, trackerId, submitGrooming, groomed, } = props
console.log(groomed)
    const [groomedDate,setGroomedDate] = useState(groomed)
console.log(groomedDate)
    function groomSubmitHandler (event){
        event.preventDefault()
        submitGrooming(groomedDate, trackerId)
        toggler()
        console.log(groomedDate)
    }

    function groomingChangeHandler(event){
        const {value, name} = event.target
        setGroomedDate(value)
        console.log(groomedDate)
    }
    return(
        <div >
            <form onSubmit={groomSubmitHandler}>
                <section>Next Appointment</section>
                <input value= {groomedDate.groomed} type="date" onChange={groomingChangeHandler} name="groomed"/>
                <button>Save</button>               
            </form>
        </div>
    )
}