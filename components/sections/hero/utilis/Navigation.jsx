import Link from 'next/link'
import React from 'react'

function Navigation() {
    return (
        <div className='text-balance text-center'>
            <Link href={"/"} className='text-clamp-18 leading-[0.7]'>Home</Link> - <span className='text-clamp-18 leading-[0.7]'>About</span>
        </div>
    )
}

export default Navigation