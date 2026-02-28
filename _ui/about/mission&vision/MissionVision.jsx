import React from 'react'
import Slider from './utilies/Slider'
import Technologies from './utilies/Technologies'
import ScrollRevealText from '@/components/animation/ScrollRevealText'

function MissionVision() {
  return (
    <section id="mission-section">
      <div className='bg-b600 py-clamp-100 relative'>
        <div className='mb-clamp-82'>
          {/* cards slider  */}
          <Slider />
        </div>

        {/* technologies  */}
        <div>
          {/* <div className='mx-auto max-w-[clamp(200px,75.94vw,1458px)] text-center text-balance mb-clamp-56'>
            <h6 className="text-clamp-24 leading-[0.7] mb-clamp-44">
              Technology
            </h6>

            <ScrollRevealText
              text="Empowering Innovation Through Cutting-Edge Solutions"
              className="font-heading text-[clamp(10px,4.17vw,80px)] font-bold leading-none"
              yPercent={200}
              textClassName={"leading-[1.2]"}
            />
          </div> */}

          {/* technologies swiper  */}
          <div className="relative px-[clamp(20px,7.03vw,134px)]">
            {/* Left */}
            <div
              className="absolute top-0 left-0 h-full w-[clamp(20px,22.6vw,434px)] pointer-events-none z-10"
              style={{ background: 'linear-gradient(to right, #1D58FF, rgba(29,88,255,0))' }}
            />

            {/* Right */}
            <div
              className="absolute top-0 right-0 h-full w-[clamp(20px,22.6vw,434px)] pointer-events-none z-10"
              style={{ background: 'linear-gradient(to left, #1D58FF, rgba(29,88,255,0))' }}
            />
            <Technologies />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision