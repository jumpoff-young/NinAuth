import React, { useState, useEffect } from 'react';
import ButtonFill from './ButtonFill';
import heroImage1 from '../assets/images/hero-image.png'; 
import heroImage2 from '../assets/images/hero-image2.png'; 
import heroImage3 from '../assets/images/hero-image3.png'; 

const HeroSection = () => {
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    
    const images = [heroImage1, heroImage2, heroImage3];

    useEffect(() => {
        
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); 
        }, 5000);

        
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="w-full px-4 sm:px-8 lg:px-0">
            <div className="lg:max-w-[84.17%] mx-auto flex flex-col lg:flex-row justify-between items-center">
                {/* Text Section */}
                <div className="flex flex-col gap-8 text-center lg:text-left lg:gap-12">
                    <div className="flex flex-col gap-4 lg:gap-6 lg:max-w-[639px]">
                        <h1 className="text-[32px] text-left sm:text-[42px] sm:leading-[50.4px] sm:max-w-[396px] sm:text-left lg:text-[48px] lg:leading-[60px] lg:text-left lg:max-w-[600px] font-medium leading-[50.4px] max-w-full">
                            Take charge of your privacy with outperforming authentication
                        </h1>
                        <p className="w-full max-w-full text-[17px] leading-[27.2px] font-normal lg:max-w-[639px] text-left sm:text-[17px]">
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
                        src={images[currentImageIndex]} 
                        alt="hero-section-image"
                        className="w-full max-w-full h-auto sm:max-w-[400px] lg:max-w-[427.99px] lg:h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;