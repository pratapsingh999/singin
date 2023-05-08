import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Form from './Components/form';
import SignUp from './Components/signupfrom'

function App() {
  return (
<>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<SignUp/>}/>
    <Route  path="/form" element={<Form/>}/>
  </Routes>
</BrowserRouter>

</>
  );
}

export default App;
