import React, {useContext} from 'react'
import { TrackerContext } from '../context/trackerProvider'
import {Link} from 'react-router-dom'

export default function Nav (){

    const {addTracker} = useContext(TrackerContext)
    return (<div>

<Link to='/profile'>Profile</Link>
<Link onClick={addTracker} to='/tracker'>Tracker</Link>
        
    </div>)
}