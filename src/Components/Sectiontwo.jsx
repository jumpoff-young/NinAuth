import React from 'react';
import SectiontwoImage from '../assets/images/sectiontwo-image.png';

const Sectiontwo = () => {
    return (
        <div className="w-full px-4 sm:px-8 lg:px-0">
            <div className="flex flex-col-reverse lg:flex-row w-full max-w-[1096px] mx-auto justify-between items-center gap-8 lg:gap-12">
                {/* Image Section */}
                <img
                    src={SectiontwoImage}
                    alt="section two image"
                    className="w-full max-w-[fullpx] sm:max-w-[400px] lg:max-w-[473px] h-auto max-h-[402px]"
                />

                {/* Text Section */}
                <div className="flex flex-col gap-4 lg:gap-6 text-center lg:text-left">
                    <h2 className="font-medium text-[34px] w-full max-w-[398px] text-left leading-[47.6px] sm:text-[32px] lg:text-[40px] lg:leading-[56px] text-blackCustom lg:max-w-[472px]">
                        Making digital identity secure for all
                    </h2>
                    <p className="text-blackCustom font-normal text-[17px] leading-[27.2px] max-w-[350px] text-left sm:text-[17px]  lg:max-w-[420px]">
                        Securely identify yourself with a network of
                        trusted companies and government authorities,
                        ensuring your personal information is always protected.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sectiontwo;