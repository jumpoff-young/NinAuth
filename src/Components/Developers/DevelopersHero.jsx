import React from 'react';
import ButtonFill from '../ButtonFill';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";


const DevelopersHero = () => {
    return (
        <div className='w-full pt-[111px] pb-[53px] m-auto bg-[rgb(251,252,245)]'>
            <div className='w-full max-w-[1212px] m-auto flex flex-col gap-8 justify-between items-center'>
                <div className='flex flex-col gap-10'>
                    <h1 className='text-[56px] text-center leading-[67.2px] font-medium w-full max-w-[823px]'>

                        Empower your applications with protected NIN integration

                    </h1>
                    <p className='text-[17px] text-center text-blackCustom font-normal leading-[27.2px] w-[823px]'>
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