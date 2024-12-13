import React from "react";


const OnlineServiceCards = ({ icon, title, actions, buttonLabel, textColor }) => {
    return (
        <>


            <div className='bg-white w-screen max-w-screen h-[376px] lg:w-[345px] flex flex-col px-4 py-6 rounded-2xl'>
                <div className="flex flex-col gap-[32px] h-full">

                    <div className="flex justify-center items-center w-[58px] h-[58px] bg-white p-[6px] rounded-[6px]">
                        <img src={icon} alt={title} className="w-full h-full object-contain"/>
                    </div>


                    <div className="flex flex-col justify-between md:justify-between lg:justify-between h-full">
                        <div className="flex flex-col gap-4">
                            <h3 className={`text-[20px] leading-[33.6px] font-medium text-blackCustom w-full max-w-[297px] text-left ${textColor ? textColor : "text-blackCustom"
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
                                className="p-4 border border-primaryColor text-primaryColor text-[15px] font-medium text-center w-full max-w-[297px] 
              h-auto max-h-[40px] flex items-center justify-center rounded">
                                {buttonLabel}
                            </button>
                        </div>
                    </div>
                </div>
            </div>







        </>
    );
};

export default OnlineServiceCards;