import React from 'react'

const services = [
    {
        title: 'Employee Commute Solutions',
        description: 'Daily transportation for corporate staff with fixed routes, real-time tracking, and punctual pickups.',
        image: '/service/image1.jpg',
    },
    {
        title: 'Executive Chauffeur Service',
        description: 'Suited, trained chauffeurs with luxury vehicles for directors, clients, and VIP executives.',
        image: '/service/image2.jpg',
    },
    {
        title: 'Event & Conference Travel',
        description: 'Coordinated fleet for business meetings, offsites, seminars, and corporate gatherings—managed end-to-end.',
        image: '/service/image3.jpg',
    },
    {
        title: 'Airport Transfers',
        description: 'Timely drop-offs and pickups for your team and guests from all major airports with live flight monitoring.',
        image: '/service/image4.jpg',
    },
    {
        title: 'Transport Desk Management',
        description: 'On-demand ride management with 24×7 support, live dashboards, and centralized control from our app or portal.',
        image: '/service/image5.jpg',
    },
]

function Service() {
    return (
        <div className="py-12 container mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Header Section */}
            <div className="text-center mb-8">
                <h1 className="font-inter font-bold  text-xl md:text-[56px] leading-[106%] text-gray-900">
                    Our Services
                </h1>
                <p className="font-inter font-medium text-base sm:text-lg leading-[106%] text-gray-600 mt-4 max-w-2xl mx-auto">
                    Premium travel solutions tailored for businesses and individuals across India.
                </p>
            </div>

            {/* Filter Buttons - Fixed Position */}
            <div className="flex justify-center gap-4 mb-16 top-4 z-20">
                <button className="
                    w-[180px] sm:w-[215px] h-[45px] sm:h-[49px]
                    bg-gradient-to-r from-[#F3AA45] to-[#ED2628]
                    rounded-full
                    py-3 px-6 sm:px-[43px]
                    text-white font-medium text-sm sm:text-base
                    hover:opacity-90 transition-opacity
                    shadow-md hover:shadow-lg
                    whitespace-nowrap
                ">
                    Corporate Solutions
                </button>
                <button className="
                    w-[180px] sm:w-[215px] h-[45px] sm:h-[49px]
                    bg-white border border-gray-200
                    rounded-full
                    py-3 px-6 sm:px-[43px]
                    text-gray-800 font-medium text-sm sm:text-base
                    hover:bg-gray-50 transition-colors
                    shadow-md hover:shadow-lg
                    whitespace-nowrap
                ">
                    Personal/Retail rides
                </button>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`relative h-80 rounded-xl overflow-hidden group ${index === 0 ? 'md:col-span-2' : ''}`}
                    >
                        {/* Service Image */}
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                        
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
                        
                        {/* Content */}
                        <div className="absolute bottom-0 left-0 p-6 text-white z-10 w-full">
                            <h2 className="font-manrope font-semibold text-2xl leading-[1.3] mb-2">
                                {service.title}
                            </h2>
                            <p className="font-manrope font-medium text-base leading-[1.5] opacity-90">
                                {service.description}
                            </p>
                        </div>
                        
                        {/* Icon */}
                        <div className="absolute top-4 left-4 z-10">
                            <img 
                                src="/service/analytics.png" 
                                alt="" 
                                className="w-6 h-6 filter brightness-0 invert"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Service