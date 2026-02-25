import ThirdBtn from "@/components/btn/Third"
import Navigation from "./Navigation"

function Card({ tags, category, title, experience, showBtn = true }) {
    return (
        <div>
            <div className={`${ showBtn && "p-[5.2083vw] border-b border-b-b100 " }`}>
                {/* navigatio  */}
                <div className="text-clamp-18 text-b500 mb-clamp-28 leading-[0.7]">
                    <Navigation />
                </div>

                <div className='flex flex-col md:flex-row justify-between flex-wrap items-center gap-clamp-32'>
                    <div className='flex flex-col gap-clamp-30'>
                        {/* details  */}
                        <div className='flex flex-col md:flex-row gap-clamp-30'>
                            <div className='flex items-center justify-between px-clamp-16 py-clamp-10 gap-clamp-14 text-b500 text-clamp-18 leading-[0.7] border border-b400'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16923 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74739 11.5374 4.33124 13.2763 5.41201 14.7C5.41201 14.7 5.63701 14.9963 5.67376 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM14.7 13.5L12 11.7817L9.30001 13.5L9.75001 10.4445L7.50001 8.37975L10.65 7.9995L12 5.25L13.434 8.00025L16.5 8.37975L14.25 10.4445L14.7 13.5Z" fill="#1D58FF" />
                                </svg>{tags.place}
                            </div>
                            <div className='flex items-center justify-between px-clamp-16 py-clamp-10 gap-clamp-14 text-b500 text-clamp-18 leading-[0.7] border border-b400'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.24956 5.46101V6.88101L5.55556 7.01901C4.97359 7.06585 4.42413 7.30646 3.99503 7.70239C3.56593 8.09831 3.28197 8.62668 3.18856 9.20301C3.14722 9.46101 3.10922 9.71934 3.07456 9.97801C3.06678 10.0406 3.07892 10.104 3.10926 10.1593C3.1396 10.2146 3.18659 10.259 3.24356 10.286L3.32056 10.322C8.74956 12.892 15.2506 12.892 20.6786 10.322L20.7556 10.286C20.8123 10.2588 20.8591 10.2144 20.8893 10.1591C20.9194 10.1038 20.9314 10.0405 20.9236 9.97801C20.8896 9.71914 20.852 9.46078 20.8106 9.20301C20.7171 8.62668 20.4332 8.09831 20.0041 7.70239C19.575 7.30646 19.0255 7.06585 18.4436 7.01901L16.7496 6.88201V5.46201C16.7497 5.04286 16.5993 4.6376 16.3259 4.31993C16.0524 4.00226 15.6741 3.79328 15.2596 3.73101L14.0396 3.54801C12.6871 3.34585 11.312 3.34585 9.95956 3.54801L8.73956 3.73101C8.32523 3.79326 7.94699 4.00209 7.67357 4.31955C7.40015 4.63701 7.2497 5.04203 7.24956 5.46101ZM13.8166 5.03101C12.6119 4.85108 11.3872 4.85108 10.1826 5.03101L8.96256 5.21401C8.90337 5.22287 8.84932 5.25267 8.81023 5.29799C8.77115 5.34331 8.74962 5.40116 8.74956 5.46101V6.77601C10.9145 6.65237 13.0847 6.65237 15.2496 6.77601V5.46101C15.2495 5.40116 15.228 5.34331 15.1889 5.29799C15.1498 5.25267 15.0957 5.22287 15.0366 5.21401L13.8166 5.03101Z" fill="#1D58FF" />
                                    <path d="M21.1184 12.07C21.1164 12.0377 21.1066 12.0063 21.0899 11.9786C21.0731 11.9509 21.0498 11.9277 21.0221 11.911C20.9943 11.8943 20.9629 11.8845 20.9306 11.8826C20.8983 11.8807 20.8659 11.8867 20.8364 11.9C15.2654 14.367 8.73543 14.367 3.16443 11.9C3.13491 11.8867 3.1026 11.8807 3.07026 11.8826C3.03793 11.8845 3.00654 11.8943 2.9788 11.911C2.95106 11.9277 2.92779 11.9509 2.91101 11.9786C2.89422 12.0063 2.88441 12.0377 2.88243 12.07C2.78115 13.9845 2.88406 15.9043 3.18943 17.797C3.28264 18.3735 3.56651 18.9021 3.99563 19.2982C4.42475 19.6944 4.97432 19.9351 5.55643 19.982L7.42843 20.132C10.4714 20.378 13.5284 20.378 16.5724 20.132L18.4444 19.982C19.0265 19.9351 19.5761 19.6944 20.0052 19.2982C20.4344 18.9021 20.7182 18.3735 20.8114 17.797C21.1174 15.902 21.2214 13.982 21.1184 12.071" fill="#1D58FF" />
                                </svg>{tags.type}
                            </div>
                            <div className='flex items-center justify-between px-clamp-24 py-clamp-16 text-b500 text-clamp-18 leading-[0.7] border border-b400'>
                                {category}
                            </div>
                        </div>

                        {/* title  */}
                        <div className='flex items-center'>
                            <h3 className="font-heading text-[7.17vw] md:text-[4.17vw] font-bold leading-[0.7] text-b500" dangerouslySetInnerHTML={{ __html: title }} />
                        </div>

                        {/* description  */}
                        <div className='flex items-center xl:w-[21.51vw]'>
                            <p className='text-b300 text-clamp-16 leading-[1.2]'>
                                {experience}
                            </p>
                        </div>
                    </div>

                    {/* action  */}
                    {showBtn &&
                        <div className="h-fit">
                            <ThirdBtn value={"Apply Now"} />
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default Card