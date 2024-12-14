import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ContactUs = () => {
    return (
        <>
            <Navbar />

            <div className='Hero-Section bg-[#FBFCF5] w-full max-w-full m-auto pt-[71px] pb-[73px] lg:pt-[100px] lg:pb-[68px] md:pt-[100px] md:pb-[68px] '>
                <div className='w-full flex flex-col gap-6 max-w-full m-auto lg:max-w-[53.75%] md:max-w-[53.75%]'>
                    <h1 className='text-[42px] lg:text-[56px] md:text-[56px] leading-[50.4px] lg:leading-[67.2px] md:leading-[67.2px] text-center font-medium'>
                        Help is here when you need it
                    </h1>
                    <p className='text-[17px] leading-[27.2px] font-normal text-center'>
                    Whether you have questions, need assistance, or want to provide feedback, 
                    our dedicated team is ready to support you. Reach out anytime, 
                    and let us help you navigate your NINAuth experience.
                    </p>
                </div>
            </div>

            <div className='Cookies-Contents w-full max-w-full m-auto pt-[71px] pb-[73px] lg:pt-[100px] px-6 lg:pb-[68px] md:pt-[100px] md:pb-[68px] '>
               
            </div>

            <Footer />

        </>
    );
};

export default ContactUs;