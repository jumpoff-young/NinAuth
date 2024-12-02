import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Individuals from './Pages/Individuals';

function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/individuals" element={<Individuals />} />  
    </Routes>
 </>

  );
}


export default App;