import React from 'react';

const IntroductionContent = () => {
    return (
        <div className='w-full max-w-full flex flex-col gap-16  pb-[112px]'>
            <div className='w-full max-w-full  lg:w-[942px]'>
                <div className='w-full flex flex-col gap-16'>
                    <div className='flex flex-col gap-10'>
                        <div className='title w-full'>
                            <h1 className='text-[32px] leading-[44.8px] font-medium '>
                                Introduction
                            </h1>
                        </div>
                        <div className='body flex flex-col w-full max-w-full gap-6'>
                            <p className='text-[17px] text-[#343434] font-normal text-justify w-full max-w-full '>
                                This document serves as a guide for businesses and government
                                entities to seamlessly integrate Ninauth’s verification
                                system into their digital infrastructure. The system simplifies user authentication,
                                ensuring secure and efficient data exchange while maintaining compliance with
                                privacy and regulatory standards.
                            </p>
                            <p className='text-[17px] text-[#343434] font-normal text-justify w-full '>
                                The integration process includes initiating an ID verification session,
                                displaying a QR code to users for consent-based data sharing,
                                and securely receiving encrypted data via a webhook. By implementing this system,
                                organizations can enhance their onboarding, verification, and service delivery
                                processes while prioritizing security and user privacy.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div className='title w-full'>
                            <h1 className='text-[32px] leading-[44.8px] font-medium '>
                                Use Cases
                            </h1>
                        </div>
                        <div className='body flex flex-col w-full gap-10'>

                            <div className='flex flex-col gap-4'>
                                <h5 className="text-[17px] font-semibold text-blackCustom leading-[27.2px]">1. Government Applications</h5>
                                <ul className="list-disc pl-6 space-y-3 flex flex-col gap-4">
                                    <li className='text-[#343434] text-[17px] leading-[27.2px]'>
                                        <span className="font-medium text-[17px] leading-[27.2px]">E-Government Services:</span> Facilitate citizen access to government services like tax filing, voter registration, and health records.
                                    </li>
                                    <li className='text-[#343434] text-[17px] leading-[27.2px]'>
                                        <span className="font-medium text-[17px] leading-[27.2px]">Subsidy and Welfare Programs:</span> Authenticate beneficiaries to ensure accurate distribution of funds or services.
                                    </li>
                                    <li className='text-[#343434] text-[17px] leading-[27.2px]'>
                                        <span className="font-medium text-[17px] leading-[27.2px]">Identity Verification for Public Services:</span> Use for secure issuance of passports, national ID cards, or driving licenses.
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h5 className="text-[17px] font-semibold text-blackCustom leading-[27.2px]">2. Business Applications </h5>
                                <ul className="list-disc pl-6 space-y-3 flex flex-col gap-4">
                                    <li className='text-[#343434] text-[17px] leading-[27.2px]'>
                                        <span className="font-medium text-[17px] leading-[27.2px]">Banking and Finance: </span>
                                        Streamline customer onboarding for account creation, loan applications,
                                        and KYC processes. nt services like tax filing,
                                        voter registration, and health records.
                                    </li>
                                    <li className='text-[#343434] text-[17px] leading-[27.2px]'>
                                        <span className="font-medium text-[17px] leading-[27.2px]">E-Commerce: </span>
                                        Verify user identity for age-restricted products,
                                        reduce fraudulent transactions, and simplify registration processes.
                                    </li>
                                    <li className='text-[#343434] text-[17px] leading-[27.2px]'>
                                        <span className="font-medium text-[17px] leading-[27.2px]">Telecom Services: </span>
                                        Register SIM cards securely and verify users in compliance with regulatory requirements.
                                    </li>
                                    <li className='text-[#343434] text-[17px] leading-[27.2px]'>
                                        <span className="font-medium text-[17px] leading-[27.2px]">Healthcare: </span>
                                        Enable secure patient identity verification for accessing health records or insurance claims.
                                    </li>
                                </ul>
                                <p className='text-[#343434] text-[17px] leading-[27.2px]'>
                                    These use cases demonstrate the system's versatility across various industries
                                    and its ability to enhance trust, security, and efficiency.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default IntroductionContent;