import React, {useState} from 'react'
import Time from './Time'
export default function TakeDogOut (props){

const {hours, submitTime} = props

    const initValue =    {
     bathroomAM:[],
     bathroomPM:[]

}
    const [bathroomTime, setBathroomTime] = useState(initValue)
    const [dayTimes, setDayTimes] = useState(hours())

    function updateBathroomAM (clickedTime){
        const timeIndex = bathroomTime.bathroomAM.indexOf(clickedTime)        
  const checkIfAdded = bathroomTime.bathroomAM.find(time =>time  === clickedTime)
  checkIfAdded ? bathroomTime.bathroomAMsplice(timeIndex, 1)
: setBathroomTime(prev=>({...prev, bathroomAM:[...prev.bathroomAM, clickedTime]})) 
submitTime(bathroomTime)
    }

    function updateBathroomPM (clickedTime){
        const timeIndex = bathroomTime.bathroomPM.indexOf(clickedTime)        
  const checkIfAdded = bathroomTime.bathroomPM.find(time =>time  === clickedTime)
  checkIfAdded ? bathroomTime.bathroomPMsplice(timeIndex, 1)
: setBathroomTime(prev=>({...prev, bathroomPM:[...prev.bathroomPM, clickedTime]})) 
submitTime(bathroomTime)
          }


 
 

    return (<div>   
        <form>
<section>AM</section>
<div className="am-div">
{dayTimes.map(time=><Time {...time} type={'bathroom'} updateTime={updateBathroomAM} key={time.id }/>)}
</div>
<section>PM</section>
<div className="pm-div">
{dayTimes.map(time=><Time {...time} type={'bathroom'} updateTime={updateBathroomPM} key={time.id} />)}
</div>


        </form>
    </div>)
}

/* <label>Ate Breakfast, Lunch or Dinner</label>
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
<input/> */


    // treats: {
    //     am: [],
    //     pm: []
    // },
    // food: {lunch: false, dinner: true},
    // medical: {medicineName: "test", lastMedicineDate: "2021-10-20T04:00:00.000Z", nextVetApt: "2021-10-20T04:00:00.000Z"},
    // groomed:""