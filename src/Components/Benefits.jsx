import React from 'react';
import Icon1 from '../assets/images/benefitsIcons/icon1.png';
import Icon2 from '../assets/images/benefitsIcons/icon2.png';
import Icon3 from '../assets/images/benefitsIcons/icon3.png';

const Benefits = () => {

    const cards = [

        { id: 1, icon: Icon1, title: 'User-controlled access', description: 'Be in charge of your personal data at all times. Decide what information to share when an organization requests access to your NIN data,' },
        { id: 2, icon: Icon2, title: 'Secure, accessible digital identification', description: 'Advanced encryption and cryptographic technology to secure your identity, reinforced by biometric authentication or robust password protection.' },
        { id: 1, icon: Icon3, title: 'Multi-sector identity solution', description: 'Navigate diverse services effortlessly with NINAuth. From banking and healthcare to government agencies and fintechs, your NIN becomes a mater key to your digital world.' },

    ]

    return (
        <>
            <div className='w-full pt-[98px] pb-[144px] bg-[#F9F5EB]'>
                <div className='w-[1212px] m-auto flex flex-col gap-[61px]'>
                    <h1 className='text-center text-blackCustom font-medium text-[40px] leading-[56px]'>Your identity. Your data.</h1>
                    <div className="flex justify-between items-center w-[1212px] m-auto">
                        {cards.map(card => (
                            <div key={card.id} className="flex flex-col items-center gap-12 px-[28px] h-[422px] w-[382.67px] pt-[64px]  bg-white rounded-2xl">
                                <div>
                                    <img src={card.icon} alt={card.title} className='w-auto max-w-[79px] h-auto max-h-[78px]' />
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <h3 className="text-center text-blackCustom font-medium text-[22px] leading-[30.8px] w-auto max-w-[300px]">
                                        {card.title}
                                    </h3>
                                    <p className='text-center text-blackCustom font-normal text-[16px] leading-[25.6px] w-auto max-w-[300px]'>
                                        {card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Benefits;