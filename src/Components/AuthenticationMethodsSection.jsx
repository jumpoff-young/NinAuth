import React from 'react';
import Image1 from '../assets/images/AuthStrength/Image1.png';
import Image2 from '../assets/images/AuthStrength/Image2.png';
import Image3 from '../assets/images/AuthStrength/Image3.png';
import Image4 from '../assets/images/AuthStrength/Image4.png';
import Image5 from '../assets/images/AuthStrength/Image5.png';

const AuthenticationMethodsSection = () => {

    const AuthStrengthCards = [
        { id: 1, image: Image1, description: 'Password system relies on simple usernames and passwords, which are often insecure.' },
        { id: 2, image: Image2, description: 'Risk-based authentication requires verification only in specific situations, like logging in from a new device, but still carries significant risks.' },
        { id: 3, image: Image3, description: 'Multi-factor authentication enhances security by using time-based one-time passwords or hardware tokens.' },
        { id: 4, image: Image4, description: 'Public Key Infrastructure leverages certificate-based cryptography with public-private key pairs to provide good security.' },
        { id: 5, image: Image5, description: 'NINAuth combines password protection, risk-based tokens, and a certificate model with non-repudiable signatures for exceptional security.' },
    ];

    return (
        <div className="w-full py-[98px] bg-[#F5F1E8]">
            <div className="w-full max-w-[1212px] m-auto flex flex-col items-center">
                <div className="flex flex-col gap-[61px]">
                    <div className="Header-Text flex flex-col gap-4">
                        <h3 className="text-center font-medium text-blackCustom leading-[56px] text-[40px]">
                            Comparing different options
                        </h3>
                        <p className="text-center font-normal text-blackCustom leading-[27.2px] text-[17px]">
                            Understanding the strengths and weaknesses of authentication methods is crucial for ensuring security.
                        </p>
                    </div>

                </div>

                {/* Cards Container */}
                <div className='GradientandImage flex w-full justify-between lg:flex-col lg:gap-[60px] pt-[64px] md:flex md:gap-[60px] '>
                    <div className="Gradient h-[1000px] w-[5px] lg:h-1 bg-gradient-to-r from-[#F46A69] via-[#F5B829] via-[#CCF529] to-[#008643] lg:w-[1212px] rounded"></div>
                    <div className="Cards-Main-Container w-full flex flex-col gap-6 m-auto lg:flex lg:justify-center  ">
                        {AuthStrengthCards.map((AuthStrengthCard) => (
                            <div
                                key={AuthStrengthCard.id}
                                className=" Individual-Card-Container flex flex-col items-left lg:flex lg:items-center md:items-center gap-6 px-[28px] w-full sm:w-[382.67px] sm:h-[422px]  rounded-2xl"
                            >
                                <div className='Image-Container'>
                                    <img
                                        src={AuthStrengthCard.image}
                                        alt={`Auth Method ${AuthStrengthCard.id}`}
                                        className="w-auto max-w-[80px] max-h-[80px] lg:max-w-[192px] h-auto lg:max-h-[192px]"
                                    />
                                </div>
                                <div className="Text-Container flex flex-col gap-4">
                                    <p className="text-left lg:text-center md:text-center text-blackCustom font-normal text-[16px] lg:text-[16px] md:text-[16px]  leading-[25.6px] w-auto max-w-[361px] md:max-w-[300px] lg:max-w-[300px]">
                                        {AuthStrengthCard.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AuthenticationMethodsSection;