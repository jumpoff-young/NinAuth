import React from 'react';
import serviceImage from '../assets/images/features/ServiceImage.png';
import image2 from '../assets/images/features/Image2.png';
import FeaturesCards from './FeaturesCards';
import Immigration from '../assets/images/features/icons/immigration.png';
import Ncc from '../assets/images/features/icons/ncc.png';
import RoadSafety from '../assets/images/features/icons/roadSafety.png';
import Firs from '../assets/images/features/icons/firs.png';

const Features = () => {
    return (
        <div className="w-full py-[64px] sm:py-[112px] px-4 sm:px-8">
            <div className="w-full max-w-[1212px] mx-auto flex flex-col gap-12 sm:gap-[64px]">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
                    <h1 className="header-text text-[24px] sm:text-[32px] lg:text-[40px] w-full max-w-[514px] leading-tight">
                        Use NINAuth to securely access government services
                    </h1>
                    <p className="paragraph-text text-[14px] sm:text-[16px] w-full max-w-[580px] leading-relaxed">
                        From immigration processes to tax filings and driver's license renewals,
                        NINAuth provides a convenient single sign-on that ensures your information
                        remains safe. Effortlessly interact with government agencies and embrace
                        the future of digital identity management.
                    </p>
                </div>

                {/* Features Section */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6 w-full lg:w-[65%]">
                        {/* Top Row */}
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="bg-[#D8FF85] flex-grow flex flex-col px-4 py-6 rounded-2xl">
                                <FeaturesCards
                                    icon={Immigration}
                                    title="Nigerian Immigration Service"
                                    actions={[
                                        "Apply for international passport",
                                        "Renew expired passports",
                                    ]}
                                    buttonLabel="Sign in with NINAuth"
                                />
                            </div>
                            <div className="bg-[#EEEEEE] flex-grow flex flex-col px-4 py-6 rounded-2xl">
                                <FeaturesCards
                                    icon={Firs}
                                    title="Federal Inland Revenue Service"
                                    actions={[
                                        "Apply for international passport",
                                        "Access tax clearance certificates",
                                    ]}
                                    buttonLabel="Sign in with NINAuth"
                                    
                                />
                            </div>
                        </div>

                        {/* Bottom Row */}
                        <div
                            className="bg-cover bg-center h-[491px] sm:h-[400px] lg:h-[491px] w-full px-7 py-16 rounded-2xl"
                            style={{ backgroundImage: `url(${image2})` }}
                        >
                            <FeaturesCards
                                icon={Ncc}
                                title="Nigerian Communications Commission"
                                actions={[
                                    "Register SIM cards",
                                    "Perform SIM swap",
                                ]}
                                buttonLabel="Sign in with NINAuth"
                                justifyBetween="justify-between"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div
                        className="w-full lg:w-[35%] h-[560px] sm:h-[400px] lg:h-[892px] bg-cover bg-center px-7 py-16 rounded-2xl"
                        style={{ 
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 38, 39, 1), rgba(0, 86, 88, 0.05), rgba(0, 0, 0, 1)), url(${serviceImage})`
                        }}
                    >
                        <FeaturesCards
                            icon={RoadSafety}
                            title="Federal Road Safety Corps"
                            actions={[
                                "Apply for a driver's license",
                                "Renew driver's license",
                            ]}
                            buttonLabel="Sign in with NINAuth"
                            textColor="text-white"
                            justifyBetween="justify-between"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;