/* eslint-disable react/no-unescaped-entities */
'use client'

import React, { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Speed control: lower number = faster, higher number = slower (in milliseconds)
  const autoScrollSpeed = 5000 // 5 seconds - adjust this to change speed

  const testimonials = [
    {
      message: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "John Smith",
      title: "Marketing Director at XYZ Corp"
    },
    {
      message: "Working with Positivus has helped us achieve meaningful improvements in website engagement and lead acquisition. Their team is efficient, supportive, and always focused on outcomes that matter. We're impressed with their work and strongly recommend Positivus to any company looking to enhance its online presence.",
      name: "Sarah Johnson",
      title: "CEO at ABC Solutions"
    },
    {
      message: "Our experience with Positivus over the past year has been extremely positive, with measurable growth in both website traffic and conversions. Their professionalism and attention to detail stand out, and they consistently deliver on their promises. We highly recommend Positivus to organizations serious about expanding their online reach.",
      name: "Michael Chen",
      title: "Founder at Tech Innovate"
    },
    {
      message: "After working with Positivus for several months, our online traffic and lead quality have improved noticeably. The team communicates clearly, responds quickly, and shows a real commitment to our goals. We're very satisfied with the results and confidently recommend Positivus to companies seeking sustainable online growth.",
      name: "Emily Rodriguez",
      title: "VP of Marketing at Global Brands"
    },
    {
      message: "We partnered with Positivus over the last year and quickly noticed a strong improvement in our website visibility and inbound leads. Their team is reliable, proactive, and consistently focused on delivering real results. We genuinely appreciate their dedication and would recommend Positivus to any business aiming to strengthen its digital presence.",
      name: "David Thompson",
      title: "Director at Enterprise Co"
    }
  ]

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
      }, autoScrollSpeed)

      return () => clearInterval(interval)
    }
  }, [isPaused, testimonials.length])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className='lg:px-0'>
      {/* Header Section */}
      <div className='flex lg:flex-row flex-col gap-6 lg:gap-8 items-center lg:items-start lg:mb-16 mb-4'>
        <h1 className='text-4xl text-black bg-[#B9FF66] font-semibold text-center mx-4 px-2 rounded-md w-fit'>
          Testimonials
        </h1>
        <div className='leading-tight'>
          <p className='text-md text-black hidden sm:block'>Hear from Our Satisfied Clients: Read Our Testimonials</p>
          <p className='text-md text-black hidden sm:block'>to Learn More about Our Digital Marketing Services</p>

          {/* Show only on mobile */}
          <p className='block sm:hidden text-md text-black text-center'>
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
          </p>
        </div>
      </div>

      <div 
        className='my-8 lg:my-20 px-2 lg:px-4 bg-[#191A23] py-8 lg:py-16 rounded-3xl'
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Testimonial Card */}
        <div className='overflow-hidden'>
          <div 
            className='flex transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className='min-w-full flex justify-center px-2 lg:px-0'>
                {/* Your exact div code goes here */}
                <div className='max-w-4xl w-full lg:mx-58 mb-6'>
                  <div className='relative'>
                    {/* Speech Bubble with consistent height */}
                    <div className='bg-[#191A23] border-2 border-[#B9FF66] rounded-3xl p-6 md:p-8 lg:p-12 relative h-78 md:h-76 lg:h-70 flex items-center'>
                      <p className='text-white text-sm md:text-lg leading-relaxed overflow-y-auto'>
                        "{testimonial.message}"
                      </p>
                      
                      {/* Speech Bubble Pointer */}
                      <div className='absolute -bottom-3.5 md:-bottom-4.5 lg:-bottom-4.5 left-8 md:left-10 lg:left-12 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-[#191A23] border-l-2 border-b-2 border-[#B9FF66] transform rotate-315'></div>
                    </div>

                    {/* Name and Title */}
                    <div className='mt-6 md:mt-7 lg:mt-8 ml-8 md:ml-10 lg:ml-14'>
                      <h3 className='text-[#B9FF66] text-lg md:text-xl font-semibold'>{testimonial.name}</h3>
                      <p className='text-white text-sm mt-1'>{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className='flex items-center justify-center gap-20 md:gap-40 lg:gap-60 mt-8 lg:mt-20'>
          {/* Previous Button */}
          <button 
            onClick={handlePrevious}
            className='text-gray-400 hover:text-white cursor-pointer active:text-white transition-colors'
            aria-label='Previous testimonial'
          >
            <ArrowLeft className='w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8' />
          </button>

          {/* Dots Indicator */}
          <div className='flex gap-2 md:gap-3'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors cursor-pointer ${
                  index === currentIndex ? 'bg-[#B9FF66]' : 'bg-white'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button 
            onClick={handleNext}
            className='text-gray-400 hover:text-white cursor-pointer active:text-white transition-colors'
            aria-label='Next testimonial'
          >
            <ArrowRight className='w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials