import Image from 'next/image'
import React from 'react'

function Card({ col1, col2 }) {
  return (
    <div className='bg-b500 relative'>
      {/* splach video ÷ */}
      <video
        className="w-full h-full absolute top-0 left-0 object-cover z-10"
        src="/videos/cardshad.webm"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      />
      <div className=' p-clamp-64 grid-cols-1 grid md:grid-cols-2 gap-[46px] bg-transparent relative z-20'>

        {/* first col  */}
        <div>
          {col1}
        </div>
        {/* seconed col  */}
        <div>
          {col2}
          <div className='absolute bottom-0'>
            <Image src='/images/o-projects/blue-blur-icon.png' width={1185} height={1185} className='mix-blend-hard-light w-[clamp(100px,61.72vw,1185px)] z-10' alt='o-project icon' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card