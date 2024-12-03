import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import SafetyEducationHero from '../Components/SafetyEducationComponents/SafetyEducationHero';
import SafetyEducationTabs from '../Components/SafetyEducationComponents/SafetyEducationTabs';

const SafetyEducation = () => {
    return(
        <>
        <Navbar />
        <SafetyEducationHero />
        <SafetyEducationTabs />
        <Footer />
        </>
    );
};

export default SafetyEducation;