import React,{useState, createContext, useContext, useEffect} from "react";
import { ProfileContext } from "./profileProvider";
export const TrackerContext = createContext()
export  function TrackerContextProvider(props){


    const date = new Date()
    const todaysDate = `${date.getMonth() + 1} ${date.getDate()} ${date.getFullYear()}`
    const d = new Date()
const time =d.getTime()
 
const {userAxios} = useContext(ProfileContext)
    const initValue =   {
        bathroomAM:[{n:12}, {n:1},{n:2},{n:3},{n:4},{n:5},{n:6},{n:7},{n:8}, {n:9}, {n:10}, {n:11}],
        bathroomPM:[{n:12}, {n:1},{n:2},{n:3},{n:4},{n:5},{n:6},{n:7},{n:8}, {n:9}, {n:10}, {n:11}],
       treatsAM:[{n:12}, {n:1},{n:2},{n:3},{n:4},{n:5},{n:6},{n:7},{n:8}, {n:9}, {n:10}, {n:11}], 
       treatsPM:[{n:12}, {n:1},{n:2},{n:3},{n:4},{n:5},{n:6},{n:7},{n:8}, {n:9}, {n:10}, {n:11}],
       fedBreakfast: false,
       fedLunch:false,
       fedDinner:false,
       medicalNotes:"",
       vetApt:"",
       groomed:"",
       date:todaysDate,
       dateOrder:time      
   }

const [trackerInfo, setTrackerInfo] = useState([""])
const [loading, setLoading] = useState(false)


  function addTracker (){


    userAxios.post('https://backend-lw9q.onrender.com/api/tracker/add', initValue)
    .then(res=>setTrackerInfo(prev=>[res.data]))  
    .catch(err=>()=>{}) 
  }

  function addNewDay (){
  
    console.log("test")
       userAxios.post('https://backend-lw9q.onrender.com/api/tracker/add', initValue)
       .then(res=>setTrackerInfo(prev=>[...prev, res.data].reverse()))
       .catch(err=>()=>{}) 
     }

  function updateSelectedTime (timeId, selected, name, trackerId, frontEndName){   // dont need to reverse this (its only for times)  
    userAxios.put(`https://backend-lw9q.onrender.com/api/tracker/${name}/${timeId}`, {selected})
    .then(res=>{
    setTrackerInfo( prev=>prev.map(item=>item._id===trackerId ? {...item, [frontEndName]:item[frontEndName].map(time=>time._id === timeId ? {...time, selected} : {...time})}: {...item} ))

}
    )
    .catch(err=>console.log(err))

  }

 

    function getTrackerData (){    
      setLoading(true)  
        userAxios.get('https://backend-lw9q.onrender.com/api/tracker')
        .then(res=>{           
          setTrackerInfo(prev=>res.data.sort((a, b)=>b.dateOrder - a.dateOrder))  //changed this last added .sort    
        })
        .then(res=>setLoading(false))
        .catch(err=>console.log(err))        
    }
    
function updateFedPet (fedValue, trackerId, fedName){
  userAxios.put(`https://backend-lw9q.onrender.com/api/tracker/update/${trackerId}`, {[fedName]:fedValue,})
  .then(res=>{setTrackerInfo(prev=>prev.map(item=>item._id === trackerId ? {...item, [fedName]:res.data[fedName]} : {...item}))
})
  .catch(err=>console.log(err))
}

function submitGrooming (date, trackerId){
 
  userAxios.put(`https://backend-lw9q.onrender.com/api/tracker/update/${trackerId}`, {groomed:date})
  .then(res=>{setTrackerInfo(prev=>prev.map(item=>item._id === trackerId ? {...item, groomed:res.data.groomed} : {...item}))
})
  .catch(err=>console.log(err))
  console.log(trackerInfo)
}

function submitMedical (medicalInfo, trackerId){
  userAxios.put(`https://backend-lw9q.onrender.com/api/tracker/update/${trackerId}`, {...medicalInfo})
  .then(res=>{setTrackerInfo(prev=>prev.map(item=>item._id === trackerId ? {...item, medicalNotes:res.data.medicalNotes, vetApt:res.data.vetApt} : {...item}))
})
  .catch(err=>console.log(err))
  console.log(trackerInfo)
}






return (<TrackerContext.Provider value={{submitMedical,addNewDay, loading, updateFedPet, updateSelectedTime, getTrackerData, addTracker,todaysDate,  initValue, trackerInfo, submitGrooming}}>
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
    //     // userAxios.post(`https://backend-lw9q.onrender.com/api/tracker/add/bathroom/${trackerId}`, selectedTimes)
    //     // .then(res=>setTrackerInfo(prev=>prev.map(tracker=>trackerId === tracker._id ? {...tracker, bathroomAM:res.data.bathroomAM[0], bathroomPM:res.data.bathroomPM[0]} : {...tracker})))
    //     // .catch(err=>console.log(err))

    // }

    // function submitTreatTime (selectedTimes, trackerId){     
    //     userAxios.post(`/api/tracker/add/treat/${trackerId}`, selectedTimes)
    //     .then(res=>setTrackerInfo(prev=>prev.map(tracker=>trackerId === tracker._id ? {...tracker, treatsAM:res.data.treatsAM[0], treatsPM:res.data.treatsPM[0]} : {...tracker})))
    //     .catch(err=>console.log(err))

    // }