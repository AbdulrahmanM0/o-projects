import Link from 'next/link'
import React from 'react'

function Navigation({title,src}) {
    return (
        <div className='text-balance text-center'>
            <Link href={"/"} className='text-clamp-18 leading-[0.7]'>Home</Link> - <span className='text-clamp-18 leading-[0.7]'>{title ? title :"About"}</span>
        </div>
    )
}

export default Navigation