import Image from 'next/image'
import React from 'react'

function Card({ img, title, body }) {

    return (
        <div className='relative mt-[4.375vw]'>
            <div
                className="w-fit mx-auto absolute left-1/2 -translate-x-1/2 z-10 top-[-84px]"
            >
                <Image
                    src={`/images/records/${img}`}
                    width={200}
                    height={200}
                    title={title}
                    alt={title}
                />
            </div>

            <div className='p-clamp-32 pt-[120px] bg-[#2D63FE] h-full relative'>
                <div className='text-balance'>
                    <h4 className='text-clamp-32 font-heading font-bold leading-[1.2] mb-clamp-24'>
                        {title}
                    </h4>
                    <p className='text-clamp-20 leading-[0.7] leading-[1.2] text-b650'>
                        {body}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card