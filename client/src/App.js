import './App.css';
import React, {useContext} from 'react';
import Nav from './components/Nav';
import ProtectedRoute from './components/ProtectedRoute';
import Auth from './components/Auth.js';
import TrackerList from './components/tracker/TrackerList.js'
import DogProfile from './components/profile/DogProfile.js'
import { UserContext } from './context/userProvider';
import {Navigate, Route, Routes} from 'react-router-dom'

function App() {

const {token} = useContext(UserContext)


  return (
    <div className="App">




<Nav/>
<Routes>
  <Route path ='/' element={token ? <Navigate to='/tracker'/> : <Navigate to='/login'/>}/>
<Route path='/login' element={<Auth/>}/>
<Route path='/profile' element={<ProtectedRoute token={token} loc="/"><DogProfile/></ProtectedRoute>}/>
<Route path='/tracker' element={<ProtectedRoute token={token} loc="/"><TrackerList/></ProtectedRoute>}/>

</Routes>





    </div>
  );
}

export default App;
