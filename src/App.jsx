import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Individuals from './Pages/Individuals';
import Businesses from './Pages/Businesses';
import SafetyEducation from './Pages/SafetyEducation';
import OnlineService from './Pages/OnlineServices';
import Developers from './Pages/Developers';


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage />} />
       <Route path="/homepage" element={<HomePage />} />
       <Route path="/individuals" element={<Individuals />} />
       <Route path="/businesses" element={<Businesses />} /> 
       <Route path="/SafetyEducation" element={<SafetyEducation />} />
       <Route path="/OnlineService" element={<OnlineService />} /> 
       <Route path="/Developers" element={<Developers />} />  
    </Routes>
 </>

  );
}


export default App;