import React from 'react';
import SEImage1 from '../../assets/images/SafetyEducation/SEImage1.png';
import SEImage2 from '../../assets/images/SafetyEducation/SEImage2.png';
import SEImage3 from '../../assets/images/SafetyEducation/SEImage3.png';

const SafetyEducationHero = () => {
    return (
        <div className='w-full m-auto pt-[80px]  bg-[#FBFCF5]'>
            <div className='w-full max-w-[1212px] h-[718px] m-auto relative' >
                <h1 className='absolute text-[#083C2F] text-[88px] leading-[105.6px] font-medium left-[167px] top-[71px]'>Learn how</h1>
                <h1 className='absolute text-[#083C2F] text-[88px] leading-[105.6px] font-medium left-[426px] top-[202px]'>to keep</h1>
                <h1 className='absolute text-[#083C2F] text-[88px] leading-[105.6px] font-medium left-[560px] top-[332px]'>your identity safe</h1>
                <p className='absolute text-blackCustom text-[17px] leading-[27.2px] font-normal w-[580px] bottom-[166px] right-[110px] '>
                    At NINAuth, we prioritize your security and privacy. Understanding
                    how to protect your identity is crucial in today's digital world.
                    This page provides essential information and tips to help you
                    navigate identity verification safely.
                </p>
                <img src={SEImage1} className='absolute top-[274px] left-[] w-[224px] h-auto' />
                <img src={SEImage2}  className='absolute top-[] right-[244px] w-[154px]'/>
                <img src={SEImage3} className='absolute w-[88px] h-auto left-[250px] top-[465px]' />
            </div>
        </div>
    );
};

export default SafetyEducationHero;