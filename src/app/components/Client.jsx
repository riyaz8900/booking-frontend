"use client"
import React from 'react';

function Client() {
  const topRowLogos = [
    '/client/Logo.png',
    '/client/Logo1.png',
    '/client/Logo2.png',
    '/client/Logo3.png',
    '/client/Logo4.png',
  ];
  
  const bottomRowLogos = [
    '/client/Logo5.png',
    '/client/Logo6.png',
    '/client/Logo7.png',
    '/client/Logo8.png',
    '/client/Logo9.png',
  ];

  const doubleTopRow = [...topRowLogos, ...topRowLogos];
  const doubleBottomRow = [...bottomRowLogos, ...bottomRowLogos];

  return (
    <div className='container mx-auto md:py-5'>
      <div className='flex flex-col justify-center items-center py-3'>
        <h1 className="font-sans font-bold text-2xl py-2 md:text-2xl lg:text-5xl text-center leading-tight tracking-normal">
          Trusted by 1500+ popular companies
        </h1>
        <p className="font-['Inter'] font-medium text-[16px] leading-[106%] tracking-[0%] text-center">
          Every ENTREX ride comes with thoughtful in-car provisions to ensure your comfort, safety, and satisfaction.
        </p>
      </div>

      <div className="relative overflow-hidden lg:mt-4 py-3">
        <div className="flex animate-scroll whitespace-nowrap">
          {doubleTopRow.map((logo, index) => (
            <div key={`top-${index}`} className="inline-flex px-4">
              <img 
                src={logo} 
                alt={`Client logo ${index % topRowLogos.length + 1}`} 
                className="h-28 w-36 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden py-3">
        <div className="flex py-3 animate-scroll-reverse whitespace-nowrap">
          {doubleBottomRow.map((logo, index) => (
            <div key={`bottom-${index}`} className="inline-flex px-4">
              <img 
                src={logo} 
                alt={`Client logo ${index % bottomRowLogos.length + 1}`} 
                className="h-28 w-36 object-contain" 
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollReverse {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          display: inline-block;
        }
        .animate-scroll-reverse {
          animation: scrollReverse 20s linear infinite;
          display: inline-block;
        }
        .animate-scroll:hover, .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default Client;