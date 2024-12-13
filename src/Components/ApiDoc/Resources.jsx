import React from 'react';

const Resources = () => {
    return (
        <div className='w-full flex flex-col gap-16  pb-[112px]'>
            <div className='w-full max-w-full lg:w-[942px]'>
                <div className='w-full flex flex-col gap-16'>
                    <div className='w-full max-w-full flex flex-col gap-10'>
                        <div className='title w-full max-w-full '>
                            <h1 className='w-full max-w-full text-[32px] leading-[44.8px] font-medium '>
                                Resources
                            </h1>
                        </div>




                    </div>
                    <div className='w-full max-w-full  flex flex-col gap-10'>

                        <div className='body max-w-full  flex flex-col w-full gap-6'>

                            <p className='text-[17px] w-full max-w-full  text-[#343434] font-normal text-justify '>
                                To ensure smooth implementation, the following resources are available to all businesses and developers:
                            </p>

                            <div className='flex w-full max-w-full  flex-col gap-10'>
                                <div className=' w-full max-w-full flex flex-col gap-4'>
                                    <h5 className="w-full max-w-full text-[17px] font-medium text-blackCustom leading-[27.2px]">1. Client ID and Secret</h5>
                                    <ul className="w-full max-w-full list-disc pl-6 space-y-3 flex flex-col gap-2">
                                        <li className='w-full max-w-full  text-[#343434] text-[17px] leading-[27.2px]'>
                                            The <span className='font-medium'>Client ID</span> and <span className='font-medium'>Client Secret</span> serve as authentication credentials for all API calls.
                                        </li>
                                        <li className='w-full max-w-full text-[#343434] text-[17px] leading-[27.2px]'>
                                            These credentials are unique to each organization and can be generated and managed from the admin dashboard.
                                        </li>
                                    </ul>
                                </div>
                                <div className='w-full max-w-full flex flex-col gap-4'>
                                    <h5 className="w-full max-w-full text-[17px] font-medium text-blackCustom leading-[27.2px]">2. PKI Encryption Keys</h5>
                                    <ul className="w-full max-w-full list-disc pl-6 space-y-3 flex flex-col gap-2">
                                        <li className='w-full max-w-full text-[#343434] text-[17px] leading-[27.2px]'>
                                            To ensure secure data transfer, businesses must download and manage <span className='font-medium'>PKI keys.</span>
                                        </li>
                                        <li className='w-full max-w-full text-[#343434] text-[17px] leading-[27.2px]'>
                                            These keys are used to decrypt sensitive data received via the webhook.
                                        </li>
                                        <li className='w-full max-w-full text-[#343434] text-[17px] leading-[27.2px]'>
                                            Always store private keys securely and follow best practices for cryptographic key management.
                                        </li>
                                    </ul>
                                </div>
                                <div className='w-full max-w-full flex flex-col gap-4'>
                                    <h5 className="w-full max-w-full text-[17px] font-medium text-blackCustom leading-[27.2px]">3. Callback URL</h5>
                                    <ul className="w-full max-w-full list-disc pl-6 space-y-3 flex flex-col gap-2">
                                        <li className='text-[#343434] text-[17px] leading-[27.2px]'>
                                        Businesses are required to provide a <span className='font-medium'> callback URL </span>for receiving data. 
                                        </li>
                                        <li className='text-[#343434] text-[17px] leading-[27.2px]'>
                                        This URL should be configured to handle incoming webhook payloads securely and validate their authenticity. 
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            



                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Resources;