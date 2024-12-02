import React from 'react';
import SectiontwoImage from '../assets/images/sectiontwo-image.png';

const Sectiontwo = () => {
    return (
        <>
            <div className='w-full'>
                <div className='flex w-[1096px] m-auto justify-between items-center'>
                    <img src={SectiontwoImage} alt='section two image' className=' w-auto max-w-[473px] h-auto max-h-[402px]' />
                    <div className='flex flex-col gap-6'>
                        <h2 className='font-medium text-[40px] leading-[56px] text-blackCustom w-auto max-w-[472px]'>
                            Making digital identity secure for all
                        </h2>
                        <p className='font-normal text-blackCustom text-[17px] leading-[27.2px] w-auto max-w-[420px]'>
                            Securely identify yourself with a network of
                            trusted companies and government authorities,
                            ensuring your personal information is always protected.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sectiontwo;