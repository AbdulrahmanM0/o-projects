
function Card() {
    return (
        <div className="flex items-center justify-center px-clamp-24 xl:px-[0]">
            <div className="relative w-full  xl:max-w-[30.5vw] bg-white p-[2.1vw] mt-auto relative">

                <div className="absolute -top-[2.2vw] right-[17px] z-10">
                    <img src="/images/tools/rectangle.png" className="h-auto w-[1.72vw]" alt="" />
                </div>

                <div className="absolute bottom-0 left-0 h-16 w-16 overflow-hidden">
                    <div className="absolute bottom-0 left-0 h-0 w-0 border-[30px] border-b600 border-t-transparent border-r-transparent opacity-[100]"></div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="47" viewBox="0 0 60 47" fill="none">
                        <g filter="url(#filter0_d_3211_623)">
                            <path d="M50.8 8.79981L50.8 41.7998L4.79999 8.7998L50.8 8.79981Z" fill="#F3F3F3" />
                        </g>
                        <defs>
                            <filter id="filter0_d_3211_623" x="-1.23978e-05" y="-0.000195503" width="59.6" height="46.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="2" dy="-2" />
                                <feGaussianBlur stdDeviation="3.4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3211_623" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3211_623" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>

                <div className="flex flex-col gap-clamp-18">

                    <div className="flex items-start gap-clamp-20">
                        <svg className="mt-1 h-6 w-6 flex-shrink-0 text-[#4ADE80]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        <div className="text-b500 ">
                            <h3 className="text-clamp-24 font-bold text-[#1F2937] leading-[0.7] mb-[17px]">Education industry solutions</h3>
                            <p className="text-clamp-18 leading-[1.3] text-b500">Secure PDF sharing - secure DRM for videos - easy-to-use interface. - student technical support</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-clamp-20">
                        <svg className="mt-1 h-6 w-6 flex-shrink-0 text-[#4ADE80]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        <div className="text-b500 ">
                            <h3 className="text-clamp-24 font-bold text-[#1F2937] leading-[0.7] mb-[17px]">Finance & banking solutions</h3>
                            <p className="text-clamp-18 leading-[i.3] text-b500">Security compliance - devsecOps integration serverless & auto-scaling</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-clamp-20">
                        <svg className="mt-1 h-6 w-6 flex-shrink-0 text-[#4ADE80]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        <div className="text-b500 ">
                            <h3 className="text-clamp-24 font-bold text-[#1F2937] leading-[0.7] mb-[17px]">Transportation industry solutions</h3>
                            <p className="text-clamp-18 leading-[i.3] text-b500">Real-time tracking & analytics - automated scheduling & route optimization - Secure payment integration</p>
                        </div>
                    </div>

                    <div className=" flex justify-end">
                        <a href="#" className="text-clamp-24 text-b600 leading-[0.7] underline decoration-1 underline-offset-4 hover:opacity-80">And More</a>
                    </div>
                </div>

                

            </div>
        </div>
    )
}

export default Card