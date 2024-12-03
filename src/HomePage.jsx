import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Sectiontwo from './Components/Sectiontwo';
import Benefits from './Components/Benefits';
import Features from './Components/Features';
import AuthenticationMethodsSection from './Components/AuthenticationMethodsSection';
import DownloadApp from './Components/DownloadApp';
import Footer from './Components/Footer';



function LandingPage() {
  return (
    <div className='flex flex-col gap-[92px]'>
      <div className='flex flex-col gap-[52px] bg-[#FBFCF5] pb-[52px]'>
        <Navbar />
        <HeroSection />
      </div>
      <div>
        <Sectiontwo />
      </div>
      <div>
      <Benefits />
      <Features />
      <AuthenticationMethodsSection />
      <DownloadApp />
      <Footer />
    </div>
    </div>

    

  );
}

export default LandingPage;