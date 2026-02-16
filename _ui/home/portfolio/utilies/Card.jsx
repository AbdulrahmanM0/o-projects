import Image from 'next/image'
import React from 'react'

function Card({date,img,title,category}) {
  return (
    <div>
        <div className='flex flex-col gap-[29px]'>
            {/* date  */}
            <span className='text-clamp-18 text-balance'>
                {date}
            </span>

            {/* image  */}
            <div className='relative'>
                <Image width={734} height={481} src={img} alt={title}/>
            </div>

            <div className='flex justify-between'>
                {/* title  */}
                <h6 className='text-clamp-18 3xl:text-clamp-24 text-balance font-bold'>
                    {title}
                </h6>

                {/* categories */}
                <div className='flex gap-clamp-10'>
                    {
                        category.map(item => (
                            <div className='flex items-center justify-between px-clamp-16 py-clamp-10 text-b100 text-clamp-14 leading-[0.7] border border-b300' key={item}>
                                {item}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card