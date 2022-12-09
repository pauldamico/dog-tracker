import './App.css';
import React, {useContext} from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import Auth from './components/Auth.js';
import Tracker from './components/Tracker.js'
import DogProfile from './components/DogProfile.js'
import { UserContext } from './context/userProvider';
import {Navigate, Route, Routes} from 'react-router-dom'

function App() {

const {token} = useContext(UserContext)

console.log(token)
  return (
    <div className="App">





<Routes>
  <Route path ='/' element={token ? <Navigate to='/profile'/> : <Navigate to='/login'/>}/>
<Route path='/login' element={<Auth/>}/>
<Route path='/profile' element={<ProtectedRoute token={token} loc="/"><DogProfile/></ProtectedRoute>}/>
<Route path='/tracker' element={<ProtectedRoute token={token} loc="/"><Tracker/></ProtectedRoute>}/>

</Routes>





    </div>
  );
}

export default App;
