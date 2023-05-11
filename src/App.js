import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Form from './Components/form';
import SignUp from './Components/signupfrom'
// import Navbar from './Components/components1/navbar'
// import Sidebar from './Components/components1/sidebar'
// import Dashboard from './components1/dashboard'
import Navbar from './components1/navbar'

// import Navbar from './Components2/navbar'

import Message from './pages/message'
import Gallery from './pages/gallery'
import Addphoto from './pages/addphoto'
import History from './pages/history'
import Schedule from './pages/schedule'
import Explore from './pages/explore'

function App() {
  return (
<>
<BrowserRouter>
  <Routes>
    {/* <Route path="/" element={<SignUp/>}/>
    <Route  path="/form" element={<Form/>}/> */}
    <Route path="/signup" element={<SignUp/>}/>
    <Route  path="/signin" element={<Form/>}/>
    <Route path="/" element={<Navbar/>}/>
    {/* <Route path="/" element={<Dashboard/>}/> */}

    <Route path="/message" element={<Message/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/addphoto" element={<Addphoto/>}/>
    <Route path="/history" element={<History/>}/>
    <Route path="/schedule" element={<Schedule/>}/>
    <Route path="/explore" element={<Explore/>}/>
  </Routes>
</BrowserRouter>

</>
  );
}

export default App;
