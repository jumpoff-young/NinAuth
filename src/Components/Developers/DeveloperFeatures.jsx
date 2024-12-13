import React from 'react';
import Icon1 from '../../assets/images/Developers/Icon1.png';
import Icon2 from '../../assets/images/Developers/Icon2.png';
import Icon3 from '../../assets/images/Developers/Icon3.png';
import Icon4 from '../../assets/images/Developers/Icon4.png';
 

const DeveloperFeatures = () =>{

    const DeveloperCards = [

        { id: 1, icon: Icon1, title: 'App integrations', description: 'Discover how system integration works.' },
        { id: 2, icon: Icon2, title: 'Environments', description: 'Discover how system integration works.' },
        { id: 1, icon: Icon3, title: 'Use Cases', description: 'Where the NINAuth verification can be used.' },
        { id: 1, icon: Icon4, title: 'Testing The Demo App', description: 'Here is all you need to test your implementation. ' },

    ]

    return(
        <div className='w-full m-auto pt-[96px] pb-[150px]'>
            <div className='w-[84.17%] m-auto'>
                <div className='flex flex-col items-center gap-[40px]'>
                    <h2 className='w-full  text-blackCustom text-[40px] leading-[56px] text-left font-medium'>
                    Popular topics
                    </h2>
                    <div className="flex flex-wrap gap-8 items-center w-full m-auto">
                        {DeveloperCards.map(DeveloperCard => (
                            <div key={DeveloperCard.id} className="flex flex-col gap-8 bg-[#F9F5EB] w-full max-w-screen md:w-[279px] lg:w-[279px] h-full p-6 rounded-2xl">
                                <div>
                                    <img src={DeveloperCard.icon} alt={DeveloperCard.title} className='w-auto max-w-[79px] h-auto' />
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <h3 className="text-left text-blackCustom font-normal text-[24px] leading-[31.2px] h-[62.41px] tracking-wider w-auto max-w-[300px]">
                                        {DeveloperCard.title}
                                    </h3>
                                    <p className='text-left text-blackCustom font-normal text-[17px] leading-[27.2px] w-auto max-w-[300px]'>
                                        {DeveloperCard.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DeveloperFeatures;