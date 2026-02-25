import Image from 'next/image'
import React from 'react'

function Card({ col1 , col2 }) {
  return (
    <div className='bg-b500 p-clamp-64 relative'>
      <div className='grid-cols-1 grid md:grid-cols-2 gap-[46px]'>
        {/* first col  */}
        <div>
          {col1}
        </div>
        {/* seconed col  */}
        <div>
          {col2}
          <div className='absolute bottom-0'>
            <Image src='/images/o-projects/blue-blur-icon.png' width={1185} height={1185} className='mix-blend-hard-light w-[61.72vw]' alt='o-project icon' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card