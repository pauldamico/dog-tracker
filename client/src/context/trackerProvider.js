import React,{useState, createContext, useContext} from "react";
import {nanoid} from 'nanoid'
import { ProfileContext } from "./profileProvider";
export const TrackerContext = createContext()
export  function TrackerContextProvider(props){
const {userAxios} = useContext(ProfileContext)
    const initValue =   {
        bathroom:{am: [],pm: [] },
       treats: {am: [],pm: []},
       food: {breakfast:false, lunch: false, dinner: false},
       medical: {medicineName: "", lastMedicineDate: "", nextVetApt: ""},
       groomed:""
   }

const [trackerInfo, setTrackerInfo] = useState(initValue)

    function hours (){
        const times = []
        for(let i = 1; i<13; i++){
            times.push({time:i, selected:false, id:nanoid() })  
                }          
              return times
    }

    function getTrackerData (){
        userAxios.get('/api/tracker')
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }


return (<TrackerContext.Provider value={{hours, getTrackerData}}>
{props.children}
</TrackerContext.Provider>)

}