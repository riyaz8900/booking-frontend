"use client"
import React, { useState } from 'react';
import toast from 'react-hot-toast';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Select project type',
    budget: 'Select project budget',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || 
        formData.service === 'Select project type' || 
        formData.budget === 'Select project budget') {
      setError('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);
// https://backend-booking-b6mr.onrender.com  http://localhost:8080/api/contact
    try {
      const response = await fetch('https://backend-booking-b6mr.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }

      setSuccess('Thank you for your message! We will contact you soon.');
      toast.success('Thank you for your message! We will contact you soon.')
      setFormData({
        name: '',
        email: '',
        service: 'Select project type',
        budget: 'Select project budget',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to submit form. Please try again.')
      setError(error.message || 'Failed to submit form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto  py-16 flex flex-col md:flex-row gap-12 justify-center ">
      <div className="w-full md:w-1/3 ">
        <h2 className="lg:text-[82.71px] text-xl font-bold leading-none tracking-normal font-['Inter']">
          Let's Talk
        </h2>
        <div>
          <h3 className="md:text-[41.36px] text-xl mb-3 font-bold leading-none tracking-normal">
            Email
          </h3>
          <p className="text-[20.68px] font-normal leading-none tracking-normal text-gray-700">
            bookings@entrex.in
          </p>
        </div>

        <div>
          <h3 className="md:text-[41.36px] text-xl mb-3 font-bold leading-none tracking-normal">
            Socials
          </h3>
          <ul className="space-y-2">
            <li className="text-[20.68px] font-normal leading-none tracking-normal text-gray-700">
              Instagram
            </li>
            <li className="text-[20.68px] font-normal leading-none tracking-normal text-gray-700">
              Twitter
            </li>
            <li className="text-[20.68px] font-normal leading-none tracking-normal text-gray-700">
              Facebook
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full md:w-1/3 space-y-4">
        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}
        
        {success && (
          <div className="p-3 bg-green-100 text-green-700 rounded-lg text-sm">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full border border-gray-300 px-4 py-2 bg-white text-sm rounded"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full border border-gray-300 px-4 py-2 bg-white text-sm rounded"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">What service are you interested in *</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 bg-white text-sm rounded"
              required
            >
              <option value="Select project type">Select project type</option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="Marketing">Marketing</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Budget *</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 bg-white text-sm rounded"
              required
            >
              <option value="Select project budget">Select project budget</option>
              <option value="$1,000 - $5,000">$1,000 - $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000+">$10,000+</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your message"
              className="w-full border border-gray-300 px-4 py-2 bg-white text-sm rounded"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-3 rounded text-sm font-medium hover:bg-gray-800 transition flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                SUBMITTING...
              </>
            ) : (
              "SUBMIT"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;