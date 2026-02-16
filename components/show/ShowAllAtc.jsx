"use client"

import React from 'react'
import PrimaryBtn from '../btn/Primary'
import { studies } from '@/data/studies'
import Image from 'next/image'

function ShowAllAtc() {
  return (
    <div className='flex flex-col gap-[31px]'>
        
        <div className='flex gap-[10px]'>
            {studies.map(item => (
                <Image
                  key={item.title}
                  width={61}
                  height={63}
                  className='w-[61px] h-[63px] object-cover'
                  src={item.img}
                  alt={item.title}
                />
            ))}
            <div className='text-balance flex items-center justify-center bg-b900 w-[60px] h-[61px]'>+50</div>
        </div>

        <div>
            <PrimaryBtn />
        </div>
    </div>
  )
}

export default ShowAllAtc