import React from 'react';
import BIcon1 from '../../assets/images/Businesses/B-Icon1.png';
import BIcon2 from '../../assets/images/Businesses/B-Icon2.png';
import BIcon3 from '../../assets/images/Businesses/B-Icon3.png';

const BusinessesPageFeatures = () => {

    
    const BusinessesPageFeaturesCards = [

        { id: 1, icon: BIcon1, title: 'User-controlled data sharing', description: 'Empower your customers to decide what information they share, enhancing trust and compliance with data protection regulations.' },
        { id: 2, icon: BIcon2, title: 'Enterprise-grade security measures', description: 'Benefit from state-of-the-art encryption and secure protocols that safeguard sensitive NIN data throughout the verification process.' },
        { id: 1, icon: BIcon3, title: 'Transparent access logging', description: 'Maintain a comprehensive audit trail of all data access requests, ensuring accountability and facilitating easier compliance reporting.' },

    ]


    return (
        <div className='w-full m-auto pt-[96px] pb-[150px]'>
            <div className='w-full max-w-[1212px] m-auto'>
                <div className='flex flex-col items-center gap-[40px]'>
                    <h2 className='w-full max-w-[782px] text-blackCustom text-[40px] leading-[56px] text-center font-medium'>
                        Customer identity verification starts with customer control of data
                    </h2>
                    <div className="flex justify-between items-center w-[1212px] m-auto">
                        {BusinessesPageFeaturesCards.map(BusinessesPageFeaturesCard => (
                            <div key={BusinessesPageFeaturesCard.id} className="flex flex-col gap-8  w-[260px] rounded-2xl">
                                <div>
                                    <img src={BusinessesPageFeaturesCard.icon} alt={BusinessesPageFeaturesCard.title} className='w-auto max-w-[79px] h-auto' />
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <h3 className="text-left text-blackCustom font-normal text-[24px] leading-[31.2px] tracking-wider w-auto max-w-[300px]">
                                        {BusinessesPageFeaturesCard.title}
                                    </h3>
                                    <p className='text-left text-blackCustom font-normal text-[17px] leading-[27.2px] w-auto max-w-[300px]'>
                                        {BusinessesPageFeaturesCard.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BusinessesPageFeatures;