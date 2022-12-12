import React, {useState} from 'react'
import AM from './AM'
import PM from './PM'
export function TimeOfTheDay (props){

const {hours} = props

    const initValue =    {
     bathroom:{
        am: [],
        pm: []
    },
    // treats: {
    //     am: [],
    //     pm: []
    // },
    // food: {lunch: false, dinner: true},
    // medical: {medicineName: "test", lastMedicineDate: "2021-10-20T04:00:00.000Z", nextVetApt: "2021-10-20T04:00:00.000Z"},
    // groomed:""
}
    const [petTrackerInfo, setPetTrackerInfo] = useState(initValue)
    const [dayTimes, setDayTimes] = useState(hours())







    return (<div>
   
        <form>

<section>AM</section>
<div className="bathroom-am-div">
{dayTimes.map(time=><AM {...time} type={'bathroom'} key={time.id }/>)}
</div>
<section>PM</section>
<div className="bathroom-pm-div">
{dayTimes.map(time=><PM {...time} type={'bathroom'} key={time.id} />)}
</div>
{/* <label>Ate Breakfast, Lunch or Dinner</label>
<section>AM</section>
<div className="food-am-div">
{dayTimes.map(time=><AM {...time} type={'food'} key={time.id }/>)}
</div>
<section>PM</section>
<div className="food-pm-div">
{dayTimes.map(time=><PM {...time} type={'food'} key={time.id} />)}
</div>
<input/>
<label>Medical</label>
<input/>
<label>Groomed last</label>
<input/> */}

        </form>
    </div>)
}