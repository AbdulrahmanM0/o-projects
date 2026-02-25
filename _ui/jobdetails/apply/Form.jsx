"use client"
import ThirdBtn from '@/components/btn/Third'

function Form() {
    return (
        <div className='p-clamp-48 bg-[#FBFBFB] border border-b400'>
            {/* title  */}
            <div>
                <h6 className='text-b500 leading-[0.7] text-clamp-18 mb-clamp-28'>
                    Apply Now
                </h6>
                <h3 className='text-b500 leading-[0.7] text-clamp-36 mb-clamp-28'>
                    Let’s Know You More
                </h3>

                <div>
                    <form action="">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-clamp-24'>
                            <input type="text" className='px-clamp-32 py-clamp-24 leading-[0.7] border border-b100 text-clamp-18 text-b300 placeholder-b300' placeholder='Full Name' />
                            <input type="text" className='px-clamp-32 py-clamp-24 leading-[0.7] border border-b100 text-clamp-18 text-b300 placeholder-b300' placeholder='Your Email' />
                            <input type="text" className='col-span-full px-clamp-32 py-clamp-24 leading-[0.7] border border-b100 text-clamp-18 text-b300 placeholder-b300' placeholder='Your Phone Number' />
                            <input type="text" className='px-clamp-32 py-clamp-24 leading-[0.7] border border-b100 text-clamp-18 text-b300 placeholder-b300' placeholder='City' />
                            <input type="text" className='px-clamp-32 py-clamp-24 leading-[0.7] border border-b100 text-clamp-18 text-b300 placeholder-b300' placeholder='Country' />
                            <input type="text" className='px-clamp-32 py-clamp-24 leading-[0.7] border border-b100 text-clamp-18 text-b300 placeholder-b300' placeholder='Current Salary' />
                            <input type="text" className='px-clamp-32 py-clamp-24 leading-[0.7] border border-b100 text-clamp-18 text-b300 placeholder-b300' placeholder='Expected Salary' />
                            <input type="text" className='px-clamp-32 py-clamp-24 leading-[0.7] border border-b100 text-clamp-18 text-b300 placeholder-b300' placeholder='Add Portfolio Link' />
                            <input type="text" className='px-clamp-32 py-clamp-24 leading-[0.7] border border-b100 text-clamp-18 text-b300 placeholder-b300' placeholder='Add LinkedIn Link' />
                            <textarea className='col-span-full px-clamp-32 py-clamp-24 leading-[0.7] border border-b100 text-clamp-18 text-b300 placeholder-b300' name="" id="" cols="30" rows="10" placeholder='Description...'></textarea>
                            {/* File Upload */}
                            <label className='col-span-full px-clamp-16 py-clamp-20 leading-[0.7] border border-b100 text-clamp-18 text-b300 placeholder-b300'>
                                <div className='flex items-center h-full gap-clamp-14'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M15.3327 20.7693V9.23596L12.226 12.3426L11.282 11.3853L15.9993 6.66663L20.718 11.3853L19.774 12.344L16.666 9.23596V20.7693H15.3327ZM8.82068 25.3333C8.20646 25.3333 7.69402 25.128 7.28335 24.7173C6.87268 24.3066 6.6669 23.7937 6.66602 23.1786V19.948H7.99935V23.1786C7.99935 23.384 8.08468 23.5724 8.25535 23.744C8.42602 23.9155 8.61402 24.0008 8.81935 24H23.1793C23.3838 24 23.5718 23.9146 23.7433 23.744C23.9149 23.5733 24.0002 23.3848 23.9993 23.1786V19.948H25.3327V23.1786C25.3327 23.7928 25.1273 24.3053 24.7167 24.716C24.306 25.1266 23.7931 25.3324 23.178 25.3333H8.82068Z" fill="#1D58FF" />
                                    </svg>
                                    <div className='flex flex-col gap-clamp-14'>
                                        <span className='font-medium'>Upload your resume here</span>
                                        <span className='text-xs text-gray-400'>
                                            PDF, JPEG, PNG, JPG — Maximum size 16 MB
                                        </span>
                                    </div>
                                </div>
                                <input type="file" className='absolute inset-0 w-full h-full opacity-0 cursor-pointer' />
                            </label>
                            <div><ThirdBtn value={"Apply Now"} /></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form