import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Footer from '../Components/Footer';
import ApiDocNavbar from '../Components/ApiDoc/ApiDocNavbar';
import ApiDocBody from '../Components/ApiDoc/ApiDocBody';
import ApiDocMobileSideNav from '../Components/ApiDoc/ApiDocMobileSideNav';


const ApiDoc = () => {
    return (
        <div className='bg-[#FBFCF5]'>
            <ApiDocNavbar />
            
            <ApiDocBody />
            <Footer />
        </div>
    );
};

export default ApiDoc;