import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Individuals from './Pages/Individuals';
import Businesses from './Pages/Businesses';
import SafetyEducation from './Pages/SafetyEducation';

function App() {
  return (
    <>
    <Routes>
       <Route path="/homepage" element={<HomePage />} />
       <Route path="/individuals" element={<Individuals />} />
       <Route path="/businesses" element={<Businesses />} /> 
       <Route path="/SafetyEducation" element={<SafetyEducation />} />  
    </Routes>
 </>

  );
}


export default App;