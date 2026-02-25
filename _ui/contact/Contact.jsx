import Link from 'next/link'
import React from 'react'
import Form from './utilies/Form'
import Image from 'next/image'
import { social } from '@/data/aboutus'

function Contact() {
  return (
    <section>
      <div className='pt-[15.28vh] bg-b600'>
        <div className='px-[3.75vw] py-clamp-100'>
          {/* form col  */}
          <div>
            {/* head  */}
            <div className='flex flex-col gap-clamp-42 mb-clamp-64'>
              {/* navigation */}
              <div className='leading-[0.7] text-balance text-clamp-18'>
                <Link href={"/"} >Home</Link> - <span>Contact us</span>
              </div>
              <div>
                <h1 className='text-[10.42vw] font-bold font-heading text-balance leadig-[0.7]'>
                  Let’s Chat
                </h1>
              </div>
              <div>
                <p className='leading-[0.7] text-balance text-clamp-24 '>
                  We strive to bring customer’s ideas to life.
                </p>
              </div>
            </div>

            {/* form  */}
            <div className='flex justify-between flex-wrap'>
              <div className='flex-1 max-w-[53.7vw]'>
                <Form />
              </div>

              {/* links ad data  */}
              <div>
                {/* icon logo  */}
                <div className='relative'>
                  <Image src={"/images/o-projects/icon.png"} width={574} height={455} className='absolute bottom-0 rotate-[36deg] bg-gradient-to-b from-[#1D58FF]/0 to-[#1D58FF]' alt='o-projects icon' />
                </div>
                <div className='flex flex-col gap-clamp-64'>

                  {/* Phone */}
                  <div className='flex flex-col gap-clamp-32'>
                    <h5 className='text-[#97B2FF] font-bold font-heading text-clamp-32 leading-[0.7] underline'>
                      Phone
                    </h5>
                    <p className='text-white font-heading text-clamp-32 leading-[0.7]'>
                      +20 012 0356 7043
                    </p>
                  </div>

                  {/* Email */}
                  <div className='flex flex-col gap-clamp-32'>
                    <h5 className='text-[#97B2FF] font-bold font-heading text-clamp-32 leading-[0.7] underline'>
                      Email
                    </h5>
                    <p className='text-white font-heading text-clamp-32 leading-[0.7]'>
                      info@o-projects.org
                    </p>
                  </div>

                  {/* Working Days */}
                  <div className='flex flex-col gap-clamp-32'>
                    <h5 className='text-[#97B2FF] font-bold font-heading text-clamp-32 leading-[0.7]'>
                      Working Days
                    </h5>
                    <p className='text-white font-heading text-clamp-32 leading-[0.7]'>
                      Open Sunday to Thursday
                    </p>
                  </div>

                  {/* Cairo Office */}
                  <div className='flex flex-col gap-clamp-32'>
                    <h5 className='text-[#97B2FF] font-bold font-heading text-clamp-32 leading-[0.7]'>
                      Cairo Office
                    </h5>
                    <p className='text-white font-heading text-clamp-32 leading-[1.2]'>
                      7 Abdelmoneam Fawzy St, Elnozha,<br /> Cairo, Egypt
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>


          <div className='flex justify-between mt-[7.29vw]'>
            <p className='text-balance text-clamp-24 leading-[1.3] font-bold'>
              Feel free to reach me across <br/> different social platforms
            </p>
            {/* links  */}
            <div className='flex gap-clamp-56'>
              {social.map((item, index) => (
                <div key={index} className='flex gap-clamp-32 items-center'>
                  {item.icon}
                  <h6 className='text-balance text-clamp-24 leading-[0.7] font-bold'>{item.title}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact