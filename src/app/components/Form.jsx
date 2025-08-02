import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    selectedDate: '',
    selectedTime: '',
    adults: '1 Adult',
    children: '0 Children',
    message: ''
  });

  const [openDropdown, setOpenDropdown] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      selectedDate: '',
      selectedTime: '',
      adults: '1 Adult',
      children: '0 Children',
      message: ''
    });
    setOpenDropdown(null);
    setError(null);
    setSuccess(null);
  };

  const extractNumber = (str) => {
    return parseInt(str.match(/\d+/)[0]) || 0;
  };

  const handleBookNow = async () => {
    if (!formData.fullName || !formData.phoneNumber || !formData.emailAddress || 
        !formData.selectedDate || !formData.selectedTime) {
      setError('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.emailAddress)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const bookingPayload = {
        ...formData,
        adults: extractNumber(formData.adults),
        children: extractNumber(formData.children)
      };

      const response = await fetch('https://backend-booking-b6mr.onrender.com/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingPayload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to book ride');
      }

      setSuccess('Ride booked successfully! We will contact you shortly.');
      toast.success('Ride booked successfully! We will contact you shortly.')
      console.log('Booking successful:', data);
      handleReset();
    } catch (error) {
      console.error('Error booking ride:', error);
      toast.error('Failed to book ride. Please try again.')
      setError(error.message || 'Failed to book ride. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const selectOption = (field, value) => {
    handleInputChange(field, value);
    setOpenDropdown(null);
  };

  const timeOptions = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'
  ];

  const adultOptions = ['1 Adult', '2 Adults', '3 Adults', '4 Adults', '5+ Adults'];
  const childrenOptions = ['0 Children', '1 Child', '2 Children', '3 Children', '4+ Children'];

  return (
    <div className="flex items-center justify-center md:p-4 p-2" 
         style={{
           backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h100v100H0z" fill="%23666"/%3E%3C/svg%3E")',
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      <div className="w-full max-w-2xl">
        <div className="bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 md:p-8 p-3 rounded-3xl shadow-2xl backdrop-blur-sm">
          <h1 className="text-white text-2xl font-bold mb-6 text-center">
            Book Your Ride Instantly
          </h1>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          
          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
              {success}
            </div>
          )}
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Email Address *"
                value={formData.emailAddress}
                onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="relative">
                <input
                  type="date"
                  value={formData.selectedDate}
                  onChange={(e) => handleInputChange('selectedDate', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown('time')}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white text-left focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent flex items-center justify-between"
                  disabled={!formData.selectedDate}
                >
                  <span className={formData.selectedTime ? 'text-white' : 'text-white/80'}>
                    {formData.selectedTime || 'Select Time'}
                  </span>
                  <ChevronDown className="w-4 h-4 text-white/80" />
                </button>
                
                {openDropdown === 'time' && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg max-h-48 overflow-y-auto z-10">
                    {timeOptions.map((time) => (
                      <button
                        key={time}
                        onClick={() => selectOption('selectedTime', time)}
                        className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none first:rounded-t-lg last:rounded-b-lg"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown('adults')}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white text-left focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent flex items-center justify-between"
                >
                  <span>{formData.adults}</span>
                  <ChevronDown className="w-4 h-4 text-white/80" />
                </button>
                
                {openDropdown === 'adults' && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-10">
                    {adultOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => selectOption('adults', option)}
                        className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none first:rounded-t-lg last:rounded-b-lg"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown('children')}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white text-left focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent flex items-center justify-between"
                >
                  <span>{formData.children}</span>
                  <ChevronDown className="w-4 h-4 text-white/80" />
                </button>
                
                {openDropdown === 'children' && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-10">
                    {childrenOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => selectOption('children', option)}
                        className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none first:rounded-t-lg last:rounded-b-lg"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="relative">
              <textarea
                placeholder="Any special requirements or notes"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows="3"
                className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent resize-none"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-3 pt-4">
              <button
                type="button"
                onClick={handleReset}
                disabled={isLoading}
                className="flex-1 py-3 px-4 rounded-full border-2 border-white/50 text-white font-semibold hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 disabled:opacity-50"
              >
                RESET
              </button>
              <button
                type="button"
                onClick={handleBookNow}
                disabled={isLoading}
                className="flex-1 py-3 px-4 rounded-full bg-white text-orange-500 font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 shadow-lg disabled:opacity-50 flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    PROCESSING...
                  </>
                ) : (
                  "LET'S BOOK NOW"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}