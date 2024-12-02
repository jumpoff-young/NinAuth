import React from 'react';
import image1 from '../assets/images/features/Image1.png';
import image2 from '../assets/images/features/Image2.png';
import FeaturesCards from './FeaturesCards';
import Immigration from '../assets/images/features/icons/immigration.png';
import Ncc from '../assets/images/features/icons/ncc.png';
import RoadSafety from '../assets/images/features/icons/roadSafety.png';
import Firs from '../assets/images/features/icons/firs.png';

const Features = () => {
    return (
        <>
            <div className='w-full py-[112px]'>
                <div className='w-full max-w-[1212px] m-auto flex flex-col gap-[64px]'>
                    <div className='flex justify-between items-start'>
                        <h1 className='header-text w-full max-w-[514px]'>Use NINAuth to securely access government services</h1>
                        <p className='paragraph-text w-full max-w-[580px]'>
                            From immigration processes to tax filings and driver's license renewals,
                            NINAuth provides a convenient single sign-on that ensures your information
                            remains safe. Effortlessly interact with government agencies and embrace
                            the future of digital identity management.
                        </p>
                    </div>
                    <div className='flex justify-between gap-6'>
                        <div className='flex flex-col justify-between w-[715px] h-[892px]'>
                            <div className='flex justify-between gap-6'>
                                <div className='bg-[#D8FF85] h-[376px] w-full flex flex-col px-4 py-6 rounded-2xl'>
                                    <FeaturesCards
                                        icon={Immigration}
                                        title="Nigerian Immigration Service"
                                        actions={[
                                            "Apply for international passport",
                                            "Renew expired passports",
                                        ]}
                                        buttonLabel="Sign  in with NINAuth"
                                    />

                                </div>
                                <div className='bg-[#EEEEEE] h-[376px] w-full flex flex-col px-4 py-6 rounded-2xl'>
                                    <FeaturesCards
                                        icon={Firs}
                                        title="Federal Inland Revenue Service"
                                        actions={[
                                            "Apply for international passport",
                                            "Access tax clearance certificates",
                                        ]}
                                        buttonLabel="Sign  in with NINAuth"

                                    />
                                </div>

                            </div>
                            <div className='bg-cover bg-center h-[491px] w-full px-7 py-16 rounded-2xl'
                                style={{ backgroundImage: `url(${image2})` }}>
                                <FeaturesCards
                                    icon={Ncc}
                                    title="Nigerian Communications Commission"
                                    actions={[
                                        "Register SIM cards",
                                        "Perform SIM swap",
                                    ]}
                                    buttonLabel="Sign  in with NINAuth"

                                />
                            </div>

                        </div>
                        <div className='w-[532px] h-[892px] bg-cover bg-center bg-black px-7 py-16 rounded-2xl'
                            style={{ backgroundImage: `url(${image1})` }}>
                            <FeaturesCards
                                icon={RoadSafety}
                                title="Federal Road Safety Corps"
                                actions={[
                                    "Apply for a driver's license",
                                    "Renew driver's license",
                                ]}
                                buttonLabel="Sign  in with NINAuth"
                                textColor='text-white'

                            />
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};

export default Features;