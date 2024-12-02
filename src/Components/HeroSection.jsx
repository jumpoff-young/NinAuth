import React from 'react';
import ButtonFill from './ButtonFill';
import heroImage from '../assets/images/hero-image.png';

const HeroSection = () => {
    return (
        <>
            <div className='w-full'>
                <div className='w-[1212px] flex m-auto justify-between items-center'>
                    <div className='flex flex-col gap-12 '>

                        <div className='flex flex-col gap-6 '>

                            <h1 className='w-full max-w-[539px] text-[56px] font-medium leading-[67.2px] '>
                                Take charge of your privacy with outperforming authentication
                            </h1>

                        <p className='text-[17px] font-normal leading-[27.2px] w-full max-w-[500px] '>
                            You can use NINAuth for secure identification and digital signatures
                            with thousands of companies and authorities. Stay informed about which
                            organisations have accessed your NIN, giving you complete control over
                            your privacy and enhancing your security.
                        </p>

                        </div>
                        <ButtonFill label="Learn more about NINAuth"/>

                    </div>

                    <div>
                        <img src={heroImage} alt='hero-section-image' className='w-[593px] h-[616px]' />
                    </div>
                </div>

            </div>
        </>
    );
};

export default HeroSection;