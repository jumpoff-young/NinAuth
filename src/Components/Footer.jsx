import React from 'react';
import NinAuthLogo from '../assets/images/Footer/NINAuthLogo.png';

const Footer = () => {
    return (
        <div className='w-full bg-[#083C2F] h-[267px] m-auto flex items-center'>
            <div className='w-full max-w-[1212px] m-auto flex  justify-between'>
                <div>
                    <img src={NinAuthLogo} className='w-[140px] h-auto' />
                </div>
                <div className='flex flex-col w-[930px] gap-[24px]'>
                    <ul className='flex gap-8 text-white text-base underline text-center'>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                        <li>Contact us</li>
                    </ul>
                    <div className='flex flex-col gap-4'>
                        <p className='text-white text-[14px] leading-[19.6px] w-full'>
                            Protect your business with NINAuth. Secure, manage, and control
                            access to NIN data while ensuring compliance and privacy.
                            Stay informed and in control of your data operations.
                        </p>
                        <div className='flex gap-1 text-white'>
                            <p>©</p>
                            <p>2024 National Identity Management Commission</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;