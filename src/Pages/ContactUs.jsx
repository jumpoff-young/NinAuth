import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import TextInput from './TextInput';

const ContactUs = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <>
            <Navbar />
            <div className='w-full max-w-full bg-[#FBFCF5]'>
                <div className="Hero-Section bg-[#FBFCF5] w-full max-w-full m-auto pt-[71px] pb-[73px] lg:pt-[100px] lg:pb-[68px] md:pt-[100px] md:pb-[68px]">
                    <div className="w-full flex flex-col gap-6 max-w-full m-auto lg:max-w-[53.75%] md:max-w-[53.75%]">
                        <h1 className="text-[42px] lg:text-[56px] md:text-[56px] leading-[50.4px] lg:leading-[67.2px] md:leading-[67.2px] text-center font-medium">
                            Help is here when you need it
                        </h1>
                        <p className="text-[17px] leading-[27.2px] font-normal text-center">
                            Whether you have questions, need assistance, or want to provide feedback,
                            our dedicated team is ready to support you. Reach out anytime, and let us
                            help you navigate your NINAuth experience.
                        </p>
                    </div>
                </div>
                <div className="w-full max-w-full m-auto pt-[71px] px-6 pb-[73px]">
                    <div className="flex flex-col gap-8 m-auto w-full max-w-full px-4 py-10 md:p-10 lg:p-10 lg:max-w-[53.75%] md:max-w-[53.75%] bg-white rounded-[40px] md:rounded-[40px] lg:rounded-[40px]">
                        <h3 className="w-full max-w-full text-[24px] leading-[33.6px] font-medium text-[#008643] text-left md:text-center lg:text-center">
                            Send us a message
                        </h3>

                        <div className="flex flex-col gap-10">
                            <div className="w-full max-w-full flex flex-col lg:flex-row md:flex-row gap-4">
                                <TextInput
                                    label="First name"
                                    placeholder="Enter First Name"
                                    value={firstName}
                                    onChange={(value) => setFirstName(value)}
                                />
                                <TextInput
                                    label="Last Name"
                                    placeholder="Enter Last Name"
                                    value={lastName}
                                    onChange={(value) => setLastName(value)}
                                />
                            </div>
                            <div className="w-full max-w-full flex flex-col lg:flex-row md:flex-row gap-4">
                                <TextInput
                                    label="Email address"
                                    placeholder="Enter Email address"
                                    value={email}
                                    onChange={(value) => setEmail(value)}
                                />
                                <TextInput
                                    label="Phone Number"
                                    placeholder="Enter your phone number"
                                    value={phoneNumber}
                                    onChange={(value) => setPhoneNumber(value)}
                                    isNumberOnly={true}
                                />
                            </div>
                            <div className='h-[133px] md:h-[192px] lg:h-[192px]'>
                                <TextInput
                                    label="Message"
                                    placeholder="Type here"
                                    value={firstName}
                                    onChange={(value) => setFirstName(value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;