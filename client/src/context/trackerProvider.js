import React,{useState, createContext, useContext} from "react";
import {nanoid} from 'nanoid'
import { ProfileContext } from "./profileProvider";
export const TrackerContext = createContext()
export  function TrackerContextProvider(props){
    const date = new Date()
    const todaysDate = `${date.getMonth() + 1} ${date.getDate()} ${date.getFullYear()}`
  
const {userAxios} = useContext(ProfileContext)
    const initValue =   {
        bathroomAM:[{n:1},{n:2},{n:3},{n:4},{n:5},{n:6},{n:7},{n:8}, {n:9}, {n:10}, {n:11}, {n:12}],
        bathroomPM:[{n:1},{n:2},{n:3},{n:4},{n:5},{n:6},{n:7},{n:8}, {n:9}, {n:10}, {n:11}, {n:12}],
       treatsAM:[{n:1},{n:2},{n:3},{n:4},{n:5},{n:6},{n:7},{n:8}, {n:9}, {n:10}, {n:11}, {n:12}], 
       treatsPM:[{n:1},{n:2},{n:3},{n:4},{n:5},{n:6},{n:7},{n:8}, {n:9}, {n:10}, {n:11}, {n:12}],
       food: {breakfast:false, lunch: false, dinner: false},
       medical: {medicineName: "", lastMedicineDate: "", nextVetApt: ""},
       groomed:"",
       date:todaysDate
   }

const [trackerInfo, setTrackerInfo] = useState([])

    // function hours (){
    //     const times = []
    //     for(let i = 1; i<13; i++){
    //         times.push({time:i, selected:false, id:nanoid() })  
    //             }          
    //           return times
    // }

  function addTracker (){
    userAxios.post('/api/tracker/add', initValue)
    .then(res=>setTrackerInfo(prev=>[res.data]))
    .catch(err=>()=>{})
 
  }

  function updateSelectedTime (timeId, selected, name){   
    userAxios.put(`/api/tracker/${name}/${timeId}`, {selected})
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
   console.log(timeId)
  }


    // function submitBathroomTime (selectedTimes, trackerId){                
    //     // userAxios.post(`/api/tracker/add/bathroom/${trackerId}`, selectedTimes)
    //     // .then(res=>setTrackerInfo(prev=>prev.map(tracker=>trackerId === tracker._id ? {...tracker, bathroomAM:res.data.bathroomAM[0], bathroomPM:res.data.bathroomPM[0]} : {...tracker})))
    //     // .catch(err=>console.log(err))

    // }

    // function submitTreatTime (selectedTimes, trackerId){     
    //     userAxios.post(`/api/tracker/add/treat/${trackerId}`, selectedTimes)
    //     .then(res=>setTrackerInfo(prev=>prev.map(tracker=>trackerId === tracker._id ? {...tracker, treatsAM:res.data.treatsAM[0], treatsPM:res.data.treatsPM[0]} : {...tracker})))
    //     .catch(err=>console.log(err))

    // }

    function getTrackerData (){
        userAxios.get('/api/tracker')
        .then(res=>setTrackerInfo(prev=>res.data))
        .catch(err=>console.log(err))
        
    }


return (<TrackerContext.Provider value={{updateSelectedTime, trackerInfo, addTracker, getTrackerData}}>
{props.children}
</TrackerContext.Provider>)

}