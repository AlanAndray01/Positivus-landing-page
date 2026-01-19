import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const CTAProve = () => {
    return (
        <div className='my-6 lg:my-20'>
            <div className='flex lg:flex-row flex-col px-1 gap-8 items-center lg:flex-start my-6 lg:mb-16'>
                <h1 className='text-4xl text-black bg-[#B9FF66] font-semibold text-center mx-4 px-2 rounded-md w-fit'>Case Studies</h1>
                <div className='leading-tight'>
                    <p className='text-md hidden sm:block text-black'>Explore Real-Life Examples of Our Proven Digital Marketing </p>
                    <p className='text-md hidden sm:block text-black'>Success through Our Case Studies</p>
                    {/* Show only on mobile, hide on tablet/desktop */}
                    <p className='block sm:hidden lg:text-lg text-md text-center text-black'>
                        Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
                    </p>
                </div>

            </div>
            <div className='my-2 bg-white md:bg-[#191A23] rounded-3xl py-2 md:py-10 px-2 md:px-0'>
                <div 
                  className='md:grid md:grid-cols-3 gap-8 flex overflow-x-auto md:overflow-x-visible snap-x snap-mandatory'
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                >
                  <style>{`
                    [data-ctaprove-cards]::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>
                    {/* Card 1 */}
                    <div className='flex flex-col justify-between md:border-r ml-0 md:ml-2 border-0 md:border-white/80 px-12 min-w-full md:min-w-0 snap-center bg-[#191A23] md:bg-transparent rounded-4xl md:rounded-none py-6 md:py-0'>
                        <p className='text-white text-md leading-relaxed mb-6'>
                            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                        </p>
                        <button className='flex items-center gap-2 cursor-pointer text-[#B9FF66] text-base hover:gap-3 transition-all'>
                            Learn more <ArrowUpRight size={20} />
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className='flex flex-col justify-between md:border-r border-0 md:border-white/80 px-12 min-w-full md:min-w-0 snap-center bg-[#191A23] md:bg-transparent rounded-4xl md:rounded-none py-6 md:py-0'>
                        <p className='text-white text-md leading-relaxed mb-6'>
                            For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
                        </p>
                        <button className='flex items-center gap-2 cursor-pointer text-[#B9FF66] text-base hover:gap-3 transition-all'>
                            Learn more <ArrowUpRight size={20} />
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className='flex flex-col justify-between mr-0 md:mr-6 px-12 min-w-full md:min-w-0 snap-center bg-[#191A23] md:bg-transparent rounded-4xl md:rounded-none py-6 md:py-0'>
                        <p className='text-white text-md leading-relaxed mb-6 '>
                            For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
                        </p>
                        <button className='flex items-center gap-2 cursor-pointer text-[#B9FF66] text-base hover:gap-3 transition-all'>
                            Learn more <ArrowUpRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTAProve