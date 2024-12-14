import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />

            <div className='Hero-Section bg-[#FBFCF5] w-full max-w-full m-auto pt-[71px] pb-[73px] lg:pt-[100px] lg:pb-[68px] md:pt-[100px] md:pb-[68px] '>
                <div className='w-full flex flex-col gap-6'>
                    <h1 className='text-[42px] lg:text-[56px] md:text-[56px] leading-[50.4px] lg:leading-[67.2px] md:leading-[67.2px] text-center font-medium'>
                        Privacy Policy
                    </h1>
                    <p className='text-[17px] leading-[27.2px] font-normal text-center'>
                        Last updated:  22nd November, 2024
                    </p>
                </div>
            </div>

            <div className='Cookies-Contents w-full max-w-full m-auto pt-[71px] pb-[73px] lg:pt-[100px] px-6 lg:pb-[68px] md:pt-[100px] md:pb-[68px] '>
                <div className='w-full max-w-full m-auto lg:max-w-[40.15%] md:max-w-[37.15%] flex flex-col gap-12'>
                    <div className='w-full max-w-full flex flex-col gap-4'>
                        <h4 className='text-[24px] leading-[33.6px] font-medium'>
                            Introduction
                        </h4>
                        <p className='text-[17px] font-normal leading-[30.6px]'>
                            NINAuth is committed to protecting your privacy and securing your personal information.
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                            when you use our digital identity management platform and related services.
                        </p>
                    </div>


                    <div className='w-full flex flex-col gap-4'>

                        <h4 className='text-[24px] leading-[33.6px] font-medium'>
                            Information We Collect
                        </h4>

                        <h5 className='text-[18px] leading-[32.4px] font-medium'>
                            Personal Information
                        </h5>
                        <ul className='list-disc flex flex-col gap-4 pl-4'>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                National Identification Number (NIN)
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Full name
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Date of birth
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Contact information (e.g., address, phone number, email)
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Biometric data (e.g., fingerprints, facial recognition data)
                            </li>
                        </ul>

                    </div>

                    <div className='w-full flex flex-col gap-4'>

                        <h5 className='text-[18px] leading-[32.4px] font-medium'>
                            Usage Information
                        </h5>
                        <ul className='list-disc flex flex-col gap-4 pl-4'>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Log Data
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Device Information
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                IP Address
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Browser Type
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Pages visited and features used within our platform
                            </li>
                        </ul>

                    </div>

                    <div className='w-full flex flex-col gap-4'>

                        <h5 className='text-[18px] leading-[32.4px] font-medium'>
                            How We Use Your Information
                        </h5>

                        <p className='text-[17px] leading-[30.6px] font-normal'>
                            We use your information to:
                        </p>

                        <ul className='list-disc flex flex-col gap-4 pl-4'>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Verify your identity
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Provide and improve our services
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Process transactions and applications
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Communicate with you about our services
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Comply with legal obligations
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Detect and prevent fraud or unauthorized access
                            </li>
                        </ul>

                    </div>

                    <div className='w-full flex flex-col gap-4'>

                        <h5 className='text-[18px] leading-[32.4px] font-medium'>
                            Data Sharing and Disclosure
                        </h5>

                        <p className='text-[17px] leading-[30.6px] font-normal'>
                            We may share your information with:
                        </p>

                        <ul className='list-disc flex flex-col gap-4 pl-4'>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Government agencies (as required for service delivery)
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Third-party service providers (under strict confidentiality agreements)
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Law enforcement agencies (when required by law)
                            </li>
                        </ul>
                        <p className='text-[17px] text-[#FF0000] leading-[30.6px] font-normal'>
                            We do not sell your personal information to third parties.
                        </p>

                    </div>

                    <div className='w-full flex flex-col gap-4'>

                        <h5 className='text-[18px] leading-[32.4px] font-medium'>
                            Data Security
                        </h5>

                        <p className='text-[17px] leading-[30.6px] font-normal'>
                            We implement robust security measures to protect your information, including:
                        </p>

                        <ul className='list-disc flex flex-col gap-4 pl-4'>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Encryption of data in transit and at rest
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Regular security audits
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Access controls and authentication protocols
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Employee training on data protection
                            </li>
                        </ul>

                    </div>

                    <div className='w-full flex flex-col gap-4'>

                        <h5 className='text-[18px] leading-[32.4px] font-medium'>
                            Your Rights and Choices
                        </h5>

                        <p className='text-[17px] leading-[30.6px] font-normal'>
                            You have the right to:
                        </p>

                        <ul className='list-disc flex flex-col gap-4 pl-4'>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Access your personal information
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Request corrections to your data
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Delete your account (subject to legal retention requirements)
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Opt-out of certain data processing activities
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Receive a copy of your data in a portable format
                            </li>
                        </ul>

                    </div>

                    <div className='w-full flex flex-col gap-4'>

                        <h5 className='text-[18px] leading-[32.4px] font-medium'>
                            Data Retention
                        </h5>
                        <p className='text-[17px] leading-[30.6px] font-normal'>
                            We retain your personal information for as long as necessary to provide
                            our services and comply with legal obligations. After this period, your
                            data will be securely deleted or anonymized.
                        </p>

                    </div>

                    <div className='w-full flex flex-col gap-4'>

                        <h5 className='text-[18px] leading-[32.4px] font-medium'>
                            Changes to This Policy
                        </h5>
                        <p className='text-[17px] leading-[30.6px] font-normal'>
                            We may update this Privacy Policy periodically. We will notify
                            you of any significant changes through our platform or via email.
                        </p>

                    </div>

                    <div className='w-full flex flex-col gap-4'>

                        <h5 className='text-[18px] leading-[32.4px] font-medium'>
                            Children's Privacy
                        </h5>
                        <p className='text-[17px] leading-[30.6px] font-normal'>
                        We retain your personal information for as long as necessary 
                        to provide our services and comply with legal obligations. 
                        After this period, your data will be securely deleted or anonymized.  
                        </p>

                    </div>

                    <div className='w-full flex flex-col gap-4'>

                        <h5 className='text-[18px] leading-[32.4px] font-medium'>
                        Data Retention
                        </h5>
                        <p className='text-[17px] leading-[30.6px] font-normal'>
                        We retain your personal information for as long as necessary to 
                        provide our services and comply with legal obligations. 
                        After this period, your data will be securely deleted or anonymized.    
                        </p>

                    </div>

                    <div className='w-full flex flex-col gap-4'>

                        <h5 className='text-[18px] leading-[32.4px] font-medium'>
                        Contact Us
                        </h5>
                        <p className='text-[17px] leading-[30.6px] font-normal'>
                        If you have any questions or concerns about this Privacy Policy, please contact our 
                        Data Protection Officer at  <span className='text-[#008643]'>nimccustomercare@nimc.gov.ng.</span>
                        </p>

                    </div>

                    <div className='w-full flex flex-col gap-4'>

                        <h5 className='text-[18px] leading-[32.4px] font-medium'>
                        Governing Law
                        </h5>
                        <p className='text-[17px] leading-[30.6px] font-normal'>
                        This Privacy Policy is governed by the laws of Nigeria  without regard to its conflict of law provisions.  
                        By using NINAuth you agree to the terms outlined in this Privacy Policy.    
                        </p>

                    </div>

                </div>
            </div>

            <Footer />

        </>
    );
};

export default PrivacyPolicy;