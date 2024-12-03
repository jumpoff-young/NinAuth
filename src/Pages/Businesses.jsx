import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BusinessesPageHero from '../Components/BusinessesPageComponents/BusinessesPageHero';
import BusinessesPageFeatures from '../Components/BusinessesPageComponents/BusinessesPageFeatures';
import BusinessesPageBenefits from '../Components/BusinessesPageComponents/BusinessesPageBenefits';
import BusinessesApiIntegration from '../Components/BusinessesPageComponents/BusinessesApiIntegration';

const Businesses = () => {
    return(
        <div>
            <Navbar />
            <BusinessesPageHero />
            <BusinessesPageFeatures />
            <BusinessesPageBenefits />
            <BusinessesApiIntegration />
            <Footer />
            
        </div>
    );
};

export default Businesses;