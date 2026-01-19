'use client'

import Image from 'next/image'
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const Brandlogos = () => {
  const logos = [
    "/assets/brandlogos/Company logo.png",
    "/assets/brandlogos/Company logo-1.png",
    "/assets/brandlogos/Company logo-2.png",
    "/assets/brandlogos/Company logo-3.png",
    "/assets/brandlogos/Company logo-4.png",
    "/assets/brandlogos/Company logo-5.png",
  ]

  // Calculate precise measurements
  const logoCount = logos.length
  const logoWidth = 100
  const gap = 120
  const singleSetWidth = logoCount * (logoWidth + gap) - gap
  const controls = useAnimation()
  const [isPaused, setIsPaused] = useState(false)
  const touchResumeRef = useRef<number | null>(null)

  useEffect(() => {
    // start the continuous animation
    controls.start({
      x: -singleSetWidth,
      transition: { duration: 25, repeat: Infinity, ease: 'linear' }
    })

    return () => {
      // cleanup any pending resume timers
      if (touchResumeRef.current) window.clearTimeout(touchResumeRef.current)
    }
  }, [controls, singleSetWidth])

  const pause = () => {
    if (isPaused) return
    setIsPaused(true)
    controls.stop()
    if (touchResumeRef.current) {
      window.clearTimeout(touchResumeRef.current)
      touchResumeRef.current = null
    }
  }

  const resume = (delayMs = 0) => {
    if (touchResumeRef.current) {
      window.clearTimeout(touchResumeRef.current)
      touchResumeRef.current = null
    }
    if (delayMs > 0) {
      // fallback for touch devices where touchend may not fire reliably
      touchResumeRef.current = window.setTimeout(() => {
        setIsPaused(false)
        controls.start({ x: -singleSetWidth, transition: { duration: 25, repeat: Infinity, ease: 'linear' } })
        touchResumeRef.current = null
      }, delayMs)
      return
    }
    setIsPaused(false)
    controls.start({ x: -singleSetWidth, transition: { duration: 25, repeat: Infinity, ease: 'linear' } })
  }

  return (
    <div className='relative w-full overflow-hidden py-10'>
      {/* Left gradient */}
      <div className='absolute left-0 top-0 bottom-0 lg:w-40 w-20 bg-linear-to-r from-white via-white to-transparent z-10' />
      
      {/* Right gradient */}
      <div className='absolute right-0 top-0 bottom-0 lg:w-40 w-20 bg-linear-to-l from-white via-white to-transparent z-10' />

      <div className='flex'>
        <motion.div
          className='flex lg:gap-20 items-center'
          initial={{ x: 0 }}
          animate={controls}
        >
          {/* Triple the logos for smoother loop */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className='flex shrink-0 lg:px-8 px-6'
              onMouseEnter={pause}
              onMouseLeave={() => resume()}
              onTouchStart={() => { pause(); /* resume after 3s as fallback */ resume(3000) }}
              onTouchEnd={() => resume()}
              onFocus={pause}
              onBlur={() => resume()}
            >
              <Image
                src={logo}
                alt="Brand Logo"
                width={100}
                height={100}
                loading="lazy"
                className='grayscale hover:grayscale-0 cursor-pointer transition-all duration-300'
              />
            </div>
          ))}
         </motion.div>
       </div>
     </div>
   )
 }
 
 export default Brandlogos