import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Cookies = () => {
    return (
        <>
            <Navbar />

            <div className='Hero-Section bg-[#FBFCF5] w-full max-w-full m-auto pt-[71px] pb-[73px] lg:pt-[100px] lg:pb-[68px] md:pt-[100px] md:pb-[68px] '>
                <div className='w-full flex flex-col gap-6'>
                    <h1 className='text-[42px] lg:text-[56px] md:text-[56px] leading-[50.4px] lg:leading-[67.2px] md:leading-[67.2px] text-center font-medium'>
                        Cookie Policy
                    </h1>
                    <p className='text-[17px] leading-[27.2px] font-normal text-center'>
                        Last updated:  22nd November, 2024
                    </p>
                </div>
            </div>

            <div className='Cookies-Contents w-full max-w-full m-auto pt-[71px] pb-[73px] lg:pt-[100px] px-6 lg:pb-[68px] md:pt-[100px] md:pb-[68px] '>
                <div className='w-full max-w-full m-auto lg:max-w-[40.15%] md:max-w-[37.15%] flex flex-col gap-12'>
                    <div className='w-full max-w-full flex flex-col gap-4'>
                        <h4 className='text-[24px] leading-[33.6px] font-medium'>
                            Use of Cookies
                        </h4>
                        <p className='text-[17px] font-normal leading-[30.6px]'>
                            NINAuth uses cookies to improve user experience, enhance security, and analyze service usage.
                        </p>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <h4 className='text-[24px] leading-[33.6px] font-medium'>
                            Use of Cookies
                        </h4>
                        <ul className='list-disc flex flex-col gap-4 pl-4'>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                <span className='font-semibold'>Essential Cookies:</span> Required for basic functionality, such as account creation and login.
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                <span className='font-semibold'>Performance Cookies:</span>  Help us understand system performance and usage trends. 
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                <span className='font-semibold'> Security Cookies:</span>  Protect against fraudulent activity and unauthorized access.  
                            </li>
                        </ul>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <h4 className='text-[24px] leading-[33.6px] font-medium'>
                            Managing Cookies
                        </h4>
                        <p className='text-[17px] font-normal leading-[30.6px]'>
                        You can adjust cookie settings via your browser. Disabling essential cookies may impact system usability.
                        </p>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <h4 className='text-[24px] leading-[33.6px] font-medium'>
                        Third-Party Cookies
                        </h4>
                        <p className='text-[17px] font-normal leading-[30.6px]'>
                        Certain third-party tools may place cookies to assist with analytics and functionality under strict privacy agreements.
                        </p>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <h4 className='text-[24px] leading-[33.6px] font-medium'>
                        Policy Updates
                        </h4>
                        <p className='text-[17px] font-normal leading-[30.6px]'>
                        We may update our Cookie Policy periodically. Notifications will be provided for significant changes.
                        </p>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <h4 className='text-[24px] leading-[33.6px] font-medium'>
                        Contact Us
                        </h4>
                        <p className='text-[17px] font-normal leading-[30.6px]'>
                        For questions about our use of cookies, contact us via mail at <span className='text-[#008643]'>nimccustomercare@nimc.gov.ng. </span></p>
                    </div>
                    
                </div>
            </div>

            <Footer />

        </>
    );
};

export default Cookies;