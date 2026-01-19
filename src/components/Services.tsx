import React from 'react'
import Link from 'next/link'
import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'

const Services = () => {

    return (
        <div className='mb-4 lg:my-10'>
            {/* services upper line */}
            <div className='flex lg:flex-row flex-col lg:px-4 gap-8 items-center lg:flex-start lg:my-10'>
                <h1 className='text-4xl text-black bg-[#B9FF66] font-semibold text-center rounded-md w-fit'>
                    Services
                </h1>
                <div className='leading-tight'>
                    {/* Show on tablet/desktop, hide on mobile */}
                    <p className='hidden sm:block'>At our digital marketing agency, we offer a range of services to</p>
                    <p className='hidden sm:block'>help businesses grow and succeed online. These services include:</p>

                    {/* Show only on mobile, hide on tablet/desktop */}
                    <p className='block sm:hidden text-center'>
                        At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
                    </p>
                </div>
            </div>

            {/* provided Services */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12 py-6 lg:py-10">
                {/* service 1 */}
                <div className="flex lg:flex-row flex-col justify-between items-center py-4 lg:py-8 rounded-4xl bg-gray-100 border-black border-b-4 border cursor-pointer">
                    {/* Title and Button wrapper for desktop */}
                    <div className="flex flex-col px-6 lg:gap-20 w-full lg:w-auto">
                        <div className="flex flex-col ">
                            <h3 className="text-2xl font-medium bg-[#B9FF66] text-black p-1 rounded-md w-fit">Search engine</h3>
                            <h3 className='text-2xl font-medium bg-[#B9FF66] text-black p-1 rounded-md w-fit'>optimization</h3>
                        </div>
                        
                        {/* Button - hidden on mobile and tablet, shown on desktop only */}
                        <Link
                            href="#"
                            className="text-black hover:scale-102 transition-all duration-300 items-center gap-2 hidden lg:inline-flex"
                        >
                            <MoveUpRight className="w-8 h-8 p-1 hidden lg:block rounded-full text-[#B9FF66] bg-black " />
                            Learn more
                        </Link>
                    </div>

                    {/* Button and Image side by side on mobile, Image only on desktop */}
                    <div className="flex flex-row px-6 gap-2 md:gap-4 mt-4 lg:mt-0 items-center w-full lg:w-auto">
                        {/* Button - shown on mobile, hidden on desktop */}
                        <Link
                            href="#"
                            className="text-black hover:scale-101 hover:font-semibold inline-flex items-center gap-2 flex-1 mt-16 lg:hidden"
                        >
                            <MoveUpRight className="w-8 h-8 p-1 rounded-full text-[#B9FF66] bg-black " />
                            Learn more
                        </Link>

                        {/* Adjust image width for desktop view: lg:w-48, lg:w-56, lg:w-64, etc. */}
                        <Image
                            src="/assets/serviceimages/tokyo-magnifier-web-search-with-elements 2.png"
                            alt="Service 1"
                            width={350}  
                            height={350}
                            className="lg:px-10 rounded-lg w-34 h-28 md:w-44 md:h-44 lg:w-60 lg:h-36" 
                        />
                    </div>
                </div>

                {/* service 2 */}
                <div className="flex lg:flex-row flex-col justify-between items-center py-4 lg:py-8 rounded-4xl bg-[#B9FF66] border-black border-b-4 border cursor-pointer">
                    {/* Title and Button wrapper for desktop */}
                    <div className="flex flex-col px-6 lg:gap-20 w-full lg:w-auto">
                        <div className="flex flex-col ">
                            <h3 className="text-2xl font-medium bg-white text-black p-1 rounded-md w-fit">Pay-Per-Click</h3>
                            <h3 className='text-2xl font-medium bg-white text-black p-1 rounded-md w-fit'>Advertising</h3>
                        </div>
                        
                        {/* Button - hidden on mobile and tablet, shown on desktop only */}
                        <Link
                            href="#"
                            className="text-black hover:scale-102 transition-all duration-300 items-center gap-2 hidden lg:inline-flex"
                        >
                            <MoveUpRight className="w-8 h-8 p-1 hidden lg:block rounded-full text-[#B9FF66] bg-black" />
                            Learn more
                        </Link>
                    </div>

                    {/* Button and Image side by side on mobile, Image only on desktop */}
                    <div className="flex flex-row px-6 gap-2 md:gap-4 mt-4 lg:mt-0 items-center w-full lg:w-auto">
                        {/* Button - shown on mobile, hidden on desktop */}
                        <Link
                            href="#"
                            className="text-black hover:scale-101 hover:font-semibold inline-flex items-center gap-2 flex-1 mt-16 lg:hidden"
                        >
                            <MoveUpRight className="w-8 h-8 p-1 rounded-full text-[#B9FF66] bg-black " />
                            Learn more
                        </Link>

                        {/* Adjust image width for desktop view: lg:w-48, lg:w-56, lg:w-64, etc. */}
                        <Image
                            src="/assets/serviceimages/tokyo-selecting-a-value-in-the-browser-window 1.png"
                            alt="Service 2"
                            width={350}  
                            height={350}
                            className="lg:px-10 rounded-lg w-34 h-28 md:w-44 md:h-44 lg:w-60 lg:h-36" 
                        />
                    </div>
                </div>

                {/* service 3 */}
                <div className="flex lg:flex-row flex-col justify-between items-center py-4 lg:py-8 rounded-4xl bg-gray-900 border-black border-b-4 border cursor-pointer">
                    {/* Title and Button wrapper for desktop */}
                    <div className="flex flex-col px-6 lg:gap-20 w-full lg:w-auto">
                        <div className="flex flex-col ">
                            <h3 className="text-2xl font-medium bg-white text-black p-1 rounded-md w-fit">Social Media</h3>
                            <h3 className='text-2xl font-medium bg-white text-black p-1 rounded-md w-fit'>Marketing</h3>
                        </div>
                        
                        {/* Button - hidden on mobile and tablet, shown on desktop only */}
                        <Link
                            href="#"
                            className="text-white hover:scale-102 transition-all duration-300 items-center gap-2 hidden lg:inline-flex"
                        >
                            <MoveUpRight className="w-8 h-8 p-1 hidden lg:block rounded-full bg-white text-black " />
                            Learn more
                        </Link>
                    </div>

                    {/* Button and Image side by side on mobile, Image only on desktop */}
                    <div className="flex flex-row px-6 gap-2 md:gap-4 mt-4 lg:mt-0 items-center w-full lg:w-auto">
                        {/* Button - shown on mobile, hidden on desktop */}
                        <Link
                            href="#"
                            className="text-white hover:scale-101 hover:font-semibold inline-flex items-center gap-2 flex-1 mt-16 lg:hidden"
                        >
                            <MoveUpRight className="w-8 h-8 p-1 rounded-full bg-white text-black" />
                            Learn more
                        </Link>

                        {/* Adjust image width for desktop view: lg:w-48, lg:w-56, lg:w-64, etc. */}
                        <Image
                            src="/assets/serviceimages/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png"
                            alt="Service 3"
                            width={350}
                            height={350}
                            className="lg:px-10 rounded-lg w-34 h-28 md:w-44 md:h-44 lg:w-60 lg:h-36"
                        />
                    </div>
                </div>

                {/* service 4 */}
                <div className="flex lg:flex-row flex-col justify-between items-center py-4 lg:py-8 rounded-4xl bg-gray-100 border-black border-b-4 border cursor-pointer">
                    {/* Title and Button wrapper for desktop */}
                    <div className="flex flex-col px-6 lg:gap-20 w-full lg:w-auto">
                        <div className="flex flex-col ">
                            <h3 className="text-2xl font-medium bg-[#B9FF66] text-black p-1 rounded-md w-fit">Email</h3>
                            <h3 className='text-2xl font-medium bg-[#B9FF66] text-black p-1 rounded-md w-fit'>Marketing</h3>
                        </div>
                        
                        {/* Button - hidden on mobile and tablet, shown on desktop only */}
                        <Link
                            href="#"
                            className="text-black hover:scale-102 transition-all duration-300 items-center gap-2 hidden lg:inline-flex"
                        >
                            <MoveUpRight className="w-8 h-8 p-1 hidden lg:block rounded-full text-[#B9FF66] bg-black" />
                            Learn more
                        </Link>
                    </div>

                    {/* Button and Image side by side on mobile, Image only on desktop */}
                    <div className="flex flex-row px-6 gap-2 md:gap-4 mt-4 lg:mt-0 items-center w-full lg:w-auto">
                        {/* Button - shown on mobile, hidden on desktop */}
                        <Link
                            href="#"
                            className="text-black hover:scale-101 hover:font-semibold inline-flex items-center gap-2 flex-1 mt-16 lg:hidden"
                        >
                            <MoveUpRight className="w-8 h-8 p-1 rounded-full text-[#B9FF66] bg-black " />
                            Learn more
                        </Link>

                        {/* Adjust image width for desktop view: lg:w-48, lg:w-56, lg:w-64, etc. */}
                        <Image
                            src="/assets/serviceimages/tokyo-sending-messages-from-one-place-to-another 1.png"
                            alt="Service 4"
                            width={350}
                            height={350}
                            className="lg:px-10 rounded-lg w-34 h-28 md:w-44 md:h-44 lg:w-60 lg:h-36"
                        />
                    </div>
                </div>

                {/* service 5 */}
                <div className="flex lg:flex-row flex-col justify-between items-center py-4 lg:py-8 rounded-4xl bg-[#B9FF66] border-black border-b-4 border cursor-pointer">
                    {/* Title and Button wrapper for desktop */}
                    <div className="flex flex-col px-6 lg:gap-20 w-full lg:w-auto">
                        <div className="flex flex-col ">
                            <h3 className="text-2xl font-medium bg-white text-black p-1 rounded-md w-fit">Content</h3>
                            <h3 className='text-2xl font-medium bg-white text-black p-1 rounded-md w-fit'>Creation</h3>
                        </div>
                        
                        {/* Button - hidden on mobile and tablet, shown on desktop only */}
                        <Link
                            href="#"
                            className="text-black hover:scale-102 transition-all duration-300 items-center gap-2 hidden lg:inline-flex"
                        >
                            <MoveUpRight className="w-8 h-8 p-1 hidden lg:block rounded-full text-[#B9FF66] bg-black " />
                            Learn more
                        </Link>
                    </div>

                    {/* Button and Image side by side on mobile, Image only on desktop */}
                    <div className="flex flex-row px-6 gap-2 md:gap-4 mt-4 lg:mt-0 items-center w-full lg:w-auto">
                        {/* Button - shown on mobile, hidden on desktop */}
                        <Link
                            href="#"
                            className="text-black hover:scale-101 hover:font-semibold inline-flex items-center gap-2 flex-1 mt-16 lg:hidden"
                        >
                            <MoveUpRight className="w-8 h-8 p-1 rounded-full text-[#B9FF66] bg-black " />
                            Learn more
                        </Link>

                        {/* Adjust image width for desktop view: lg:w-48, lg:w-56, lg:w-64, etc. */}
                        <Image
                            src="/assets/serviceimages/tokyo-many-browser-windows-with-different-information 1.png"
                            alt="Service 5"
                            width={350}
                            height={350}
                            className="lg:px-10 rounded-lg w-34 h-28 md:w-44 md:h-44 lg:w-60 lg:h-36"
                        />
                    </div>
                </div>

                {/* service 6 */}
                <div className="flex lg:flex-row flex-col justify-between items-center py-4 lg:py-8 rounded-4xl bg-gray-900 border-black border-b-4 border cursor-pointer">
                    {/* Title and Button wrapper for desktop */}
                    <div className="flex flex-col px-6 lg:gap-20 w-full lg:w-auto">
                        <div className="flex flex-col ">
                            <h3 className="text-2xl font-medium bg-[#B9FF66] text-black p-1 rounded-md w-fit">Analytics and</h3>
                            <h3 className='text-2xl font-medium bg-[#B9FF66] text-black p-1 rounded-md w-fit'>Tracking</h3>
                        </div>
                        
                        {/* Button - hidden on mobile and tablet, shown on desktop only */}
                        <Link
                            href="#"
                            className="text-white hover:scale-102 transition-all duration-300 items-center gap-2 hidden lg:inline-flex"
                        >
                            <MoveUpRight className="w-8 h-8 p-1 hidden lg:block rounded-full bg-white text-black " />
                            Learn more
                        </Link>
                    </div>

                    {/* Button and Image side by side on mobile, Image only on desktop */}
                    <div className="flex flex-row px-6 gap-2 md:gap-4 mt-4 lg:mt-0 items-center w-full lg:w-auto">
                        {/* Button - shown on mobile, hidden on desktop */}
                        <Link
                            href="#"
                            className="text-white hover:scale-101 hover:font-semibold inline-flex items-center gap-2 flex-1 mt-16 lg:hidden"
                        >
                            <MoveUpRight className="w-8 h-8 p-1 rounded-full bg-white text-black " />
                            Learn more
                        </Link>

                        {/* Adjust image width for desktop view: lg:w-48, lg:w-56, lg:w-64, etc. */}
                        <Image
                            src="/assets/serviceimages/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png"
                            alt="Service 6"
                            width={350}
                            height={350}
                            className="lg:px-10 rounded-lg w-34 h-28 md:w-44 md:h-44 lg:w-60 lg:h-36"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services