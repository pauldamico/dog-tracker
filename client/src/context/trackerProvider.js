import React,{useState, createContext, useContext} from "react";
import {nanoid} from 'nanoid'
import { ProfileContext } from "./profileProvider";
export const TrackerContext = createContext()
export  function TrackerContextProvider(props){
    const date = new Date()
    const todaysDate = `${date.getMonth() + 1} ${date.getDate()} ${date.getFullYear()}`
    console.log(todaysDate)
const {userAxios} = useContext(ProfileContext)
    const initValue =   {
        bathroomAM:[],
        bathroomPM:[],
       treatsAM:[], 
       treatsPM:[],
       food: {breakfast:false, lunch: false, dinner: false},
       medical: {medicineName: "", lastMedicineDate: "", nextVetApt: ""},
       groomed:"",
       date:todaysDate
   }

const [trackerInfo, setTrackerInfo] = useState([])

    function hours (){
        const times = []
        for(let i = 1; i<13; i++){
            times.push({time:i, selected:false, id:nanoid() })  
                }          
              return times
    }

  function addTracker (){
    userAxios.post('/api/tracker/add')
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
  }


    function submitBathroomTime (selectedTimes, trackerId){        
        userAxios.post(`/api/add/bathroom/${trackerId}`, selectedTimes)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
console.log(selectedTimes)
    }

    function submitTreatTime (selectedTimes, trackerId){
        userAxios.post(`/api/add/treat/${trackerId}`, selectedTimes)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
console.log(selectedTimes)
    }

    function getTrackerData (){
        userAxios.get('/api/tracker')
        .then(res=>setTrackerInfo(prev=>[res.data]))
        .catch(err=>console.log(err))
    }
console.log(trackerInfo)

return (<TrackerContext.Provider value={{addTracker, hours, getTrackerData, submitBathroomTime, submitTreatTime}}>
{props.children}
</TrackerContext.Provider>)

}