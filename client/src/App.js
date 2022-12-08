import './App.css';
import Auth from './components/Auth.js';
import Tracker from './components/Tracker.js'
import DogProfile from './components/DogProfile.js'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">



<Routes>
<Route path='/login' element={<Auth/>}/>
<Route path='/' element={<DogProfile/>}/>
<Route path='/tracker' element={<Tracker/>}/>
<Route/>


</Routes>


    </div>
  );
}

export default App;
