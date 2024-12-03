import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import IndividualsHero from '../Components/IndividualsPageComponents/IndividualsHero';
import WhatYouCanDo from '../Components/IndividualsPageComponents/WhatYouCanDo';
import ConsentStep from '../Components/IndividualsPageComponents/ConsentStep';


const Individuals = () => {
    return(
        <div>
        <Navbar />
        <IndividualsHero />
        <WhatYouCanDo />
        <ConsentStep />
        <Footer />
        </div>
    );
};

export default Individuals;