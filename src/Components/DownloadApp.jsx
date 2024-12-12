import React from 'react';
import PhoneMockup from '../assets/images/downloadAppSection/PhoneMockup.png';
import GooglePlay from '../assets/images/downloadAppSection/googlePlay.png';
import AppStore from '../assets/images/downloadAppSection/appStore.png';
import DownloadLinks from './DownloadLinks';

const DownloadApp = () => {
    return (
        <div className='w-full px-4 py-[140px] m-auto'>
            <div className='w-full lg:max-w-[854px] m-auto flex flex-col-reverse lg:flex lg:flex-row justify-between items-center'>
                <div className='w-full max-w-[377px] h-full max-h-[571px]'>
                    <img src={PhoneMockup} className='w-full h-full object-contain' />
                </div>
                <div className='flex flex-col gap-6 items-center lg:items-start w-full m-auto '>
                    <div className='flex flex-col items-start lg:items-start gap-6'>
                        <h2 className='font-medium text-[34px] leading-[47.6px] w-full max-w-[398px] lg:header-text lg:w-[472px]'>Discover what you can do with NINAuth</h2>
                        <p className='text-blackCustom text-[17px] leading-[27.2px] font-normal w-full max-w-[358px] lg:max-w-[472px]'>
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