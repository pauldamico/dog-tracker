import React, {useState} from "react"
export default function GroomingForm(props){
    const {toggler} = props
    
    function submitHandler (){
        toggler()
    }
    return(
        <div onClick>
            <form onSubmit={submitHandler}>
                <section>Next Appointment</section>
                <input type="date" />
                <button>Save</button>               
            </form>
        </div>
    )
}