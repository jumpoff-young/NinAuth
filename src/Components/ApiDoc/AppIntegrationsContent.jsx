import React from 'react';

const AppIntegrationsContent = () => {
    return (
        <div className='w-full flex flex-col gap-16  pb-[112px]'>
            <div className='w-full max-w-full lg:w-[942px]'>
                <div className='w-full flex flex-col gap-16'>
                    <div className='w-full flex flex-col gap-10'>
                        <div className='title w-full'>
                            <h1 className='w-full text-[32px] leading-[44.8px] font-medium '>
                                App Integrations
                            </h1>
                        </div>




                    </div>
                    <div className='w-full max-w-full flex flex-col gap-6'>

                        <p className='w-full max-w-full text-[17px] text-[#343434] font-normal text-justify '>
                            Our ID verification system can be integrated into diverse digital platforms to provide a seamless experience:
                        </p>

                        <div className='w-full max-w-full body flex flex-col gap-10'>

                            <div className='w-full max-w-full flex flex-col gap-4'>
                                <h5 className="w-full max-w-full text-[17px] font-medium text-blackCustom leading-[27.2px]">1. Mobile Applications</h5>
                                <ul className="max-w-full w-full list-disc pl-6 space-y-3 flex flex-col gap-2">
                                    <li className='w-full max-w-full text-[#343434] text-[17px] leading-[27.2px]'>
                                        Use our API with native mobile development tools for iOS and Android platforms.
                                    </li>
                                    <li className='w-full max-w-full text-[#343434] text-[17px] leading-[27.2px]'>
                                        Display the QR code or other user prompts directly in the app.
                                    </li>
                                </ul>
                            </div>

                            <div className='w-full max-w-full flex flex-col gap-4'>
                                <h5 className="w-full max-w-full text-[17px] font-medium text-blackCustom leading-[27.2px]">2. Web Applications </h5>
                                <ul className="w-full max-w-full list-disc pl-6 space-y-3 flex flex-col gap-2">
                                    <li className='w-full max-w-full text-[#343434] text-[17px] leading-[27.2px]'>
                                        Embed the API into web portals for customer registration or service access.
                                    </li>
                                    <li className='w-full max-w-full text-[#343434] text-[17px] leading-[27.2px]'>
                                        Use responsive designs to ensure the interface works across devices.
                                    </li>
                                </ul>
                            </div>

                            <div className='w-full max-w-full flex flex-col gap-4'>
                                <h5 className="w-full max-w-full text-[17px] font-medium text-blackCustom leading-[27.2px]">3. Custom Workflows </h5>
                                <ul className="w-full max-w-full list-disc pl-6 space-y-3 flex flex-col gap-2">
                                    <li className='w-full max-w-full text-[#343434] text-[17px] leading-[27.2px]'>
                                        Leverage webhooks and PKI encryption for integration into custom applications,
                                        ensuring data security while adhering to industry-specific requirements.
                                    </li>
                                    <li className='w-full max-w-full text-[#343434] text-[17px] leading-[27.2px]'>
                                        Use responsive designs to ensure the interface works across devices.
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default AppIntegrationsContent;