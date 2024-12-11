import React from 'react';

const Environment = () => {
    return (
        <div className='w-full flex flex-col gap-16  pb-[112px]'>
            <div className='w-[942px]'>
                <div className='w-full flex flex-col gap-16'>
                    <div className='flex flex-col gap-10'>
                        <div className='title w-full'>
                            <h1 className='text-[32px] leading-[44.8px] font-medium '>
                                Environment
                            </h1>
                        </div>




                    </div>
                    <div className='flex flex-col gap-10'>

                        <div className='body flex flex-col w-full gap-6'>

                            <p className='text-[17px] text-[#343434] font-normal text-justify w-full '>
                                To support smooth integration and development, our system provides two distinct environments:
                            </p>

                            <div className='flex flex-col gap-10'>
                                <div className='flex flex-col gap-4'>
                                    <h5 className="text-[17px] font-medium text-blackCustom leading-[27.2px]">1. Sandbox Environment</h5>
                                    <ul className="list-disc pl-6 space-y-3 flex flex-col gap-2">
                                        <li className='text-[#343434] text-[17px] leading-[27.2px]'>
                                            Purpose: Used for testing and development.
                                        </li>
                                        <li className='text-[#343434] text-[17px] leading-[27.2px]'>
                                            Features mock data and simulated responses for developers to test the full integration flow.
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <h5 className="text-[17px] font-medium text-blackCustom leading-[27.2px]">2. Production Environment</h5>
                                    <ul className="list-disc pl-6 space-y-3 flex flex-col gap-2">
                                        <li className='text-[#343434] text-[17px] leading-[27.2px]'>
                                            Purpose: Used for live operations with actual user data.
                                        </li>
                                        <li className='text-[#343434] text-[17px] leading-[27.2px]'>
                                            Designed for optimal performance, scalability, and security during real-world use.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <p className='text-[#343434] text-[17px] leading-[27.2px]'>
                                Developers must authenticate API calls using a Client ID and Client Secret,
                                both of which can be obtained from the admin dashboard.
                            </p>



                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Environment;