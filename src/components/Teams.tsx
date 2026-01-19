import React from 'react'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'

const Teams = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      position: 'CEO and Founder',
      image: '/assets/Teamsimage/Picture.png',
      experience: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
      linkedin: '#'
    },
    {
      name: 'Jane Doe',
      position: 'Director of Operations',
      image: '/assets/Teamsimage/Picture (1).png',
      experience: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
      linkedin: '#'
    },
    {
      name: 'Michael Brown',
      position: 'Senior SEO Specialist',
      image: '/assets/Teamsimage/Picture (2).png',
      experience: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
      linkedin: '#'
    },
    {
      name: 'Emily Johnson',
      position: 'PPC Manager',
      image: '/assets/Teamsimage/Picture (3).png',
      experience: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
      linkedin: '#'
    },
    {
      name: 'Brian Williams',
      position: 'Social Media Specialist',
      image: '/assets/Teamsimage/Picture (4).png',
      experience: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
      linkedin: '#'
    },
    {
      name: 'Sarah Kim',
      position: 'Content Creator',
      image: '/assets/Teamsimage/Picture (5).png',
      experience: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
      linkedin: '#'
    }
  ]

  return (
    <div className='lg:my-20 my-8'>
      {/* Header Section */}
      <div className='flex lg:flex-row flex-col gap-6 lg:gap-8 items-center lg:items-start my-6'>
        <h1 className='text-4xl text-black bg-[#B9FF66] font-semibold text-center mx-4 px-2 rounded-md w-fit'>
          Team
        </h1>
        <div className='leading-tight'>
          <p className='text-md hidden sm:block'>Meet the skilled and experienced team behind our</p>
          <p className='text-md hidden sm:block'>successful digital marketing strategies</p>

          {/* Show only on mobile */}
          <p className='block sm:hidden text-md text-center'>
            Meet the skilled and experienced team behind our successful digital marketing strategies
          </p>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 my-6 '>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className='border-2 cursor-pointer border-black rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow relative'
          >
            {/* LinkedIn Icon - Top Right */}
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className='absolute top-6 right-6 bg-black rounded-full p-2 hover:bg-[#B9FF66] transition-colors group'
            >
              <Linkedin className='w-5 h-5 text-[#B9FF66] group-hover:text-black' />
            </a>

            {/* Profile Section with Quatrefoil Image */}
            <div className='flex items-end gap-4 mb-6 pb-6 border-b border-black'>
              {/* Quatrefoil Container */}
              <div className='relative w-28 h-28 overflow-hidden'>
                {/* Circle shape with image */}
                {/* Conditional rendering: Image if exists, otherwise initial */}
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={130}
                    height={130}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className='w-full h-full flex items-center justify-center text-lg font-bold bg-[#B9FF66]'>
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>

              <div>
                <h3 className='text-xl font-semibold text-black'>{member.name}</h3>
                <p className='text-sm text-gray-700'>{member.position}</p>
              </div>
            </div>

            {/* Experience Description */}
            <p className='text-black text-sm leading-relaxed'>
              {member.experience}
            </p>
          </div>
        ))}
      </div>

      {/* See All Team Button */}
      <div className='flex justify-center lg:justify-end mt-8 px-4'>
        <button className='bg-gray-900 text-white w-full sm:w-auto max-w-md sm:max-w-none px-8 py-4 lg:px-16 lg:py-5 rounded-2xl hover:bg-gray-800 transition-colors'>
          See all team
        </button>
      </div>
    </div>
  )
}

export default Teams