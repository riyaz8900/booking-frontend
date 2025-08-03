import React from 'react'

function Why() {
    return (
        <div className='relative py-3'>
            <div className='container mx-auto py-3'>
                <div className='flex items-center justify-center flex-col mb-12'>
                    <h1 className="font-inter font-bold text-xl md:text-6xl lg:text-7xl leading-[106%] text-center">
                        Why ENTREX?
                    </h1>
                    <p className="font-inter text-sm font-medium md:text-base leading-[106%] tracking-normal text-center mt-4">
                        Trusted by hundreds of travelers and corporates across India for a premium ride experience.
                    </p>
                </div>

                {/* Background car image container */}
                <div className='relative w-full h-36  md:h-[300px] lg:h-[600px]'>
                    {/* Background image */}
                    <div className='absolute inset-0  flex items-center justify-center'>
                        <img
                            src='/car.png'
                            className='object-contain w-full h-full transition-transform duration-300 hover:scale-105 '
                            alt='Premium car'
                        />
                    </div>

                    {/* Text content overlays */}
                    <div className='hidden lg:block'>
                        <div className='relative z-10 h-full flex flex-col justify-between p-4'>
                            {/* Top row features */}
                            <div className='flex justify-between w-full'>
                                {/* Left feature */}
                                <div className='flex flex-col'>
                                    <div className='flex justify-end items-end flex-col bg-opacity-90 p-4 rounded-lg '>
                                        <div className='flex items-center text-right'>
                                            <span className='mr-2'><img src='/why/award.png' alt='GPS icon' /></span>
                                            <h1 className='font-bold'>Premium chauffeurs</h1>
                                        </div>
                                        <p className='mt-2 text-sm w-1/3'>
                                            All our drivers are handpicked, background-verified, professionally dressed, and trained for top-tier customer service.                                        </p>
                                    </div>
                                    <div className=' flex justify-end items-start flex-col bg-opacity-90 p-4 rounded-lg '>
                                        <div className='flex items-center'>
                                            <span className='mr-2'><img src='/why/magic-star.png' alt='GPS icon' /></span>
                                            <h1 className='font-bold'>Well maintained-vehicle</h1>
                                        </div>
                                        <p className='mt-2 text-sm w-1/3'>
                                            Our fleet is serviced regularly, sanitized daily, and equipped with modern amenities for a smooth and safe ride.               </p>                     </div>

                                </div>


                                {/* Right feature */}
                                <div className='flex flex-col'>
                                    <div className=' flex justify-end flex-col bg-opacity-90 p-4 rounded-lg '>
                                        <div className='flex text-right'>
                                            <span className='mr-2'><img src='/why/dollar-square.png' alt='GPS icon' /></span>
                                            <h1 className='font-bold'>Transparent pricing</h1>
                                        </div>
                                        <p className='mt-2 text-sm w-1/3'>
                                            No hidden charges. Transparent fare structure with real-time billing through our app.                                        </p>
                                    </div>
                                    <div className=' flex justify-end items-end flex-col bg-opacity-90 p-4 rounded-lg '>
                                        <div className='flex'>
                                            <span className='mr-2'><img src='/why/medal.png' alt='GPS icon' /></span>
                                            <h1 className='font-bold'>Punctaul & Reliable </h1>
                                        </div>
                                        <p className='mt-2 text-sm w-1/3'>
                                            Time is valuable. Our chauffeurs arrive ahead of schedule and follow optimized routes for timely arrivals.                                        </p>
                                    </div>

                                </div>
                            </div>

                            {/* Bottom row features */}
                            <div className='flex justify-between w-full'>
                                {/* Left feature */}
                                <div className='max-w-xs  bg-opacity-90 p-4 rounded-lg '>
                                    <div className='flex items-center justify-start'>
                                        <span className='mr-2'><img src='/why/gps.png' alt='GPS icon' /></span>
                                        <h1 className='font-bold'>Real-Time Tracking</h1>
                                    </div>
                                    <p className='mt-2 text-sm'>
                                        We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.
                                    </p>
                                </div>

                                {/* Right feature */}
                                <div className=' flex justify-end items-end flex-col bg-opacity-90 p-4 rounded-lg '>
                                    <div className='flex'>
                                        <span className='mr-2'><img src='why/24-support.png' alt='GPS icon' /></span>
                                        <h1 className='font-bold'>24x7 Dedicated support</h1>
                                    </div>
                                    <p className='mt-2 text-sm w-1/3'>
                                        We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why