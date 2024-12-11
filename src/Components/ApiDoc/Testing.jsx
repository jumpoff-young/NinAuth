import React from 'react';

const Testing = () => {
    return (
        <div className='w-full flex flex-col gap-16  pb-[112px]'>
            <div className='w-[942px]'>
                <div className='w-full flex flex-col gap-16'>
                    <div className='flex flex-col gap-10'>
                        <div className='title w-full'>
                            <h1 className='text-[32px] leading-[44.8px] font-medium '>
                                Testing
                            </h1>
                        </div>




                    </div>
                    <div className='flex flex-col gap-10'>


                        <div className='flex flex-col gap-10'>
                            <div className='flex flex-col gap-4'>
                                <h5 className="text-[17px] font-medium text-blackCustom leading-[27.2px]">1. Testing in the Sandbox Environment</h5>

                                <p className='text-[#343434] text-[17px] leading-[27.2px] '>
                                    The sandbox environment is designed to help businesses test
                                    and validate their integration before moving to production.
                                    Developers can simulate the complete verification process,
                                    from session initiation to webhook handling.
                                </p>

                            </div>
                            <div className='flex flex-col gap-4'>
                                <h5 className="text-[17px] font-medium text-blackCustom leading-[27.2px]">2. Common Test Scenarios</h5>
                                <ul className="list-disc pl-6 space-y-3 flex flex-col gap-2">
                                    <li className='text-[#343434] text-[17px] leading-[27.2px]'>
                                        Successful Workflow: Verify the end-to-end flow, including session creation, QR code generation, and webhook data decryption.
                                    </li>
                                    <li className='text-[#343434] text-[17px] leading-[27.2px]'>
                                        Error Handling: Test cases such as expired request_id, invalid credentials, or malformed requests.
                                    </li>
                                    <li className='text-[#343434] text-[17px] leading-[27.2px]'>
                                        Webhook Verification: Ensure the callback URL correctly handles encrypted payloads and validates their authenticity.
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h5 className="text-[17px] font-medium text-blackCustom leading-[27.2px]">3. Debugging Tips</h5>
                                <ul className="list-disc pl-6 space-y-3 flex flex-col gap-2">
                                    <li className='text-[#343434] text-[17px] leading-[27.2px]'>
                                        Use detailed logs to identify issues in API requests and webhook responses.
                                    </li>
                                    <li className='text-[#343434] text-[17px] leading-[27.2px]'>
                                        Test with multiple QR code scans to confirm reliability and consistency. .
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

export default Testing;