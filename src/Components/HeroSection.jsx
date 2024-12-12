import React from 'react';
import ButtonFill from './ButtonFill';
import heroImage from '../assets/images/hero-image.png';

const HeroSection = () => {
    return (
        <div className="w-full px-4 sm:px-8 lg:px-0">
            <div className=" lg:max-w-[1212px] mx-auto flex flex-col lg:flex-row justify-between items-center">
                {/* Text Section */}
                <div className="flex flex-col gap-8 text-center lg:text-left lg:gap-12">
                    <div className="flex flex-col gap-4 lg:gap-6">
                        <h1 className="text-[32px] text-left sm:text-[42px] sm:leading-[50.4px] sm:max-w-[396px] sm:text-left lg:text-[56px] lg:leading-[67.2px] lg:text-left lg:max-w-[539px] font-medium leading-[50.4px] max-w-full ">
                            Take charge of your privacy with outperforming authentication
                        </h1>
                        <p className="text-[17px] leading-[27.2px] font-normal max-w-[398px] text-left sm:text-[17px]  lg:max-w-[500px]">
                            You can use NINAuth for secure identification and digital signatures
                            with thousands of companies and authorities. Stay informed about which
                            organisations have accessed your NIN, giving you complete control over
                            your privacy and enhancing your security.
                        </p>
                    </div>
                    <ButtonFill label="Learn more about NINAuth" />
                </div>

                {/* Image Section */}
                <div className="mt-8 lg:mt-0">
                    <img
                        src={heroImage}
                        alt="hero-section-image"
                        className="w-full max-w-full sm:max-w-[400px] lg:max-w-[593px] lg:h-[616px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;