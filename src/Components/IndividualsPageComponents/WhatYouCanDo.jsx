import React from 'react';
import Image2 from '../../assets/images/Individuals/Image 2.png';

const WhatYouCanDo = () => {
    return (
        <div className='w-full m-auto py-[112px]'>
            <div className='w-full px-6 lg:max-w-[1212px] md:max-w-[1212px] m-auto flex flex-col items-center gap-12'>
                <h1 className='text-[34px] sm:text-[34px] lg:text-[40px] md:text-[40px] 
                leading[47.6px] sm:leading[47.6px] md:leading[56px] lg:leading[56px] text-blackCustom text-center font-medium'>
                    What you can do with NINAuth</h1>
                <div className='flex flex-col sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row gap-[97px] items-center'>
                    <div className='w-full max-w-[580px] h-auto relative'>
                        <img src={Image2} object-cover />
                    </div>
                    <div className='flex flex-col gap-[96px]'>
                        <div className='flex flex-col pl-[33px] border-l-2 border-blackCustom gap-[18px] max-w-[451px]'>
                            <h3 className='text-[28px] leading-[39.2px] font-medium '>Give Consent</h3>
                            <p className='text-[17px] font-normal leading-[27.2px]'>Take control of your personal information by granting permission for organizations
                                to access your NIN data. With NINAuth, you decide who can view your details,
                                ensuring your privacy is respected while you engage with various services.
                            </p>
                        </div>
                        <div className='flex flex-col pl-[33px] border-l-2 border-blackCustom gap-[18px] max-w-[451px] opacity-50'>
                            <h3 className='text-[28px] leading-[39.2px] font-medium '>Authenticate</h3>
                            <p>Verify your identity quickly and securely with NINAuth. Our advanced authentication
                                 process allows you to confirm who you are without the hassle of traditional methods,
                                  making online transactions and interactions smooth and efficient.
                            </p>
                        </div>
                        <div className='flex flex-col pl-[33px] border-l-2 border-blackCustom gap-[18px] max-w-[451px] opacity-50'>
                            <h3 className='text-[28px] leading-[39.2px] font-medium '>Sign in to government services</h3>
                            <p>
                                Access a wide range of government services with a single sign-on using NINAuth. 
                                Whether you're applying for a passport, filing taxes, or checking vehicle registration, 
                                enjoy a streamlined login experience that saves you time and enhances your security.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatYouCanDo;