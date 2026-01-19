import React from 'react'
import Image from 'next/image'
import { Linkedin, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  const navLinks = ['About us', 'Services', 'Use Cases', 'Pricing', 'Blog']

  return (
    <footer className='bg-[#191A23] lg:rounded-t-4xl mt-10 lg:mt-20 -mx-4 md:px-12 lg:px-20 md:py-12 lg:py-12 py-4 relative z-20'>
      {/* Top Section - Logo, Navigation, Social Icons */}
      <div className='flex flex-col lg:flex-row justify-between items-center gap-8 mb-8 lg:mb-12'>
        {/* Logo */}
        <div className='flex items-center gap-2 lg:mt-0 mt-6'>
          <Image src='https://i.ibb.co/fWFPP3K/Property-1-Variant2-1.png' alt='Positivus Logo' width={180} height={120} />
        </div>

        {/* Navigation Links */}
        <nav className='flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10'>
          {navLinks.map((link) => (
            <a 
              key={link} 
              href='#' 
              className='text-white text-md underline hover:text-[#B9FF66] transition-colors'
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className='hidden lg:flex gap-4'>
          <a href='#' className='w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#B9FF66] transition-colors'>
            <Linkedin className='w-4 h-4 text-black' />
          </a>
          <a href='#' className='w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#B9FF66] transition-colors'>
            <Facebook className='w-4 h-4 text-black' />
          </a>
          <a href='#' className='w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#B9FF66] transition-colors'>
            <Twitter className='w-4 h-4 text-black' />
          </a>
        </div>
      </div>

      {/* Middle Section - Contact Info and Newsletter */}
      <div className='flex flex-col lg:flex-row justify-between items-start lg:items-stretch gap-8 mb-8'>
        {/* Contact Section */}
        <div className='w-full lg:w-auto mx-auto lg:mx-0 flex max-w-sm flex-col items-center lg:items-start text-center lg:text-left'>
          <h3 className='bg-[#B9FF66] text-black px-1 rounded text-lg font-medium inline-block mb-6'>
            Contact us:
          </h3>

          <div className='space-y-4 text-white'>
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>
              Address: 1234 Main St<br />
              Moonstone City, Stardust State 12345
            </p>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className='bg-[#292A32] rounded-2xl p-8 w-full lg:w-auto lg:self-stretch lg:flex lg:items-center'>
          <div className='w-full h-full flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <input
              type='email'
              placeholder='Email'
              className='bg-transparent border border-white rounded-xl px-5 text-white placeholder-gray-400 focus:outline-none focus:border-[#B9FF66] w-full sm:w-64 h-16'
            />
            <button className='bg-[#B9FF66] text-black text-lg px-6  rounded-xl hover:bg-lime-300 transition-colors whitespace-nowrap w-full sm:w-auto min-w-40 h-16'>
              Subscribe to news
            </button>
          </div>
        </div>

        {/* Mobile-only social icons placed below the newsletter (outside the card) */}
        <div className='w-full flex justify-center lg:hidden'>
          <div className='flex gap-4'>
            <a href='#' aria-label='LinkedIn' className='w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#B9FF66] transition-colors'>
              <Linkedin className='w-4 h-4 text-black' />
            </a>
            <a href='#' aria-label='Facebook' className='w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#B9FF66] transition-colors'>
              <Facebook className='w-4 h-4 text-black' />
            </a>
            <a href='#' aria-label='Twitter' className='w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#B9FF66] transition-colors'>
              <Twitter className='w-4 h-4 text-black' />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className='border-gray-500 mb-8' />

      {/* Bottom Section - Copyright and Privacy */}
      <div className='flex flex-col sm:flex-row justify-start items-center gap-4 text-white text-sm'>
        <span>© 2023 Positivus. All Rights Reserved.</span>
        <a href='#' className='underline hover:text-[#B9FF66] transition-colors'>
          Privacy Policy
        </a>
      </div>
    </footer>
  )
}

export default Footer
