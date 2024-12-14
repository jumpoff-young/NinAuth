import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const TermsOfService = () => {
    return (
        <>
            <Navbar />

            <div className='Hero-Section bg-[#FBFCF5] w-full max-w-full m-auto pt-[71px] pb-[73px] lg:pt-[100px] lg:pb-[68px] md:pt-[100px] md:pb-[68px] '>
                <div className='w-full flex flex-col gap-4'>
                    <h1 className='text-[42px] lg:text-[56px] md:text-[56px] leading-[50.4px] lg:leading-[67.2px] md:leading-[67.2px] text-center font-medium'>
                        Terms of Service
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
                            Acceptance of Terms
                        </h4>
                        <p className='text-[17px] font-normal leading-[30.6px]'>
                            By accessing or using NINAuth, you agree to be bound by these Terms of Use.
                            If you do not agree to these terms, please do not use our services.
                        </p>
                    </div>
                    <div className='w-full max-w-full flex flex-col gap-4'>
                        <h4 className='text-[24px] leading-[33.6px] font-medium'>
                            Description of Services
                        </h4>
                        <p className='text-[17px] font-normal leading-[30.6px]'>
                            NINAuth provides a digital identity management platform that allows users to
                            verify their identity, process transactions, and manage their personal information securely.
                        </p>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <h4 className='text-[24px] leading-[33.6px] font-medium'>
                            User Obligations
                        </h4>
                        <ul className='list-disc flex flex-col gap-4 pl-4'>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                You must provide accurate, current, and complete information when using our Services.
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                You are responsible for maintaining the confidentiality of your account credentials.
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                You agree not to use the Services for any unlawful purpose or in any way
                                that could damage, disable, overburden, or impair our systems.
                            </li>
                        </ul>
                    </div>

                    <div className='w-full flex flex-col gap-4'>
                        <h4 className='text-[24px] leading-[33.6px] font-medium'>
                            Privacy and Data usage
                        </h4>
                        <ul className='list-disc flex flex-col gap-4 pl-4'>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Your use of our Services is also governed by our Privacy Policy,
                                which is incorporated into these Terms by reference.
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                We collect and use personal information as described in our Privacy Policy, including but not limited to:
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                National Identification Number (NIN)
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Full Name
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Date of Birth
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Contact information
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Biometric Data
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                By using our Services, you consent to the collection, use,
                                and sharing of your information as outlined in our Privacy Policy.
                            </li>
                        </ul>
                    </div>

                    <div className='w-full flex flex-col gap-4'>
                        <h4 className='text-[24px] leading-[33.6px] font-medium'>
                            Intellectual Property Rights
                        </h4>
                        <ul className='list-disc flex flex-col gap-4 pl-4'>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                All content, features, and functionality of the Services are owned
                                by NINAuth and are protected by copyright, trademark, and other intellectual property laws.
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                You may not reproduce, distribute, modify, create derivative works of,
                                publicly display, publicly perform, republish, download, store, or
                                transmit any of the material on our Services without our prior written consent.
                            </li>
                        </ul>
                    </div>

                    <div className='w-full flex flex-col gap-4'>
                        <h4 className='text-[24px] leading-[33.6px] font-medium'>
                            Limitation of Liability
                        </h4>
                        <ul className='list-disc flex flex-col gap-4 pl-4'>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                NINAuth shall not be liable for any indirect, incidental, special,
                                consequential, or punitive damages resulting from your use or inability to use the Services.
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Our liability for any direct damages shall be limited to the amount paid by you,
                                if any, for accessing our Services during the month in which the damage occurred.
                            </li>
                        </ul>
                    </div>

                    <div className='w-full flex flex-col gap-4'>
                        <h4 className='text-[24px] leading-[33.6px] font-medium'>
                            Indemnification
                        </h4>
                        <p className='text-[17px] leading-[27.2px] font-normal'>
                            You agree to indemnify, defend, and hold harmless NINAuth and its officers,
                            directors, employees, agents, and affiliates from and against any claims,
                            liabilities, damages, judgments, awards, losses, costs, expenses,
                            or fees arising out of your use of the Services or violation of these Terms.
                        </p>
                    </div>

                    <div className='w-full flex flex-col gap-4'>
                        <h4 className='text-[24px] leading-[33.6px] font-medium'>
                            Termination
                        </h4>
                        <ul className='list-disc flex flex-col gap-4 pl-4'>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                We may terminate or suspend your account and access to the
                                Services at our sole discretion, without notice, for any reason,
                                including breach of these Terms.
                            </li>
                            <li className='text-[17px] font-normal leading-[30.6px]'>
                                Upon termination, your right to use the Services will immediately cease
                            </li>
                        </ul>
                    </div>

                    <div className='w-full flex flex-col gap-4'>
                        <p className='text-[17px] leading-[27.2px] font-normal'>
                            We may revise these Terms at any time. We will notify you of any significant
                            changes through our platform or via email. Your continued use of the Services
                            after such changes constitutes your acceptance of the new Terms.
                        </p>
                    </div>

                    <div className='w-full flex flex-col gap-4'>
                        <h4 className='text-[24px] leading-[33.6px] font-medium'>
                            Governing Law
                        </h4>
                        <p className='text-[17px] leading-[27.2px] font-normal'>
                            These Terms are governed by the laws of Nigeria, without regard to its conflict of law provisions.
                        </p>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                    <h4 className='text-[24px] leading-[33.6px] font-medium'>
                            Contact Us
                        </h4>
                        <p className='text-[17px] leading-[27.2px] font-normal'>
                        If you have any questions about these Terms, please contact us at <span className='text-[#008643]'>nimccustomercare@nimc.gov.ng.</span>
                        </p>
                        <p className='text-[17px] leading-[27.2px] font-normal'>
                        By using NINAuth, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    );
};

export default TermsOfService;