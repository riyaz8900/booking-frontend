import React from 'react';

const Provision = () => {
  const provisionItems = [
    { id: 1, image: '/provision/water.png', name: 'Water bottles' },
    { id: 2, image: '/provision/news.png', name: 'Newspaper' },
    { id: 3, image: '/provision/tissue.png', name: 'Tissue paper pouch' },
    { id: 4, image: '/provision/cookie.png', name: 'Cookies' },
    { id: 5, image: '/provision/pen.png', name: 'Writing slip & pen' },
    { id: 6, image: '/provision/ice.png', name: 'Ice box (on request)' },
    { id: 7, image: '/provision/kit.png', name: 'Fire extinguisher kit' },
    { id: 8, image: '/provision/perfume.png', name: 'Perfume' },
    { id: 9, image: '/provision/charging.png', name: 'Hand-phone charger' },
    { id: 10, image: '/provision/gps.png', name: 'GPS tracking' },
    { id: 10, image: '/provision/gps.png', name: 'GPS tracking' },
    { id: 11, image: '/provision/water.png', name: 'Water bottles' },
    { id: 12, image: '/provision/news.png', name: 'Newspaper' },
  
  ];

  return ( 
    <div className='container text-center py-8 mx-auto px-4 sm:px-6 lg:px-8 '>
      <div className='flex items-center justify-center flex-col mb-8'>
        <h1 className="font-sans font-bold text-4xl sm:text-5xl md:text-[56px] leading-[106%] tracking-normal text-center mb-4">
          In-car Provisions
        </h1>      
        <p className="font-sans font-medium text-base sm:text-lg leading-[106%] tracking-normal text-center  mx-auto px-4">
          Every ENTREX ride comes with thoughtful in-car provisions to ensure your comfort, safety, and satisfaction.
        </p>
      </div>

      <div className='py-6'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6'>
          {provisionItems.map((item) => (
            <div 
              key={item.id}
              className='border rounded-xl p-2 flex flex-col items-center hover:shadow-md transition-all duration-300 border-gray-300'
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className='w-16 h-12 sm:w-20 sm:h-20 object-contain mb-1'
                loading='lazy' 
              />
              <p className="font-sans font-semibold text-sm sm:text-lg leading-[150%] tracking-normal text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Provision;