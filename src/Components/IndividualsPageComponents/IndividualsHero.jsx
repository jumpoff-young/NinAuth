import React from 'react';
import DownloadLinks from '../DownloadLinks';
import HeroImage from '../../assets/images/Individuals/HeroImage.png';


const IndividualsHero = () => {
    return (
        <div className='w-full py-[52px] m-auto bg-[#FBFCF5]'>
            <div className='w-full px-[24px]  lg:max-w-[1212px] m-auto flex flex-col sm:flex-col lg:flex lg:flex-row md:flex md:flex-row gap-8 lg:justify-between md:justify-between items-center'>
                <div className='flex flex-col gap-8 sm:gap-8 lg:gap-10 md:gap-10'>
                    <h1 className='text-[42px] sm:text-[42px] md:text-[56px] lg:text-[56px] leading-[50.4px] 
                    sm:leading-[50.4px] lg:leading-[67.2px] md:leading-[67.2px] font-medium w-full max-w-[398px] sm:max-w-[398px] md:max-w-[539px] lg:max-w-[539px]'>
                        Your digital Identity at your fingertips <br /> Download Now </h1>
                    <DownloadLinks />
                </div>
                <div className='w-[398px] sm:w-[398px] lg:w-[593px] md:w-[593px] h-auto lg:h-[618px] md:h-[618px] object-contain'>
                    <img src={HeroImage} className='object-contain' />
                </div>
            </div>
        </div>
    );
};

export default IndividualsHero;