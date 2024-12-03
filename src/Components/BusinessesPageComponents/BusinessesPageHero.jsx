import React from 'react';
import BImage1 from '../../assets/images/Businesses/B-Image1.png';

const BusinessesPageHero = () => {
    return (
        <div className='w-full m-auto bg-[#FBFCF5] pt-[110px]'>
            <div className='w-full max-w-[1212px] m-auto'>
                <div className='flex flex-col gap-14'>
                    <div className='flex flex-col gap-8 items-center'>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-center w-full max-w-[823px] text-blackCustom text-[56px] leading-[67.2px] font-medium'>
                                Secure data access for smarter business operations
                            </h1>
                            <p className='text-blackCustom text-center w-full max-w-[823px] text-[17px] leading-[27.2px] font-normal'>
                            NINAuth offers businesses a powerful solution to manage and 
                            secure NIN data access, ensure compliance with regulatory standards, 
                            and protect sensitive information with advanced security protocols.
                            </p>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='w-afull max-w-[896px] m-auto'>
                        <img src={BImage1} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BusinessesPageHero;