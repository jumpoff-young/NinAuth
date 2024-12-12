import React from 'react';
import Icon1 from '../assets/images/benefitsIcons/icon1.png';
import Icon2 from '../assets/images/benefitsIcons/Icon2.png';
import Icon3 from '../assets/images/benefitsIcons/Icon3.png';

const Benefits = () => {
    const cards = [
        { id: 1, icon: Icon1, title: 'User-controlled access', description: 'Be in charge of your personal data at all times. Decide what information to share when an organization requests access to your NIN data,' },
        { id: 2, icon: Icon2, title: 'Secure, accessible digital identification', description: 'Advanced encryption and cryptographic technology to secure your identity, reinforced by biometric authentication or robust password protection.' },
        { id: 3, icon: Icon3, title: 'Multi-sector identity solution', description: 'Navigate diverse services effortlessly with NINAuth. From banking and healthcare to government agencies and fintechs, your NIN becomes a master key to your digital world.' },
    ];

    return (
        <div className="w-full pt-[98px] pb-[144px] bg-[#F9F5EB] px-4 sm:px-8">
            <div className="max-w-[1212px] mx-auto flex flex-col gap-12">
                <h1 className="text-center text-blackCustom font-medium text-[28px] sm:text-[32px] lg:text-[40px] leading-tight lg:leading-[56px]">
                    Your identity. Your data.
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card) => (
                        <div key={card.id} className="flex flex-col items-center gap-6 p-6 sm:px-8 lg:px-10 h-[422px] justify-center bg-white rounded-2xl shadow-lg">
                            <div>
                                <img src={card.icon} alt={card.title} className="w-full max-w-[78px] h-auto sm:max-w-[78px] lg:max-w-[78px] " />
                            </div>
                            <div className="flex flex-col gap-4 text-center">
                                <h3 className="text-blackCustom font-medium text-[22px] leading-[30.8px] text-center  sm:text-[22px] lg:text-[22px] ">
                                    {card.title}
                                </h3>
                                <p className="text-blackCustom font-normal text-[16px] leading-[25.6px] text-center w-[full] max-w-[326px] sm:text-[15px] lg:text-[16px] ">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Benefits;