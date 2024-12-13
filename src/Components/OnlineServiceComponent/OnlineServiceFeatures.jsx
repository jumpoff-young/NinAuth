import React from 'react';
import OnlineServiceCards from './OnlineServiceCards';
import Immigration from '../../assets/images/OnlineServices/Immigration.png';
import Firs from '../../assets/images/OnlineServices/Firs.png';
import Frsc from '../../assets/images/OnlineServices/Frsc.png';
import Ncc from '../../assets/images/OnlineServices/Ncc.png';
import Lirs from '../../assets/images/OnlineServices/Lirs.png';
import FctIrs from '../../assets/images/OnlineServices/FctIrs.png';

const OnlineServiceFeatures = () => {
    return (
        <div className='w-screen px-6 flex items-center py-[112px] m-auto bg-[#F9F5EB]'>
            <div className='w-full max-w-screen m-auto lg:max-w-[1084px] flex flex-wrap justify-center  gap-6'>
                <OnlineServiceCards

                    icon={Immigration}
                    title="Nigerian Immigration Service"
                    actions={[
                        "Apply for international passport",
                        "Renew expired passports",
                    ]}
                    buttonLabel="Sign  in with NINAuth"

                />
                <OnlineServiceCards

                    icon={Firs}
                    title="Federal Inland Revenue Service"
                    actions={[
                        "File tax returns",
                        "Access tax clearance certificates",
                    ]}
                    buttonLabel="Sign  in with NINAuth"

                />
                <OnlineServiceCards

                    icon={Frsc}
                    title="Federal Road Safety Corps"
                    actions={[
                        "Apply for a driver's license",
                        "Renew driver's license",
                    ]}
                    buttonLabel="Sign  in with NINAuth"

                />
                <OnlineServiceCards

                    icon={Ncc}
                    title="Nigerian Communications Commission"
                    actions={[
                        "Register SIM cards",
                        "Perform SIM swap",
                    ]}
                    buttonLabel="Sign  in with NINAuth"

                />
                <OnlineServiceCards

                    icon={Lirs}
                    title="Lagos Inland Revenue Service"
                    actions={[
                        "File tax returns",
                        "Access tax clearance certificates",
                    ]}
                    buttonLabel="Sign  in with NINAuth"

                />
                <OnlineServiceCards

                    icon={FctIrs}
                    title="FCT Inland Revenue Service"
                    actions={[
                        "File tax returns",
                        "Access tax clearance certificates",
                    ]}
                    buttonLabel="Sign  in with NINAuth"

                />
                
            </div>
        </div>
    );
};

export default OnlineServiceFeatures;