import React from 'react';

function Tags() {
    const features = [
        {
            text: "Multilingual Chauffeurs",
            highlight: "Chauffeurs"
        },
        {
            text: "Entrex Client Kit for every trip",
            highlight: "Client Kit"
        },
        {
            text: "100% Statutory Compliance ensured",
            highlight: "Compliance ensured"
        },
        {
            text: "Luxury and Well maintained vehicles",
            highlight: "Luxury"
        },
        {
            text: "Vehicles with average age of less than 3 years",
            highlight: "less than 3 years"
        },
        {
            text: "Best Pricing among the Premium segment service providers",
            highlight: "Best Pricing"
        },
        {
            text: "ZERO Payment commitment in case of any flaw in the trip service",
            highlight: "ZERO Payment"
        },
        {
            text: "Safety & Security ensured through high-end GPS based solution and Remote vehicle control",
            highlight: "Safety & Security"
        },
        {
            text: "Packaged Solutioning covering Accommodation, Food, Sight-seeing, Tourist Guide etc for Expat / Executive Tourism",
            highlight: "Expat / Executive Tourism"
        },
        {
            text: "For long stay Clients, dedicated Chauffer & Vehicle for undisturbed service",
            highlight: "dedicated Chauffer & Vehicle"
        }
    ];

    const FeatureTag = ({ text, highlight }) => {
        const parts = text.split(highlight);
        return (
            <div className="flex justify-center p-2">
                <div className='border border-dashed border-gray-300 px-4 py-1 inline-flex items-center rounded-lg bg-white'>
                    <p className="font-sans font-normal text-xs leading-relaxed text-center text-gray-700">
                        {parts[0]}
                        <span className="font-sans font-bold text-sm leading-relaxed bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                            {highlight}
                        </span>
                        {parts[1]}
                    </p>
                </div>
            </div>
        );
    };

    return (
        <div className="container mx-auto w-full  py-8 ">
            <div className=" mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  '>
                    {features.slice(0, 4).map((feature, index) => (
                        <FeatureTag key={index} text={feature.text} highlight={feature.highlight} />
                    ))}
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2  '>
                    {features.slice(4, 6).map((feature, index) => (
                        <FeatureTag key={index+4} text={feature.text} highlight={feature.highlight} />
                    ))}
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2  '>
                    {features.slice(6, 8).map((feature, index) => (
                        <FeatureTag key={index+6} text={feature.text} highlight={feature.highlight} />
                    ))}
                </div>

                <div className='grid grid-cols-1  '>
                    <FeatureTag text={features[8].text} highlight={features[8].highlight} />
                </div>

                <div className='grid grid-cols-1 '>
                    <FeatureTag text={features[9].text} highlight={features[9].highlight} />
                </div>
            </div>
        </div>
    );
}

export default Tags;