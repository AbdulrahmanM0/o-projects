import PrimaryBtn from '@/components/btn/Primary';
import Link from 'next/link';

function Job({ title, experience, category, tags, index }) {
    const colors = [
        "#F3C921", "#00E4A5", "#E7E8E9"
    ]
    const spaces = ["mt-[18.52vh]", "mb-[18.52vh]"];

    const color = colors[index % colors.length];
    const space = spaces[index % spaces.length];

    return (
        <div className='p-clamp-32 bg-b500 border border-b200 sticky top-[2px]' style={{ zIndex: index + 1 }}>
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

            <div className='flex justify-between flex-col gap-clamp-30'>
                {/* details  */}
                <div className='flex flex-wrap gap-clamp-30'>
                    <div className='flex items-center justify-between px-clamp-16 py-clamp-10 gap-clamp-14 text-g150 text-clamp-18 leading-[0.7] border border-b300'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16923 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74739 11.5374 4.33124 13.2763 5.41201 14.7C5.41201 14.7 5.63701 14.9963 5.67376 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM14.7 13.5L12 11.7817L9.30001 13.5L9.75001 10.4445L7.50001 8.37975L10.65 7.9995L12 5.25L13.434 8.00025L16.5 8.37975L14.25 10.4445L14.7 13.5Z" fill="#5E666A" />
                        </svg>{tags.place}
                    </div>
                    <div className='flex items-center justify-between px-clamp-16 py-clamp-10 gap-clamp-14 text-g150 text-clamp-18 leading-[0.7] border border-b300'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.24956 5.46098V6.88098L5.55556 7.01898C4.97359 7.06581 4.42413 7.30643 3.99503 7.70236C3.56593 8.09828 3.28197 8.62665 3.18856 9.20298C3.14722 9.46098 3.10922 9.71931 3.07456 9.97798C3.06678 10.0406 3.07892 10.104 3.10926 10.1593C3.1396 10.2146 3.18659 10.2589 3.24356 10.286L3.32056 10.322C8.74956 12.892 15.2506 12.892 20.6786 10.322L20.7556 10.286C20.8123 10.2588 20.8591 10.2144 20.8893 10.1591C20.9194 10.1038 20.9314 10.0405 20.9236 9.97798C20.8896 9.71911 20.852 9.46075 20.8106 9.20298C20.7171 8.62665 20.4332 8.09828 20.0041 7.70236C19.575 7.30643 19.0255 7.06581 18.4436 7.01898L16.7496 6.88198V5.46198C16.7497 5.04283 16.5993 4.63757 16.3259 4.3199C16.0524 4.00223 15.6741 3.79325 15.2596 3.73098L14.0396 3.54798C12.6871 3.34582 11.312 3.34582 9.95956 3.54798L8.73956 3.73098C8.32523 3.79323 7.94699 4.00206 7.67357 4.31952C7.40015 4.63698 7.2497 5.042 7.24956 5.46098ZM13.8166 5.03098C12.6119 4.85105 11.3872 4.85105 10.1826 5.03098L8.96256 5.21398C8.90337 5.22284 8.84932 5.25263 8.81023 5.29796C8.77115 5.34328 8.74962 5.40113 8.74956 5.46098V6.77598C10.9145 6.65234 13.0847 6.65234 15.2496 6.77598V5.46098C15.2495 5.40113 15.228 5.34328 15.1889 5.29796C15.1498 5.25263 15.0957 5.22284 15.0366 5.21398L13.8166 5.03098Z" fill="#5E666A" />
                            <path d="M21.1184 12.07C21.1164 12.0376 21.1066 12.0063 21.0899 11.9786C21.0731 11.9509 21.0498 11.9276 21.0221 11.9109C20.9943 11.8942 20.9629 11.8845 20.9306 11.8826C20.8983 11.8806 20.8659 11.8866 20.8364 11.9C15.2654 14.367 8.73543 14.367 3.16443 11.9C3.13491 11.8866 3.1026 11.8806 3.07026 11.8826C3.03793 11.8845 3.00654 11.8942 2.9788 11.9109C2.95106 11.9276 2.92779 11.9509 2.91101 11.9786C2.89422 12.0063 2.88441 12.0376 2.88243 12.07C2.78115 13.9844 2.88406 15.9043 3.18943 17.797C3.28264 18.3735 3.56651 18.9021 3.99563 19.2982C4.42475 19.6943 4.97432 19.9351 5.55643 19.982L7.42843 20.132C10.4714 20.378 13.5284 20.378 16.5724 20.132L18.4444 19.982C19.0265 19.9351 19.5761 19.6943 20.0052 19.2982C20.4344 18.9021 20.7182 18.3735 20.8114 17.797C21.1174 15.902 21.2214 13.982 21.1184 12.071" fill="#5E666A" />
                        </svg>{tags.type}
                    </div>
                    <div className='flex items-center justify-between px-clamp-24 py-clamp-16 text-b350 text-clamp-18 leading-[0.7] border border-b300'>
                        {category}
                    </div>
                </div>

                {/* title  */}
                <div className='flex items-center'>
                    <h3 className="font-heading text-[4.17vw] font-bold leading-none text-balance" dangerouslySetInnerHTML={{ __html: title }} />
                </div>

                {/* description  */}
                <div className='flex items-center xl:w-[21.51vw]'>
                    <p className='text-b100 text-clamp-16 leading-[1.2]'>
                        {experience}
                    </p>
                </div>

                {/* action  */}
                <Link href={`/career/${index}`}>
                    <PrimaryBtn value={"Apply Now"} />
                </Link>
            </div>
        </div>
    )
}

export default Job