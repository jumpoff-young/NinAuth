import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Individuals from './Pages/Individuals';
import Businesses from './Pages/Businesses';
import SafetyEducation from './Pages/SafetyEducation';
import OnlineService from './Pages/OnlineServices';
import Developers from './Pages/Developers';
import ApiDoc from './Pages/ApiDoc';
import Cookies from './Pages/Cookies';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsOfService from './Pages/TermsOfService';
import ContactUs from './Pages/ContactUs';
import LogIn from './Pages/LogIn';



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
        <Route path="/ApiDoc" element={<ApiDoc />} />
        <Route path="/Cookies" element={<Cookies />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
    </>

  );
}


export default App;