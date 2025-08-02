"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import TopNav from './TopNav'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className='flex py-2 items-center justify-between px-4 sm:px-6 lg:px-8 relative'>
      <div>
        <Image src="/logo.png" width={140} height={140} alt="Company Logo"/>
      </div>
             
      {/* Desktop Navigation */}
      <div className='hidden md:block'>
        <ul className='flex gap-4 lg:gap-8  text-white items-center'>
          <li className='transition-colors '><a href="#">About Us</a></li>
          <li 
            className='transition-colors relative'
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <a href="#" className="cursor-pointer">Services</a>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 w-[800px] p-8 transition-all duration-300 ease-out ${
              showDropdown 
                ? 'opacity-100 translate-y-0 visible' 
                : 'opacity-0 -translate-y-2 invisible'
            }`}>
              {/* Triangle pointer */}
              <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45 transition-all duration-300 ease-out ${
                showDropdown ? 'opacity-100' : 'opacity-0'
              }`}></div>
                
                <div className="grid grid-cols-3 gap-8">
                  {/* Corporate Mobility Solutions */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-4 text-sm">Corporate Mobility Solutions</h3>
                    <ul className="space-y-3">
                      <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors block">Employee Transportation</a></li>
                      <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors block">Employee Trips</a></li>
                      <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors block">Executive Leasing</a></li>
                      <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors block">Roster Planning & Routing</a></li>
                      <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors block">Management Reporting</a></li>
                      <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors block">Systemized Billing</a></li>
                      <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors block">Transport Desk & Ticketing</a></li>
                    </ul>
                  </div>

                  {/* Event & Custom Travel */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-4 text-sm">Event & Custom Travel</h3>
                    <ul className="space-y-3">
                      <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors block">Events & Seminars</a></li>
                      <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors block">Elite Weddings</a></li>
                      <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors block">Family Events & Holidays</a></li>
                      <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors block">Customized Tours</a></li>
                    </ul>
                  </div>

                  {/* Tour & Rental Services */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-4 text-sm">Tour & Rental Services</h3>
                    <ul className="space-y-3">
                      <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors block">Pilgrim Tours</a></li>
                      <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors block">Package Tours</a></li>
                      <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors block">Premium Rent-a-Cab</a></li>
                      <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors block">Ticketing</a></li>
                    </ul>
                  </div>
                </div>
              </div>
          </li>
          <li className='transition-colors'><a href="#">Tour packages</a></li>
          <li className='transition-colors'><a href="#">Luxury car Rental</a></li>
          <li className='transition-colors'><a href="#">Clients</a></li>
          <li className='transition-colors'><a href="#">Contact Us</a></li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className='md:hidden text-2xl focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 bg-white z-50 transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex flex-col items-center justify-center h-full space-y-8'>
          <button 
            className='absolute top-4 right-4 text-2xl'
            onClick={() => setIsOpen(false)}
          >
            <FiX />
          </button>

          <div>
            <TopNav/>
          </div>
          
          <ul className='flex flex-col w-full gap-8 text-center'>
            <li className='transition-colors'><a href="#" onClick={() => setIsOpen(false)}>About Us</a></li>
            <li className='transition-colors'><a href="#" onClick={() => setIsOpen(false)}>Services</a></li>
            <li className='transition-colors'><a href="#" onClick={() => setIsOpen(false)}>Tour packages</a></li>
            <li className='transition-colors'><a href="#" onClick={() => setIsOpen(false)}>Luxury car Rental</a></li>
            <li className='transition-colors'><a href="#" onClick={() => setIsOpen(false)}>Clients</a></li>
            <li className='transition-colors'><a href="#" onClick={() => setIsOpen(false)}>Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar