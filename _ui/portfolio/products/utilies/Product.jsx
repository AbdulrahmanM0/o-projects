import Image from 'next/image'
import React from 'react'

function Product({ title, body, img, index }) {
    const colors = [
        "#F3C921", "#00E4A5", "#E7E8E9"
    ]
    const spaces = ["mt-[18.52vh]", "mb-[18.52vh]"];

    const color = colors[index % colors.length];
    const space = spaces[index % spaces.length];
    
    return (
        <div className='p-[3.75vw] bg-b500 border border-b200 mb-clamp-48 sticky top-[2px]' style={{ zIndex: index + 1 }}>
            {/* borders  */}
            <div>
                {/* top left  */}
                <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-0 left-0' width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M0 0V24.001H2.18164V2.32227H24V0H0Z" fill={color} />
                </svg>
                {/* top right  */}
                <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-0 right-0' width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M24 0V24.001H21.8184V2.32227H0V0H24Z" fill={color} />
                </svg>
                {/* bottom left  */}
                <svg xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0 left-0' width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M0 24.001V0H2.18164V21.6787H24V24.001H0Z" fill={color} />
                </svg>
                {/* bottom right  */}
                <svg xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0 right-0' width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M24 24.001V0H21.8184V21.6787H0V24.001H24Z" fill={color} />
                </svg>
            </div>

            <div className='flex justify-between flex-wrap gap-clamp-64'>
                {/* image  */}
                <div>
                    <Image width={420} height={250} className='w-[21.875vw]' src={img} alt={title} />
                </div>

                {/* title  */}
                <div className='flex items-center'>
                    <h3 className="font-heading text-[4.17vw] font-bold leading-none text-balance" dangerouslySetInnerHTML={{ __html: title }} />
                </div>

                {/* description  */}
                <div className='flex items-center xl:w-[21.51vw]'>
                    <p className='text-b100 text-clamp-16 leading-[1.2]'>
                        {body}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Product