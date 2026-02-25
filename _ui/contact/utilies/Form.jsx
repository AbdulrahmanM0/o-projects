import ForthBtn from '@/components/btn/Forth'
import ThirdBtn from '@/components/btn/Third'
import React from 'react'

function Form() {
    return (
        <div>
            <form action="">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-clamp-24'>
                    <input type="text" className='px-clamp-32 py-clamp-24 leading-[0.7] border border-b100 text-clamp-18 text-g150 placeholder-g150 bg-b750' placeholder='Full Name' />
                    <input type="text" className='px-clamp-32 py-clamp-24 leading-[0.7] border border-b100 text-clamp-18 text-g150 placeholder-g150 bg-b750' placeholder='Company Name' />

                    <input type="text" className='px-clamp-32 py-clamp-24 leading-[0.7] border border-b100 text-clamp-18 text-g150 placeholder-g150 bg-b750' placeholder='Your Email' />
                    <input type="text" className='px-clamp-32 py-clamp-24 leading-[0.7] border border-b100 text-clamp-18 text-g150 placeholder-g150 bg-b750' placeholder='Your Phone Number' />

                    <input type="text" className='col-span-full px-clamp-32 py-clamp-24 leading-[0.7] border border-b100 text-clamp-18 text-g150 placeholder-g150 bg-b750' placeholder='Country' />

                    <textarea className='col-span-full px-clamp-32 py-clamp-24 leading-[0.7] border border-b100 text-clamp-18 text-g150 placeholder-g150 bg-b750' name="" id="" cols="30" rows="10" placeholder='Description...'></textarea>

                    {/* information  */}
                    <div className="col-span-full flex items-center gap-4">

                        {/* Checkbox */}
                        <label className="flex items-center gap-4 cursor-pointer">
                            <input
                                type="checkbox"
                                className="peer hidden"
                            />

                            {/* Custom Box */}
                            <div className="w-6 h-6 rounded-sm bg-white/30 border border-white flex items-center justify-center transition-all peer-checked:bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M5.57109 10.5001L2.24609 7.17506L3.07734 6.34381L5.57109 8.83756L10.9232 3.48547L11.7544 4.31672L5.57109 10.5001Z" fill="#E7E8E9" />
                                </svg>
                            </div>

                            {/* Text */}
                            <span className="text-white text-lg font-medium">
                                I would like to receive more information about products, events, news, & offers
                            </span>
                        </label>
                    </div>


                    <div><ForthBtn value={"Submit"} /></div>

                </div>
            </form>
        </div>
    )
}

export default Form