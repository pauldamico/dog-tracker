import React,{useState, createContext, useContext, useEffect} from "react";
import { ProfileContext } from "./profileProvider";
export const TrackerContext = createContext()
export  function TrackerContextProvider(props){
    const date = new Date()
    const todaysDate = `${date.getMonth() + 1} ${date.getDate()} ${date.getFullYear()}`
  
const {userAxios} = useContext(ProfileContext)
    const initValue =   {
        bathroomAM:[{n:12}, {n:1},{n:2},{n:3},{n:4},{n:5},{n:6},{n:7},{n:8}, {n:9}, {n:10}, {n:11}],
        bathroomPM:[{n:12}, {n:1},{n:2},{n:3},{n:4},{n:5},{n:6},{n:7},{n:8}, {n:9}, {n:10}, {n:11}],
       treatsAM:[{n:12}, {n:1},{n:2},{n:3},{n:4},{n:5},{n:6},{n:7},{n:8}, {n:9}, {n:10}, {n:11}], 
       treatsPM:[{n:12}, {n:1},{n:2},{n:3},{n:4},{n:5},{n:6},{n:7},{n:8}, {n:9}, {n:10}, {n:11}],
       food: {breakfast:false, lunch: false, dinner: false},
       medical: {medicineName: "", lastMedicineDate: "", nextVetApt: ""},
       groomed:"",
       date:todaysDate
   }

const [trackerInfo, setTrackerInfo] = useState()








  function addTracker (){
    userAxios.post('/api/tracker/add', initValue)
    .then(res=>setTrackerInfo(prev=>[res.data]))
    .catch(err=>()=>{}) 
  }
//// fix
  function updateSelectedTime (timeId, selected, name, trackerId, frontEndName){   
  
    userAxios.put(`/api/tracker/${name}/${timeId}`, {selected})
    .then(res=>{
   
 setTrackerInfo( prev=>prev.map(item=>item._id===trackerId ? {...item, [frontEndName]:item[frontEndName].map(time=>time._id === timeId ? {...time, selected} : {...time})}: {...item} ))

}
    )
    .catch(err=>console.log(err))

  }

    function getTrackerData (){
        userAxios.get('/api/tracker')
        .then(res=>{setTrackerInfo(prev=>res.data)      
        })
        .catch(err=>console.log(err))        
    }










return (<TrackerContext.Provider value={{updateSelectedTime, initValue, trackerInfo, addTracker, getTrackerData}}>
{props.children}
</TrackerContext.Provider>)

}


    // function hours (){
    //     const times = []
    //     for(let i = 1; i<13; i++){
    //         times.push({time:i, selected:false, id:nanoid() })  
    //             }          
    //           return times
    // }


    
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