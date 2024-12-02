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
    ]

    return (
        <div className='w-full py-[98px] bg-[#F5F1E8]'>
            <div className='w-full max-w-[1212px] m-auto flex flex-col items-center'>
                <div className='flex flex-col gap-[61px]'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-center font-medium text-blackCustom leading-[56px] text-[40px] '>
                            Comparing different options
                        </h3>
                        <p className='text-center font-normal text-blackCustom leading-[27.2px] text-[17px]'>
                            Understanding the strengths and weaknesses of authentication methods is crucial for ensuring security.
                        </p>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-[#F46A69] via-[#F5B829] via-[#CCF529] to-[#008643] w-[1212px] rounded">

                    </div>
                </div>
                <div className="flex justify-between items-center w-[1212px] m-auto">
                    {AuthStrengthCards.map(AuthStrengthCard => (
                        <div key={AuthStrengthCard.id} className="flex flex-col items-center gap-12 px-[28px] h-[422px] w-[382.67px] pt-[64px] rounded-2xl">
                            <div>
                                <img src={AuthStrengthCard.image} className='w-auto max-w-[192px] h-auto max-h-[192px]' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='text-center text-blackCustom font-normal text-[16px] leading-[25.6px] w-auto max-w-[300px]'>
                                    {AuthStrengthCard.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    );
};

export default AuthenticationMethodsSection;