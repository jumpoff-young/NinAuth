import React from 'react';
import GooglePlay from '../assets/images/downloadAppSection/googlePlay.png';
import AppStore from '../assets/images/downloadAppSection/appStore.png';

const DownloadLinks = () => {
    return(
        <div className='flex gap-6 w-[326px] h-auto]'>
                        <button><img src={GooglePlay} alt='Download on Google Play' className='w-full h-full'/></button>
                        <button><img src={AppStore} alt='Download on App Store' className='w-full h-full' /></button>
                    </div>
    );
};

export default DownloadLinks;