import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import OnlineServiceHero from '../Components/OnlineServiceComponent/OnlineServiceHero';
import OnlineServiceFeatures from '../Components/OnlineServiceComponent/OnlineServiceFeatures';

const OnlineService = () => {
    return (
        <div>
            <Navbar />
            <OnlineServiceHero />
            <OnlineServiceFeatures />
            <Footer />
        </div>
    );
};

export default OnlineService;