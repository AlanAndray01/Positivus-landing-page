'use client'

import React, { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

const WorkflowSection = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const workflows = [
    {
      number: '01',
      title: 'Consultation',
      description:
        'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
      number: '02',
      title: 'Research and Strategy Development',
      description:
        'Our team conducts comprehensive market research and develops a customized strategy aligned with your business objectives and target audience.',
    },
    {
      number: '03',
      title: 'Implementation',
      description:
        'We execute the strategic plan with precision, deploying campaigns across chosen channels and ensuring all elements are optimized for maximum impact.',
    },
    {
      number: '04',
      title: 'Monitoring and Optimization',
      description:
        'We continuously track performance metrics, analyze data, and make data-driven adjustments to improve campaign effectiveness and ROI.',
    },
    {
      number: '05',
      title: 'Reporting and Communication',
      description:
        'Regular reports keep you informed about campaign performance, insights, and recommendations for ongoing success.',
    },
    {
      number: '06',
      title: 'Continual Improvement',
      description:
        'We refine and enhance strategies based on performance data and market trends to ensure sustained growth and competitive advantage.',
    },
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="w-full my-2 lg:py-12 md:py-12 lg:px-0 lg:max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-8 mb-4 md:mb-16">
        <div className="bg-[#B9FF66] px-4 py-2 rounded-lg">
          <h2 className="text-black font-semibold text-2xl md:text-3xl whitespace-nowrap">
            Our Working Process
          </h2>
        </div>

        <div>
          <p className="text-black text-base md:text-lg">
            Step-by-Step Guide to Achieving
          </p>
          <p className="text-black flex justify-center sm:justify-normal text-base md:text-lg">
            Your Business Goals
          </p>
        </div>
      </div>

      {/* Accordion */}
      <div className="space-y-4 md:space-y-6">
        {workflows.map((workflow, index) => (
          <div
            key={index}
            className={`border border-black border-b-4 rounded-2xl md:rounded-3xl shadow-lg transition-all duration-300 ${openIndex === index ? 'bg-[#B9FF66]' : 'bg-gray-100'
              }`}
          >
            {/* Header */}
            <button
              type="button"
              className="w-full flex items-center justify-between px-4 py-5 md:px-8 md:py-8 lg:px-10 lg:py-10"
            >
              <div className="flex items-center gap-4 md:gap-6 text-left">
                <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black">
                  {workflow.number}
                </span>
                <h3 className="text-md md:text-xl lg:text-2xl font-medium text-black">
                  {workflow.title}
                </h3>
              </div>

              {/* ICON CONTROLS ACCORDION */}
              <div
                onClick={() => toggleAccordion(index)}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black cursor-pointer bg-gray-100 flex items-center justify-center shrink-0"
              >
                {openIndex === index ? (
                  <Minus className="w-5 h-5 md:w-6 md:h-6 text-black" />
                ) : (
                  <Plus className="w-5 h-5 md:w-6 md:h-6 text-black" />
                )}
              </div>
            </button>

            {/* Content */}
            {openIndex === index && (
              <div className="px-4 md:px-8 lg:px-10 pb-6 md:pb-8">
                <hr className="border-black mb-4 md:mb-6" />
                <p className="text-black text-base md:text-lg leading-relaxed">
                  {workflow.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkflowSection
