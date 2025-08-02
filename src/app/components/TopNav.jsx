import React from 'react'

function TopNav() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between bg-white text-black px-4 py-3 gap-2'>
      <div className='text-sm md:text-base'>
        <a href="mailto:bookings@entrex.in" className='hover:text-blue-600 transition-colors'>
          bookings@entrex.in
        </a>
      </div>
      
      <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base'>
        <a href="tel:+914449530055" className='hover:text-blue-600 transition-colors whitespace-nowrap'>
          +91 44 4953 0055
        </a>
        <span className='hidden sm:inline'>|</span>
        <a href="tel:+919840027990" className='hover:text-blue-600 transition-colors whitespace-nowrap'>
          +91 98400 27990
        </a>
        <span className='hidden sm:inline'>|</span>
        <a href="tel:+919176781444" className='hover:text-blue-600 transition-colors whitespace-nowrap'>
          +91 91767 81444
        </a>
      </div>
    </div>
  )
}

export default TopNav