import React from "react";


const FeaturesCards = ({ icon, title, actions, buttonLabel, textColor, justifyBetween }) => {
  return (
    <>


      <div className="flex flex-col gap-[32px]  h-full">
        <div className="flex justify-center items-center w-[58px] h-[58px] bg-white p-[6px] rounded-[6px]">
          <img src={icon} alt={title} className="w-full h-full object-contain" />
        </div>


        <div className={`flex flex-col gap-[32px] lg:justify-between h-full ${justifyBetween ? justifyBetween : "justify-between"}  `}>
          <div className="flex flex-col gap-4">
            <h3 className={`text-2xl leading-[33.6px] font-medium text-blackCustom w-full max-w-[297px] text-left ${textColor ? textColor : "text-blackCustom"
              } `}>{title}</h3>
            <ul className="list-disc pl-5 flex flex-col gap-[10px]">
              {actions.map((action, index) => (
                <li key={index} className={`text-blackCustom text-[15px] font-normal leading-[24px] w-full max-w-[297px] ${textColor ? textColor : "text-blackCustom"
                  }`}>
                  {action}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center w-full">
            <button
              className="p-4 bg-white text-primaryColor text-[15px] font-medium text-center w-full max-w-[297px] 
              h-auto max-h-[40px] flex items-center justify-center rounded">
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>







    </>
  );
};

export default FeaturesCards;