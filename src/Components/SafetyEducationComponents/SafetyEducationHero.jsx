import React from 'react';
import SEImage1 from '../../assets/images/SafetyEducation/SEImage1.png';
import SEImage2 from '../../assets/images/SafetyEducation/SEImage2.png';
import SEImage3 from '../../assets/images/SafetyEducation/SEImage3.png';

const SafetyEducationHero = () => {
    return (
        <div className='w-full m-auto lg:pt-[80px]   bg-[#FBFCF5]'>
            <div className='w-full max-w-screen px-4 lg:max-w-[1212px] h-[611px] lg:h-[718px] m-auto relative' >
                <h1 className='absolute text-[#083C2F] text-[42px] sm:text-[42px] md:text-[88px] lg:text-[88px] leading-[105.6px] font-medium left-[24px] md:left-[167px] lg:left-[167px] top-[71px]'>Learn how</h1>
                <h1 className='absolute text-[#083C2F] text-[42px] sm:text-[42px] md:text-[88px] lg:text-[88px] leading-[105.6px] font-medium left-[171px] md:left-[426px] lg:left-[426px] top-[147px] md:top-[202px] lg:top-[202px]'>to keep</h1>
                <h1 className='absolute text-[#083C2F] text-[42px] sm:text-[42px] md:text-[88px] lg:text-[88px] leading-[105.6px] font-medium left-[98px] md:left-[560px] lg:left-[560px] top-[220px] md:top-[332px] lg:top-[332px]'>your identity safe</h1>
                <p className='absolute text-blackCustom text-[17px] leading-[27.2px] font-normal max-w-screen md:w-[580px] lg:w-[580px] top-[320px] md:top-[470px] lg:top-[470px] left-[24px] md:left-[695px] lg:left-[695px] '>
                    At NINAuth, we prioritize your security and privacy. Understanding
                    how to protect your identity is crucial in today's digital world.
                    This page provides essential information and tips to help you
                    navigate identity verification safely.
                </p>
                <img src={SEImage1} className='absolute top-[164.42px] md:top-[274px] lg:top-[274px] left-[24px] w-[99.61px] sm:w-[91.69x] md:w-[224px] lg:w-[224px] h-auto' />
                <img src={SEImage2}  className='absolute top-[0] right-[24px] md:right-[244px] lg:right-[244px] w-[112px] sm:w-[112px] md:w-[154px] lg:w-[154px]'/>
                <img src={SEImage3} className='absolute w-[88px] h-auto top-[485px] lg:left-[250px] md:left-[250px] md:top-[465px] lg:top-[465px]' />
            </div>
        </div>
    );
};

export default SafetyEducationHero;