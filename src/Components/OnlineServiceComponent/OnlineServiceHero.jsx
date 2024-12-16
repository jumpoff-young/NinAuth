import React from 'react';
import HeroImage from '../../assets/images/OnlineServices/HeroImage.png';


const OnlineServiceHero = () => {
    return (
        <div className='w-screen max-w-screen md:pt-[111px] pt-8 pb-[47px] lg:pt-[111px] md:pb-[53px] lg:pb-[53px] m-auto bg-[#FBFCF5]'>
            <div className='w-full lg:max-w-[84.17%] m-auto flex flex-col md:flex-row lg:flex-row gap-8 lg:gap-0  lg:justify-between items-start'>
                <div className='w-full lg:max-w-[609px] px-6 flex flex-col gap-10 lg:pt-10'>
                    <h1 className='text-[42px] md:text-[56px] lg:text-[56px] leading-[50.4px] md:leading-[67.2px] lg:leading-[67.2px] font-medium w-full '> Government services you can access with NINAuth</h1>
                    <p className='text-[17px] text-blackCustom font-normal leading-[27.2px] w-full '>
                        Find government online services you can access with NINAuth,
                        and the minimum identity strength for each service.
                    </p>
                </div>
                <div className='px-6    '>
                    {/* <p className='text-[17px] text-blackCustom font-normal leading-[27.2px] w-full md:w-[37.43%] lg:w-[37.43%]'>
                        Find government online services you can access with NINAuth,
                        and the minimum identity strength for each service.
                    </p> */}
                    <div className='w-full lg:w-[497px] h-auto object-cover'>
                        <img src={HeroImage} className='object-cover' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnlineServiceHero;