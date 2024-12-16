import React, { useState } from 'react';
import ImportanceIcon1 from '../../assets/images/SafetyEducation/ImportanceIcon1.png';
import ImportanceIcon2 from '../../assets/images/SafetyEducation/ImportanceIcon2.png';
import ImportanceIcon3 from '../../assets/images/SafetyEducation/ImportanceIcon3.png';
import ImportanceIcon4 from '../../assets/images/SafetyEducation/ImportanceIcon4.png';
import TipsIcon1 from '../../assets/images/SafetyEducation/TipsIcon1.png';
import TipsIcon2 from '../../assets/images/SafetyEducation/TipsIcon2.png';
import TipsIcon3 from '../../assets/images/SafetyEducation/TipsIcon3.png';
import TipsIcon4 from '../../assets/images/SafetyEducation/TipsIcon4.png';
import TipsIcon5 from '../../assets/images/SafetyEducation/TipsIcon5.png';

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
                    <h1 className='text-[40px] leading-[56px] text-center font-medium '>Tips for Safe Identity Verification</h1>
                    <p className='text-[17px] text-left leading-[30.6px] max-w-full lg:max-w-[56.74%] text-blackCustom'>
                    Digital identity verification is becoming increasingly important in this digital world, 
                    especially as cybercrimes and identity theft rise. As individuals engage in online transactions, 
                    understanding how to protect personal information during the identity verification process is crucial. 
                    Here are some practical tips to help you navigate the verification process safely:
                    </p>
                </div>
                <div className='tips-points flex flex-col items-center gap-[58px] px-4 w-full max-w-full lg:w-[56.74%] m-auto'>
                    <div className='tips-points-one flex flex-col w-full lg:flex-row md:flex-row gap-[33px] pb-8 border-b-[1px] border-[#E1E1D8]'>
                        <div className='tips-icon-one w-[112px] h-[112px] max-w-[112px] max-h-[112px] flex items-center object-cover p-6 bg-[#F9F5EB] rounded-[10px]'><img src={TipsIcon1} /></div>

                        <div className='tips-content-one w-full flex flex-col gap-2'>
                            <h5 className='w-full text-blackCustom text-[22px] leading-[39.6px] font-medium'>Verify the Request for Information</h5>
                            <div className='flex flex-col gap-6'>
                                <p className='w-full max-w-full lg:w-[572px] text-blackCustom leading-[30.6px] text-[17px] font-normal'>
                                    In today’s digital landscape, it is crucial to verify any request for personal information before
                                    responding. Scammers often impersonate legitimate organizations to trick individuals into providing
                                    sensitive data. To protect yourself, always check the source of the request. Look for official email
                                    addresses or contact numbers associated with the organization.
                                </p>
                                <p className='w-full max-w-full lg:w-[572px] text-blackCustom leading-[30.6px] text-[17px] font-normal'>
                                    If something seems off or if you receive an unsolicited request, do not hesitate to reach out
                                    directly to the organization using contact information found on their official website rather
                                    than relying on any contact details provided in the suspicious communication. This extra step
                                    can help ensure that you are engaging with a legitimate entity and not falling victim to a phishing attempt.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='tips--points-two flex flex-col w-full lg:flex-row md:flex-row gap-[33px] pb-8 border-b-[1px] border-[#E1E1D8]'>
                        <div className='tips-icon-two w-[112px] h-[112px] max-w-[112px] max-h-[112px] flex items-center object-cover p-6 bg-[#F9F5EB] rounded-[10px]'><img src={TipsIcon2} /></div>

                        <div className='tips-content-two w-full flex flex-col gap-2'>
                            <h5 className='w-full text-blackCustom text-[22px] leading-[39.6px] font-medium'>Be Cautious with Personal Information</h5>
                            <p className='w-full max-w-full text-blackCustom leading-[30.6px] text-[17px] font-normal'>
                                When it comes to sharing personal information during identity verification, less is often more.
                                Only provide the minimum amount of information necessary for the verification process and be
                                wary of requests that ask for excessive details that seem irrelevant. Understanding why
                                certain pieces of information are required is also important; legitimate organizations
                                should clearly communicate their data collection practices and explain how your data will
                                be used and protected. If a request feels intrusive or unnecessary, trust your instincts
                                and seek clarification before proceeding.
                            </p>
                        </div>
                    </div>
                    <div className='tips-points-three flex flex-col w-full lg:flex-row md:flex-row gap-[33px] pb-8 border-b-[1px] border-[#E1E1D8]'>
                        <div className='tips-icon-three icon-two w-[112px] h-[112px] flex items-center max-w-[112px] max-h-[112px] object-cover p-6 bg-[#F9F5EB] rounded-[10px]'><img src={TipsIcon3} /></div>
                        <div className='tips-content-three w-full'>
                            <div className='w-full flex flex-col gap-6'>
                                <h5 className='w-full text-blackCustom text-[22px] leading-[39.6px] font-medium'>Choose Strong Passwords</h5>
                                <p className='w-full max-w-full text-blackCustom leading-[30.6px] text-[17px] font-normal'>
                                    Creating strong passwords is your first line of defence in protecting your personal information.
                                    A strong password should be unique to each account and consist of a mix of upper and lower case letters,
                                    numbers, and special characters. This complexity makes it much harder for unauthorized users to guess or
                                    crack your password through brute force attacks.
                                </p>
                                <p className='w-full max-w-full text-blackCustom leading-[30.6px] text-[17px] font-normal'>
                                It is important to avoid using easily guessable information such as birthdays, names, 
                                or common words. To manage the complexity of multiple passwords, consider using a 
                                password manager. These tools can generate strong passwords for you and store them 
                                securely, allowing you to access your accounts without the need to remember every single password.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='tips-points-four flex flex-col w-full lg:flex-row md:flex-row gap-[33px] pb-8 border-b-[1px] border-[#E1E1D8]'>
                        <div className='tips-icon-four w-[112px] h-[112px] flex items-center max-w-[112px] max-h-[112px] object-cover p-6 bg-[#F9F5EB] rounded-[10px]'><img src={TipsIcon4} /></div>
                        <div className='tips-content-four w-full'>
                            <h5 className='w-full text-blackCustom text-[22px] leading-[39.6px] font-medium'>Use Secure Connections</h5>
                            <p className='w-full text-blackCustom leading-[30.6px] text-[17px] font-normal'>
                            Using secure internet connections is vital when submitting sensitive information online. 
                            Public Wi-Fi networks can be convenient but are often less secure and susceptible to 
                            eavesdropping by malicious actors. Whenever possible, avoid using public Wi-Fi for
                             transactions involving personal data; instead, opt for a secure private connection 
                             or use a Virtual Private Network (VPN) that encrypts your internet traffic 
                             and protects your data from prying eyes. Additionally, always look for 
                             "https://" in the URL of websites where you enter personal information; this indicates that 
                             the site has implemented security measures to protect your data during transmission.
                            </p>
                        </div>
                    </div>
                    <div className='tips-points-five flex flex-col w-full lg:flex-row md:flex-row gap-[33px] pb-8 border-b-[1px] border-[#E1E1D8]'>
                        <div className='tips-icon-five w-[112px] h-[112px] flex items-center max-w-[112px] max-h-[112px] object-cover p-6 bg-[#F9F5EB] rounded-[10px]'><img src={TipsIcon5} /></div>
                        <div className='tips-content-four w-full'>
                            <h5 className='w-full text-blackCustom text-[22px] leading-[39.6px] font-medium'>Keep Your Devices Secure</h5>
                            <div className='w-full flex flex-col gap-6'>
                            <p className='w-full text-blackCustom leading-[30.6px] text-[17px] font-normal'>
                            Securing your devices is another critical aspect of protecting your personal information during
                             identity verification processes. Installing reputable antivirus software on all devices helps 
                             safeguard against malware and other threats that could compromise your data security. Regularly
                              updating both your operating system and applications ensures that any vulnerabilities are patched
                               promptly, reducing the risk of exploitation by cybercriminals. 
                            </p>
                            <p className='w-full text-blackCustom leading-[30.6px] text-[17px] font-normal'>
                            By maintaining robust security measures on your devices, you create a safer environment
                             for engaging in online activities that require identity verification. This detailed content
                              provides users with comprehensive insights into each tip while emphasizing the importance of
                               proactive measures in ensuring safe identity verification.
                            </p>
                            </div>
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