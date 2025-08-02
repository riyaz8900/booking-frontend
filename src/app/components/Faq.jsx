"use client"
import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);
    
    const leftColumnFaqs = [
        {
            question: "What is Webflow and why is it the best website builder?",
            answer: "Webflow is a powerful no-code website builder that combines design, animation, and content management. It's considered one of the best because it offers visual development with clean code output."
        },
        {
            question: "How do I get started with your services?",
            answer: "Getting started is easy! Simply contact our team through our contact form or email, and we'll schedule a free consultation to discuss your project needs."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and bank transfers. Payment terms are discussed during project onboarding."
        },
         {
            question: "How do I get started with your services?",
            answer: "Getting started is easy! Simply contact our team through our contact form or email, and we'll schedule a free consultation to discuss your project needs."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and bank transfers. Payment terms are discussed during project onboarding."
        },
    ];

    const rightColumnFaqs = [
        {
            question: "What technology stack do you use?",
            answer: "We use modern technologies including React, Next.js, Node.js, and various databases depending on project requirements. We stay updated with the latest industry standards."
        },
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications may take 3-6 months. We provide a detailed timeline after our initial consultation."
        },
        {
            question: "Do you offer ongoing support?",
            answer: "Yes! We offer various support packages from basic maintenance to full-scale ongoing development. All our projects come with 30 days of free post-launch support."
        },
         {
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications may take 3-6 months. We provide a detailed timeline after our initial consultation."
        },
        {
            question: "Do you offer ongoing support?",
            answer: "Yes! We offer various support packages from basic maintenance to full-scale ongoing development. All our projects come with 30 days of free post-launch support."
        },
    ];

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const renderFaqColumn = (faqs, offset = 0) => {
        return (
            <div className='w-full mx-auto space-y-6'>
                {faqs.map((faq, index) => {
                    const globalIndex = index + offset;
                    const isActive = activeIndex === globalIndex;
                    
                    return (
                        <div 
                            key={globalIndex} 
                            className={`border-b border-gray-400 rounded-lg p-5 transition-all duration-300 ${isActive ? 'bg-gray-100' : ''}`}
                        >
                            <div 
                                className='flex justify-between items-center cursor-pointer '
                                onClick={() => handleClick(globalIndex)}
                            >
                                <strong className={`font-dmsans font-bold  border-gray-100 text-[21.32px] leading-[27.13px] w-full tracking-[0px] ${isActive ? 'text-[#0093FF]' : 'text-gray-700'}`}>
                                    {faq.question}
                                </strong>
                                <span className={`ml-4 ${isActive ? 'text-[#0093FF]' : 'text-gray-500'}`}>
                                    {isActive ? <FaMinus /> : <FaPlus />}
                                </span>
                            </div>
                            
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-96 mt-4' : 'max-h-0'}`}
                            >
                                <p className='text-gray-600'>{faq.answer}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className='container py-4 mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='flex justify-center items-center flex-col mb-12 text-center'>
                <img src='/___.png' className='py-2'/>
<h1 className='font-sans font-semibold md:text-[62.7px] text-xl leading-[83.9px] tracking-[-1.6px] text-gray-900 mb-4'>
                    Frequently Asked Questions
                </h1>         
                         <p className='font-sans font-normal text-[16px] leading-[34.08px] tracking-[0px] text-gray-600 max-w-2xl'>
                    Got questions? We've got answers! Find solutions to common queries about our services.
                </p>
            </div>
            
            <div className='flex flex-col lg:flex-row gap-8'>
                {renderFaqColumn(leftColumnFaqs, 0)}
                {renderFaqColumn(rightColumnFaqs, leftColumnFaqs.length)}
            </div>
        </div>
    );
}

export default Faq;