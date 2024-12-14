import React, { useState } from 'react';
import ImportanceIcon1 from '../../assets/images/SafetyEducation/ImportanceIcon1.png';
import ImportanceIcon2 from '../../assets/images/SafetyEducation/ImportanceIcon2.png';
import ImportanceIcon3 from '../../assets/images/SafetyEducation/ImportanceIcon3.png';
import ImportanceIcon4 from '../../assets/images/SafetyEducation/ImportanceIcon4.png';
import TipsIcon1 from '../../assets/images/SafetyEducation/TipsIcon1.png';
import TipsIcon2 from '../../assets/images/SafetyEducation/TipsIcon2.png';
import TipsIcon3 from '../../assets/images/SafetyEducation/TipsIcon3.png';
import TipsIcon4 from '../../assets/images/SafetyEducation/TipsIcon4.png';

const SafetyEducationTabs = () => {
    const [activeTab, setActiveTab] = useState("importance");

    const tabs = [
        { id: "importance", label: "IMPORTANCE OF IDENTITIY VERIFICATION" },
        { id: "tips", label: "TIPS FOR SAFE IDENTITY VERIFICATION" },
    ];

    const TabContents = {
        importance: (
            <div className='importance-content-container w-screen max-w-screen px-4 m-auto flex flex-col gap-[53px]'>
                <div className='importance-header flex flex-col px-4 max-w-full gap-[40px] items-center'>
                    <h1 className='text-[40px] leading-[56px] text-center font-medium '>Importance of Identity Verification</h1>
                    <p className='text-[17px] text-left leading-[30.6px] max-w-full lg:max-w-[56.74%] text-blackCustom'>
                        Identity verification is the process by which organizations
                        confirm that an individual is who they claim to be. This process
                        often involves the submission of personal information, such as
                        government-issued identification, biometric data, or answers to
                        security questions. Identity verification is a critical process in
                        today’s digital landscape, serving as a safeguard against various
                        threats such as fraud, identity theft, and regulatory non-compliance.
                        Here are several key reasons highlighting its importance:
                    </p>
                </div>
                <div className='importance-points flex flex-col items-center gap-[58px] px-4 w-full max-w-full lg:w-[56.74%] m-auto'>
                    <div className='importance-points-one flex flex-col w-full lg:flex-row md:flex-row gap-[33px] pb-8 border-b-[1px] border-[#E1E1D8]'>
                        <div className='icon-one max-w-[112px] max-h-[112px] object-contain p-6 bg-[#F9F5EB] rounded-[10px]'><img src={ImportanceIcon1} /> </div>
                        <div className='importance-content-one w-full'>
                            <h5 className='w-full text-blackCustom text-[22px] leading-[39.6px] font-medium'>Prevention of Fraud and Identity Theft</h5>
                            <p className='w-full max-w-full lg:w-[572px] text-blackCustom leading-[30.6px] text-[17px] font-normal'>
                                Identity verification helps ensure that individuals are
                                who they claim to be, significantly reducing the risk of identity
                                theft and fraudulent activities. By confirming identities through
                                reliable methods, organizations can prevent unauthorized access
                                to sensitive information and financial resources.
                            </p>
                        </div>
                    </div>
                    <div className='importance-points-two flex flex-col w-full lg:flex-row md:flex-row gap-[33px] pb-8 border-b-[1px] border-[#E1E1D8]'>
                        <div className='icon-two max-w-[112px] max-h-[112px] object-contain p-6 bg-[#F9F5EB] rounded-[10px]' ><img src={ImportanceIcon2} /></div>
                        <div>
                            <h5 className='w-full text-blackCustom text-[22px] leading-[39.6px] font-medium'>Prevention of Fraud and Identity Theft</h5>
                            <p className='w-full max-w-full text-blackCustom leading-[30.6px] text-[17px] font-normal'> 
                                Identity verification helps ensure that individuals are
                                who they claim to be, significantly reducing the risk of identity
                                theft and fraudulent activities. By confirming identities through
                                reliable methods, organizations can prevent unauthorized access
                                to sensitive information and financial resources.
                            </p>
                        </div>
                    </div>
                    <div className='importance-points-three flex flex-col w-full lg:flex-row md:flex-row gap-[33px] pb-8 border-b-[1px] border-[#E1E1D8]'>
                        <div className='icon-three icon-two max-w-[112px] max-h-[112px] object-contain p-6 bg-[#F9F5EB] rounded-[10px]'><img src={ImportanceIcon3} /></div>
                        <div>
                            <h5 className='w-full text-blackCustom text-[22px] leading-[39.6px] font-medium'>Prevention of Fraud and Identity Theft</h5>
                            <p className='w-full max-w-full text-blackCustom leading-[30.6px] text-[17px] font-normal'>
                                Identity verification helps ensure that individuals are
                                who they claim to be, significantly reducing the risk of identity
                                theft and fraudulent activities. By confirming identities through
                                reliable methods, organizations can prevent unauthorized access
                                to sensitive information and financial resources.
                            </p>
                        </div>
                    </div>
                    <div className='importance-points-four flex flex-col w-full lg:flex-row md:flex-row gap-[33px] pb-8 border-b-[1px] border-[#E1E1D8]'>
                        <div className='icon-four icon-two max-w-[112px] max-h-[112px] object-contain p-6 bg-[#F9F5EB] rounded-[10px]'><img src={ImportanceIcon4} /></div>
                        <div>
                            <h5 className='w-full text-blackCustom text-[22px] leading-[39.6px] font-medium'>Prevention of Fraud and Identity Theft</h5>
                            <p className='w-full text-blackCustom leading-[30.6px] text-[17px] font-normal'>
                                Identity verification helps ensure that individuals are
                                who they claim to be, significantly reducing the risk of identity
                                theft and fraudulent activities. By confirming identities through
                                reliable methods, organizations can prevent unauthorized access
                                to sensitive information and financial resources.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ),
        tips: (
            <div className='tips-content-container w-screen max-w-screen px-4 m-auto flex flex-col gap-[53px]'>
                <div className='tips-header flex flex-col px-4 max-w-full gap-[40px] items-center'>
                    <h1 className='text-[40px] leading-[56px] text-center font-medium '>Importance of Identity Verification</h1>
                    <p className='text-[17px] text-left leading-[30.6px] max-w-full lg:max-w-[56.74%] text-blackCustom'>
                        Identity verification is the process by which organizations
                        confirm that an individual is who they claim to be. This process
                        often involves the submission of personal information, such as
                        government-issued identification, biometric data, or answers to
                        security questions. Identity verification is a critical process in
                        today’s digital landscape, serving as a safeguard against various
                        threats such as fraud, identity theft, and regulatory non-compliance.
                        Here are several key reasons highlighting its importance:
                    </p>
                </div>
                <div className='tips-points flex flex-col items-center gap-[58px] px-4 w-full max-w-full lg:w-[56.74%] m-auto'>
                    <div className='tips-points-one flex flex-col w-full lg:flex-row md:flex-row gap-[33px] pb-8 border-b-[1px] border-[#E1E1D8]'>
                        <div className='tips-icon-one max-w-[112px] max-h-[112px] object-contain p-6 bg-[#F9F5EB] rounded-[10px]'><img src={TipsIcon1} /></div>
                        <div className='tips-content-one w-full'>
                            <h5 className='w-full text-blackCustom text-[22px] leading-[39.6px] font-medium'>Prevention of Fraud and Identity Theft</h5>
                            <p className='w-full max-w-full lg:w-[572px] text-blackCustom leading-[30.6px] text-[17px] font-normal'>
                                Identity verification helps ensure that individuals are
                                who they claim to be, significantly reducing the risk of identity
                                theft and fraudulent activities. By confirming identities through
                                reliable methods, organizations can prevent unauthorized access
                                to sensitive information and financial resources.
                            </p>
                        </div>
                    </div>
                    <div className='tips--points-two flex flex-col w-full lg:flex-row md:flex-row gap-[33px] pb-8 border-b-[1px] border-[#E1E1D8]'>
                        <div className='tips-icon-two max-w-[112px] max-h-[112px] object-contain p-6 bg-[#F9F5EB] rounded-[10px]'><img src={TipsIcon2} /></div>
                        <div className='tips-content-two w-full'>
                            <h5 className='w-full text-blackCustom text-[22px] leading-[39.6px] font-medium'>Prevention of Fraud and Identity Theft</h5>
                            <p className='w-full max-w-full text-blackCustom leading-[30.6px] text-[17px] font-normal'>
                                Identity verification helps ensure that individuals are
                                who they claim to be, significantly reducing the risk of identity
                                theft and fraudulent activities. By confirming identities through
                                reliable methods, organizations can prevent unauthorized access
                                to sensitive information and financial resources.
                            </p>
                        </div>
                    </div>
                    <div className='tips-points-three flex flex-col w-full lg:flex-row md:flex-row gap-[33px] pb-8 border-b-[1px] border-[#E1E1D8]'>
                        <div className='tips-icon-three icon-two max-w-[112px] max-h-[112px] object-contain p-6 bg-[#F9F5EB] rounded-[10px]'><img src={TipsIcon3} /></div>
                        <div className='tips-content-three w-full'>
                            <h5 className='w-full text-blackCustom text-[22px] leading-[39.6px] font-medium'>Prevention of Fraud and Identity Theft</h5>
                            <p className='w-full max-w-full text-blackCustom leading-[30.6px] text-[17px] font-normal'>
                                Identity verification helps ensure that individuals are
                                who they claim to be, significantly reducing the risk of identity
                                theft and fraudulent activities. By confirming identities through
                                reliable methods, organizations can prevent unauthorized access
                                to sensitive information and financial resources.
                            </p>
                        </div>
                    </div>
                    <div className='tips-points-four flex flex-col w-full lg:flex-row md:flex-row gap-[33px] pb-8 border-b-[1px] border-[#E1E1D8]'>
                        <div className='tips-icon-four max-w-[112px] max-h-[112px] object-contain p-6 bg-[#F9F5EB] rounded-[10px]'><img src={TipsIcon4} /></div>
                        <div className='tips-content-four w-full'>
                            <h5 className='w-full text-blackCustom text-[22px] leading-[39.6px] font-medium'>Prevention of Fraud and Identity Theft</h5>
                            <p className='w-full text-blackCustom leading-[30.6px] text-[17px] font-normal'>
                                Identity verification helps ensure that individuals are
                                who they claim to be, significantly reducing the risk of identity
                                theft and fraudulent activities. By confirming identities through
                                reliable methods, organizations can prevent unauthorized access
                                to sensitive information and financial resources.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="w-full m-auto py-[56px] flex flex-col gap-[82px]">
            {/* Tab Headers */}
            <div className="flex gap-[24px] px-5 justify-center w-screen m-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`flex pb-[32px] justify-center text-base tracking-widest w-[403px] font-normal text-left md:text-center lg:text-center  ${activeTab === tab.id
                                ? "text-blackCustom border-b-[1px] border-[#008643]"
                                : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="mt-5 text-gray-700">{TabContents[activeTab]}</div>
        </div>
    );
};

export default SafetyEducationTabs;