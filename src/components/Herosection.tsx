import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Herosection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20">
      {/* LEFT */}
      <div className="flex flex-col gap-6 lg:py-8 lg:mr-11 lg:w-4/5">
        {/* Heading */}
        <div className="">
          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
            Navigating the
          </h1>
          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
            digital landscape
          </h1>
          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
            for success
          </h1>
        </div>

        {/* IMAGE (mobile + tablet: right after heading) */}
        <div className="block lg:hidden">
          <Image
            src="https://i.ibb.co/8nzTvnZv/Megaphone-hero-section.webp"
            alt="hero-right"
            width={1200}
            height={700}
            className="w-full h-auto"
          />
        </div>

        {/* Text */}
        <div className="">
          {/* Mobile: combined text */}
          <p className="lg:hidden text-sm md:text-base">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>

          {/* Tablet + Desktop: separate lines */}
          <div className="hidden lg:block">
            <p className="text-sm md:text-base lg:text-md">
              Our digital marketing agency helps businesses
            </p>
            <p className="text-sm md:text-base lg:text-md">
              grow and succeed online through a range of
            </p>
            <p className="text-sm md:text-base lg:text-md">
              services including SEO, PPC, social media marketing,
            </p>
            <p className="text-sm md:text-base lg:text-md">
              and content creation.
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="border cursor-pointer mx-auto lg:mx-0 px-8 border-black bg-gray-900 hover:text-lime-300 text-white md:px-8 py-3 md:py-4 rounded-lg w-fit">
          <Link href="">Book a consultation</Link>
        </button>
      </div>

      {/* RIGHT IMAGE (desktop only — unchanged layout) */}
      <div className="hidden lg:block p-2">
        <Image
          src="https://i.ibb.co/8nzTvnZv/Megaphone-hero-section.webp"
          alt="hero-right"
          width={1200}
          height={700}
        />
      </div>
    </section>
  )
}

export default Herosection
