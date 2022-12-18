import React, {useState} from "react"
export default function MedicalForm(props){
    const {toggler} = props
    function submitHandler (){
        toggler()
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <section>Next Appointment</section>
                <input type="date" />
                <section>Notes</section>
                <textarea type="text" />
                <button>Save</button>
            </form>
        </div>
    )
}