import React from 'react';
import BImage2 from '../../assets/images/Businesses/B-Image2.png';
import BImage3 from '../../assets/images/Businesses/B-Image3.png';

const BusinessesPageBenefits = () => {
    return (
        <div className='w-full'>
            {/* Top */}
            <div className='w-full h-[514px] flex bg-[#F9F5EB]'>
                <div className='w-full flex flex-col gap-[86px] pl-[72px] pt-[46px]'>
                    <div className='w-full max-w-[628px] pb-8 border-b-[1px] border-blackCustom'>
                        <h5 className='text-base text-blackCustom font-medium leading-[25.6px] w-full tracking-widest'>
                            BUILT TO SUIT YOUR BUSINESS NEEDS
                        </h5>
                    </div>
                    <div>
                        <h1 className='text-blackCustom text-[56px] leading-[67.2px] w-[565px]'>
                            Comply, protect and scale with confidence.
                        </h1>
                    </div>
                </div>
                <div className='w-full h-full object-cover'>
                    <img src={BImage2} className='w-full h-full object-cover' />
                </div>
            </div>

            {/* Bottom */}
            <div className='w-full h-[514px] flex bg-[#2A4E45]'>
                <div className='w-[1550px] h-full object-cover'>
                    <img src={BImage3} className=' w-full h-full object-cover'/>
                </div>
                <div className='w-full h-full object-cover'>
                <div className='w-full flex flex-col gap-[86px] pl-[40px] pt-[46px]'>
                    <div className='w-full max-w-[628px] pb-8 border-b-[1px] border-[#8DFDBA]'>
                        <h5 className='text-base text-[#8DFDBA] font-medium leading-[25.6px] w-full tracking-widest'>
                            BUILT TO SUIT YOUR BUSINESS NEEDS
                        </h5>
                    </div>
                    <div>
                        <h1 className='text-[#8DFDBA] text-[56px] leading-[67.2px] w-[565px]'>
                            Comply, protect and scale with confidence.
                        </h1>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
};

export default BusinessesPageBenefits;