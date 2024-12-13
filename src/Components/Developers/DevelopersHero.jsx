import React from 'react';
import ButtonFill from '../ButtonFill';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";


const DevelopersHero = () => {
    return (
        <div className='w-screen pt-8 md:pt-[111px] lg:pt-[111px] px-6 pb-[53px] m-auto bg-[rgb(251,252,245)]'>
            <div className='w-full max-w-screen lg:max-w-[84.17%] m-auto flex flex-col gap-8 justify-between items-start lg:items-center'>
                <div className='flex flex-col gap-10 w-full items-center max-w-screen'>
                    <h1 className='text-[42px] md:text-[56px] lg:text-[56px] text-left lg:text-center md:text-center leading-[50.4px] md:leading-[67.2px] lg:leading-[67.2px] font-medium w-full max-w-screen lg:max-w-[57.15%]'>

                        Empower your applications with protected NIN integration

                    </h1>
                    <p className='text-[17px] text-left md:text-left lg:text-center text-blackCustom font-normal leading-[27.2px] w-full max-w-screen lg:w-[57.15%]'>
                        API for secure, compliant integration of National Identification Number (NIN)
                        data into applications across platforms, enhancing data management, security, and user trust.
                    </p>
                </div>

                <NavLink to="/ApiDoc"><ButtonFill label="Read API documentation" /></NavLink>

            </div>
        </div>
    );
};

export default DevelopersHero;