import React,{useState, createContext, useContext} from "react";
import {nanoid} from 'nanoid'
import { ProfileContext } from "./profileProvider";
export const TrackerContext = createContext()
export  function TrackerContextProvider(props){
    const date = new Date()
    const todaysDate = `${date.getMonth() + 1} ${date.getDate()} ${date.getFullYear()}`
  
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

    // function hours (){
    //     const times = []
    //     for(let i = 1; i<13; i++){
    //         times.push({time:i, selected:false, id:nanoid() })  
    //             }          
    //           return times
    // }

  function addTracker (){
    userAxios.post('/api/tracker/add')
    .then(res=>setTrackerInfo(prev=>[res.data]))
    .catch(err=>console.log(err))
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
        .then(res=>setTrackerInfo(prev=>[...res.data]))
        .catch(err=>console.log(err))
        console.log(trackerInfo)
    }


return (<TrackerContext.Provider value={{trackerInfo, addTracker, getTrackerData}}>
{props.children}
</TrackerContext.Provider>)

}