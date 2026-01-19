/* eslint-disable react/no-unescaped-entities */
'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const Contactus = () => {
  const [formType, setFormType] = useState<'sayHi' | 'quote'>('sayHi')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className=' my-10 lg:my-20 lg:px-4'>
      {/* Header Section */}
      <div className='flex lg:flex-row flex-col gap-4 lg:gap-8 items-center lg:items-start mb-8 lg:mb-16'>
        <h1 className='text-4xl text-black bg-[#B9FF66] font-semibold text-center mx-4 px-2 rounded-md w-fit'>
          Contact Us
        </h1>
        <div className='leading-tight'>
          <p className='text-md text-black hidden sm:block'>Connect with Us: Let's Discuss Your</p>
          <p className='text-md text-black hidden sm:block'>Digital Marketing Needs</p>
          
          {/* Show only on mobile */}
          <p className='block sm:hidden text-md text-black text-center'>
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className='bg-gray-100 rounded-3xl p-8 lg:p-12 flex lg:flex-row flex-col gap-8 items-center relative overflow-hidden'>
        {/* Left Side - Form */}
        <div className='w-full lg:w-1/2 z-10'>
          {/* Radio Buttons */}
          <div className='flex gap-8 mb-8'>
            <label className='flex items-center gap-3 cursor-pointer'>
              <input
                type='radio'
                name='formType'
                checked={formType === 'sayHi'}
                onChange={() => setFormType('sayHi')}
                className='w-6 h-6 accent-[#B9FF66]'
              />
              <span className='text-black text-md lg:text-lg'>Say Hi</span>
            </label>
            <label className='flex items-center gap-3 cursor-pointer'>
              <input
                type='radio'
                name='formType'
                checked={formType === 'quote'}
                onChange={() => setFormType('quote')}
                className='w-6 h-6 accent-[#B9FF66]'
              />
              <span className='text-black text-md lg:text-lg'>Get a Quote</span>
            </label>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className=' space-y-4 lg:space-y-6'>
            {/* Name Input */}
            <div>
              <label htmlFor='name' className='block text-black text-sm mb-2'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Name'
                className='w-full px-6 py-4 rounded-2xl border border-black bg-white text-black placeholder-gray-400 focus:outline-none focus:border-[#B9FF66]'
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor='email' className='block text-black text-sm mb-2'>
                Email*
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
                className='w-full px-6 py-4 rounded-2xl border border-black bg-white text-black placeholder-gray-400 focus:outline-none focus:border-[#B9FF66]'
                required
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor='message' className='block text-black text-sm mb-2'>
                Message*
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Message'
                rows={6}
                className='w-full px-6 py-4 rounded-2xl border border-black bg-white text-black placeholder-gray-400 focus:outline-none focus:border-[#B9FF66] resize-none'
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full bg-black text-white py-4 rounded-2xl hover:bg-gray-800 transition-colors font-medium text-lg'
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Image Illustration - Hidden on mobile, shown on desktop */}
        <div className='hidden lg:block absolute right-1 top-1/2 -translate-y-1/2'>
          <Image 
            src="https://i.ibb.co/5XTKWrFB/preview.webp" 
            alt="Contact illustration" 
            className='w-80 h-auto object-contain'
            width={320}
            height={236}
          />
        </div>
      </div>
    </div>
  )
}

export default Contactus