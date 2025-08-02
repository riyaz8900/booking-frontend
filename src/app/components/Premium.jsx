import React from 'react';

function Premium() {
    return (
        <div className='bg-[#f7f4df] py-8 md:py-16 px-4 sm:px-6 lg:px-8'>
            {/*------------------- Text Content --------------------------*/}
            <div className='max-w-7xl mx-auto text-center'>
                <h1 className='font-inter font-semibold sm:text-4xl md:text-[35.33px] lg:text-[45.33px] text-[#0F0049] !mb-0'>
                    Why ENTREX Is the Preferred Partner
                </h1>
                <h1 className='font-inter font-semibold sm:text-4xl lg:text-[45.33px] md:text-[35.33px] text-[#0F0049] !mb-0'>
                    for Premium Tourist Travel in India
                </h1>
                
                <div className='pt-4 md:pt-8'>
                    <p className='font-inter !mb-0 font-normal text-sm sm:text-lg md:text-[24px] md:leading-[37.33px] text-gray-700'>
                        Whether you're an international traveler, a corporate guest, or an expat exploring India, ENTREX delivers a
                    </p>          
                    <p className='font-inter !mb-0 font-normal text-sm sm:text-lg md:text-[24px] md:leading-[37.33px] text-gray-700'>
                        seamless journey with professional chauffeurs, luxury vehicles, and end-to-end travel solutions.
                    </p>
                </div>
            </div>

            {/*------------------ Image -----------------------------*/}
            <div className='mt-10 md:mt-16 flex justify-center'>
                <img 
                    src='/premium.png' 
                    alt='Premium Travel Service' 
                    className='w-full max-w-6xl object-contain px-4 sm:px-0'
                />
            </div>
        </div>
    );
}

export default Premium;