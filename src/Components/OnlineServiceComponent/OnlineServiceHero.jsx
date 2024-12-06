import React from 'react';
import HeroImage from '../../assets/images/OnlineServices/HeroImage.png';


const OnlineServiceHero = () => {
    return (
        <div className='w-full pt-[111px] pb-[53px] m-auto bg-[#FBFCF5]'>
            <div className='w-full max-w-[1212px] m-auto flex justify-between items-center'>
                <div className='flex flex-col gap-10'>
                    <h1 className='text-[56px] leading-[67.2px] font-medium w-full max-w-[539px]'> Government services you can access with NINAuth</h1>
                    <p className='text-[17px] text-blackCustom font-normal leading-[27.2px] w-[539px]'>
                        Find government online services you can access with NINAuth,
                        and the minimum identity strength for each service.
                    </p>
                </div>
                <div className='w-[497px] h-auto object-contain'>
                    <img src={HeroImage} className='object-contain' />
                </div>
            </div>
        </div>
    );
};

export default OnlineServiceHero;