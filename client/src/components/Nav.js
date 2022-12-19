import React, {useContext, useEffect} from 'react'
import { TrackerContext } from '../context/trackerProvider'
import { UserContext } from '../context/userProvider'
import {Link} from 'react-router-dom'

export default function Nav (){

    const {getTrackerData, addTracker, token} = useContext(TrackerContext,UserContext)

    return (<div>

<Link to='/profile'>Profile</Link>
<Link  to='/tracker'>Tracker</Link>
        
    </div>)
}