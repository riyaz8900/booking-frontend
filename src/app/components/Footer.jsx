import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <div className="bg-white">
      <footer className="container mx-auto text-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ------------------Company Info ---------------------------------*/}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image 
                src='/logo.png' 
                alt="Company Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-black text-sm">
              We are one of the leading Travel operators in South India with our registered office at Madipakkam, Chennai. 
              We serve leading corporate clients in Chennai and Bangalore regions.
            </p>
          </div>

          {/*------------------------ Company Links -----------------------*/}
          <div className="space-y-4">
            <h1 className="text-lg font-semibold">Company</h1>
            <ul className="space-y-2 text-black">
              <li className="cursor-pointer hover:text-gray-600 transition">Home</li>
              <li className="cursor-pointer hover:text-gray-600 transition">About</li>
              <li className="cursor-pointer hover:text-gray-600 transition">Services</li>
              <li className="cursor-pointer hover:text-gray-600 transition">Contact</li>
              <li className="cursor-pointer hover:text-gray-600 transition">Compliance control</li>
              <li className="cursor-pointer hover:text-gray-600 transition">Security control</li>
            </ul>
          </div>

          {/*---------------------- Tours Links ------------------------------*/}
          <div className="space-y-4">
            <h1 className="text-lg font-semibold">Tours</h1>
            <ul className="space-y-2 text-black">
              <li className="cursor-pointer hover:text-gray-600 transition">Sales Software</li>
              <li className="cursor-pointer hover:text-gray-600 transition">Features</li>
              <li className="cursor-pointer hover:text-gray-600 transition">Privacy and security</li>
              <li className="cursor-pointer hover:text-gray-600 transition">Market Place</li>
              <li className="cursor-pointer hover:text-gray-600 transition">Status</li>
              <li className="cursor-pointer hover:text-gray-600 transition">API</li>
            </ul>
          </div>

          {/*-------------------- Contact Info --------------------------------*/}
          <div className="space-y-4">
            <h1 className="text-lg font-semibold">Contact</h1>
            <ul className="space-y-2 text-black">
              <li className="hover:text-gray-600 transition">
                ASK Towers 1st floor, 183-184, 3rd Main Rd,<br />
                Sri Sai Nagar, Thoraipakkam, Tamil Nadu 600096
              </li>
              <li className="hover:text-gray-600 transition">
                bookings@entrex.in
              </li>
              <li className="hover:text-gray-600 transition">
                +91 44 4953 0055
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/*------------------------ Copyright--------------------------- */}
      <div className='border-t border-gray-200'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className="flex flex-col md:flex-row justify-between items-center py-6 text-black text-sm gap-4">
            <div className="order-1 md:order-none">
              <p>Copyright © 2025 Entrex. All Rights Reserved.</p>
            </div>
            <div className="order-3 md:order-none w-full md:w-auto mt-4 md:mt-0">
              <ul className='flex flex-wrap justify-center items-center gap-4'>
                <li className="cursor-pointer hover:text-gray-600 transition">Terms of service</li>
                <li className="cursor-pointer hover:text-gray-600 transition">Privacy policy</li>
                <li className="cursor-pointer hover:text-gray-600 transition">Cookies</li>
              </ul>
            </div>
            <div className='flex items-center gap-4 order-2 md:order-none'>
              <Image src='/Twitter.png' alt="Twitter" width={20} height={20} className="cursor-pointer hover:opacity-75 transition" />
              <Image src='/Facebook.png' alt="Facebook" width={20} height={20} className="cursor-pointer hover:opacity-75 transition" />
              <Image src='/Linkedin.png' alt="LinkedIn" width={20} height={20} className="cursor-pointer hover:opacity-75 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;