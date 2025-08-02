import React from 'react'

function Why() {
    return (
        <div className='relative'>
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
                <div className='relative w-full h-36 md:h-[500px] lg:h-[600px]'>
                    {/* Background image */}
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <img
                            src='/car.png'
                            className='object-contain w-full h-full'
                            alt='Premium car'
                        />
                    </div>

                    {/* Text content overlays */}
                    <div className='hidden md:block'>
                        <div className='relative z-10 h-full flex flex-col justify-between p-4'>
                            {/* Top row features */}
                            <div className='flex justify-between w-full'>
                                {/* Left feature */}
                                <div className='flex flex-col'>
                                    <div className='flex justify-end items-end flex-col bg-opacity-90 p-4 rounded-lg '>
                                        <div className='flex items-center text-right'>
                                            <span className='mr-2'><img src='/why/gps.png' alt='GPS icon' /></span>
                                            <h1 className='font-bold'>Real-Time Tracking</h1>
                                        </div>
                                        <p className='mt-2 text-sm w-1/3'>
                                            We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.
                                        </p>
                                    </div>
                                    <div className=' flex justify-end items-start flex-col bg-opacity-90 p-4 rounded-lg '>
                                        <div className='flex items-center'>
                                            <span className='mr-2'><img src='/why/gps.png' alt='GPS icon' /></span>
                                            <h1 className='font-bold'>Real-Time Tracking</h1>
                                        </div>
                                        <p className='mt-2 text-sm w-1/3'>
                                            We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.
                                        </p>
                                    </div>

                                </div>


                                {/* Right feature */}
                                <div className='flex flex-col'>
                                    <div className=' flex justify-end flex-col bg-opacity-90 p-4 rounded-lg '>
                                        <div className='flex text-right'>
                                            <span className='mr-2'><img src='/why/gps.png' alt='GPS icon' /></span>
                                            <h1 className='font-bold'>Real-Time Tracking</h1>
                                        </div>
                                        <p className='mt-2 text-sm w-1/3'>
                                            We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.
                                        </p>
                                    </div>
                                    <div className=' flex justify-end items-end flex-col bg-opacity-90 p-4 rounded-lg '>
                                        <div className='flex'>
                                            <span className='mr-2'><img src='/why/gps.png' alt='GPS icon' /></span>
                                            <h1 className='font-bold'>Real-Time Tracking</h1>
                                        </div>
                                        <p className='mt-2 text-sm w-1/3'>
                                            We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.
                                        </p>
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
                                        <span className='mr-2'><img src='/why/gps.png' alt='GPS icon' /></span>
                                        <h1 className='font-bold'>Real-Time Tracking</h1>
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