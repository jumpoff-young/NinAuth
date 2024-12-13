import React from 'react';
import PhoneImage1 from '../../assets/images/Individuals/PhoneImage1.png';
import PhoneImage2 from '../../assets/images/Individuals/PhoneImage2.png';
import PhoneImage3 from '../../assets/images/Individuals/PhoneImage3.png';
import Icon1 from '../../assets/images/Individuals/Icon1.png';
import Icon2 from '../../assets/images/Individuals/Icon2.png';
import Icon3 from '../../assets/images/Individuals/Icon3.png';
import Icon4 from '../../assets/images/Individuals/Icon4.png';

const ConsentStep = () => {
  const TheSteps = [
    {
      img: PhoneImage1,
      heading: "How to give consent to your identity data",
      features: [
        { icon: Icon1, text: "Launch the app" },
        { icon: Icon2, text: "SCAN THE QR code or enter the request code given by the organization" },
        { icon: Icon3, text: "Complete verification/login" },
        { icon: Icon4, text: "Approve data sharing" },
      ],
    },
    {
      img: PhoneImage2,
      heading: "How to authenticate with NINAuth",
      features: [
        { icon: Icon1, text: "Launch the app" },
        { icon: Icon2, text: "SCAN THE QR code or enter the request code given by the organization" },
        { icon: Icon3, text: "Complete verification/login" },
        { icon: Icon4, text: "Approve data sharing" },
      ],
    },
    {
      img: PhoneImage3,
      heading: "How to sign in to government services",
      features: [
        { icon: Icon1, text: "Launch the app" },
        { icon: Icon2, text: "SCAN THE QR code or enter the request code given by the organization" },
        { icon: Icon3, text: "Complete verification/login" },
        { icon: Icon4, text: "Approve data sharing" },
      ],
    },
  ];

  return (
    <div className="steps-container px-6 w-full m-auto py-[96px]  flex flex-col lg:gap-[140px]">
      {TheSteps.map((TheStep, index) => (
        <div key={index} className={`step-card items-start lg:items-center md:items-center flex flex-col sm:flex-col lg:flex-row md:flex-row w-[389px] sm:w-[389px] md:w-[867px] lg:w-[867px] justify-between m-auto ${index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className='flex flex-col gap-[56px]'>
            <h1 className="step-heading font-medium text-blackCustom text-[34px] sm:text-[34px] md:text-[40px] lg:text-[40px] 
                           leading-[47.6px] sm:leading-[47.6px] md:leading-[56px] lg:leading-[56px] 
                           w-[398px] sm:w-[398px] md:w-[523px] lg:w-[523px]">
              {TheStep.heading}
            </h1>
            <div className="features-list flex flex-col gap-[24px] max-w-[398px] sm:max-w-[398px] md:max-w-[523px] lg:max-w-[523px]">
              {TheStep.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="feature-item flex items-center gap-4">
                  <div className='w-full max-w-[64px] h-full object-contain max-h-[64px] p-x[14px] py-[14.5px] rounded-[10px] bg-[#F9F5EB] flex items-center justify-center'>
                    <img src={feature.icon} alt="Feature Icon" className="feature-icon w-9 h-9 object-contain" />
                  </div>
                  <p className="feature-text uppercase font-normal text-[17px] leading-[27.2px] tracking-widest ">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='Phone-mockup w-[377px] h-auto'>
            <img src={TheStep.img} alt="The Step Illustration" className="step-image w-full h-auto mt-4" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConsentStep;