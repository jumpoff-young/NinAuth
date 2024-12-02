import React from 'react';
import PhoneMockup from '../assets/images/downloadAppSection/PhoneMockup.png';
import GooglePlay from '../assets/images/downloadAppSection/googlePlay.png';
import AppStore from '../assets/images/downloadAppSection/appStore.png';
import DownloadLinks from './DownloadLinks';

const DownloadApp = () => {
    return (
        <div className='w-full py-[140px]'>
            <div className='w-full max-w-[854px] m-auto flex justify-between items-center'>
                <div className='w-full max-w-[377px] h-full max-h-[571px]'>
                    <img src={PhoneMockup} className='w-full h-full object-contain' />
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-6'>
                        <h2 className='header-text w-[472px]'>Discover what you can do with NINAuth</h2>
                        <p className='text-blackCustom text-[17px] leading-[27.2px] font-normal w-full max-w-[472px]'>
                            Experience the power of NINAuth right from your mobile device.
                            Download the app on the App Store or Google Play to simplify
                            your authentication process and take control of your privacy
                        </p>
                    </div>
                    <DownloadLinks />
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;