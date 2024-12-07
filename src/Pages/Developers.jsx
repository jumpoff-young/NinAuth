import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DevelopersHero from '../Components/Developers/DevelopersHero';
import DeveloperFeatures from '../Components/Developers/DeveloperFeatures';

const Developers = () => {
    return (
        <>
            <Navbar />
            <DevelopersHero />
            <DeveloperFeatures />
            <Footer />
        </>
    );
};

export default Developers;