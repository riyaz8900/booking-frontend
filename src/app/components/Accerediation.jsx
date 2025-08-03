import React from 'react';

function Accerediation() {
  return (
    <div className="bg-gray-50 py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between gap-8">
          
          {/*------------------- First Accreditation------------------------ */}
          <div className="flex flex-col md:flex-col   w-full md:w-1/3">
            <img 
              src='/itta.png' 
              alt="ITTA Accreditation" 
              className="w-24 h-24  object-contain"
            />
            <div className="">
              <h2 className='font-semibold text-sm md:text-lg lg:text-xl '>
                Affiliations: ITTA - Indian Tourist Transport Association
              </h2>
              <p className="text-xs md:text-sm text-gray-600">
                We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency
              </p>
            </div>
          </div>

          {/* -------------------Middle Certificate (centered on larger screens)--------------------- */}
          <div className="order-first md:order-none w-full md:w-auto">
            <img 
              src='/certificate.png' 
              alt="Certificate" 
              className="mx-auto md:w-full md:h-full   object-cover"
            />
          </div>

          {/* ---------------Third Accreditation -------------------*/}
           <div className="flex flex-col md:flex-col   w-full md:w-1/3">
            <img 
              src='/lato.png' 
              alt="ITTA Accreditation" 
              className="w-24 h-24 object-contain"
            />
            <div className="">
              <h2 className='font-semibold text-sm md:text-lg lg:text-xl '>
                Affiliations: ITTA - Indian Tourist Transport Association
              </h2>
              <p className="text-xs md:text-sm text-gray-600">
                We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Accerediation;