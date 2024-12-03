import React from 'react';
import ButtonFill from '../ButtonFill';


const BusinessesApiIntegration = () => {
    return (
        <div className='w-full m-auto py-[96px]'>
            <div className='w-full max-w-[1212px] m-auto flex flex-col items-center bg-[#F5F5EE] rounded-[20px] py-[90px] gap-[46px]'>
                <div className='w-full m-auto flex flex-col items-center gap-[22px]'>

                    <h1 className='text-center text-[40px] leading-[56px] font-medium text-blackCustom w-full max-w-[560px]'>
                        Integrate with confidence using API documetation
                    </h1>

                    <p className='text-center text-[17px] text-blackCustom leading-[27.2px] font-normal w-[650px]'>
                        Unlock the full potential of NINAuth by accessing our
                        detailed API documentation, which provides everything
                        your business needs for a smooth integration
                    </p>
                </div>

                <ButtonFill label="Read API documentation" />

            </div>
        </div>
    );
};

export default BusinessesApiIntegration;