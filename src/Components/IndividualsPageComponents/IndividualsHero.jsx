import React from 'react';
import DownloadLinks from '../DownloadLinks';
import HeroImage from '../../assets/images/Individuals/HeroImage.png';


const IndividualsHero = () => {
    return (
        <div className='w-full py-[52px] m-auto bg-[#FBFCF5]'>
            <div className='w-full max-w-[1212px] m-auto flex justify-between items-center'>
                <div className='flex flex-col gap-10'>
                    <h1 className='text-[56px] leading-[67.2px] font-medium w-full max-w-[539px]'> Your digital Identity at your fingertips <br /> Download Now </h1>
                    <DownloadLinks />
                </div>
                <div className='w-[593px] h-[618px] object-contain'>
                    <img src={HeroImage} className='object-contain' />
                </div>
            </div>
        </div>
    );
};

export default IndividualsHero;