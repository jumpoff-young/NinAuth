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
      img: {PhoneImage1},
      heading: "How to give consent to your identity data",
      features: [
        { icon: "../../assets/images/Individuals/Icon1.png", text: "Launch the app" },
        { icon: "../../assets/images/Individuals/Icon2.png", text: "SCAN THE QR code or enter the request code given by the organization" },
        { icon: "../../assets/images/Individuals/Icon3.png", text: "Complete verification/login" },
        { icon: "../../assets/images/Individuals/Icon4.png", text: "Approve data sharing" },
      ],
    },
    {
      img: "../../assets/images/Individuals/PhoneImage2.png",
      heading: "How to authenticate with NINAuth",
      features: [
        { icon: "../../assets/images/Individuals/Icon1.png", text: "Launch the app" },
        { icon: "../../assets/images/Individuals/Icon2.png", text: "SCAN THE QR code or enter the request code given by the organization" },
        { icon: "../../assets/images/Individuals/Icon3.png", text: "Complete verification/login" },
        { icon: "../../assets/images/Individuals/Icon4.png", text: "Approve data sharing" },
      ],
    },
    {
      img: "../../assets/images/Individuals/PhoneImage3.png",
      heading: "How to sign in to government services",
      features: [
        { icon: "../../assets/images/Individuals/Icon1.png", text: "Launch the app" },
        { icon: "../../assets/images/Individuals/Icon2.png", text: "SCAN THE QR code or enter the request code given by the organization" },
        { icon: "../../assets/images/Individuals/Icon3.png", text: "Complete verification/login" },
        { icon: "../../assets/images/Individuals/Icon4.png", text: "Approve data sharing" },
      ],
    },
  ];

  return (
    <div className="">
      {TheSteps.map((TheStep, index) => (
        <div key={index} className="">
          <div>
            <h1>{TheStep.heading}</h1>
            <div className="">
              {TheStep.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="">
                  {feature.icon && <img src={feature.icon} alt="Feature Icon" />}
                  <p className="card-name">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
          {TheStep.img && <img src={TheStep.img} alt="The Step Image" />}
        </div>
      ))}
    </div>
  );
};

export default ConsentStep;