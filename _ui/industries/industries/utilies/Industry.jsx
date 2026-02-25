import Image from 'next/image'

function Industry({ number, title, body, img, category, index }) {
    const colors = [
        "#F3C921", "#00E4A5", "#E7E8E9"
    ]
    const spaces = ["mt-[18.52vh]", "mb-[18.52vh]"];

    const color = colors[index % colors.length];
    const space = spaces[index % spaces.length];

    return (
        <div className='p-[3.75vw] bg-b500 border border-b200 mb-clamp-48 sticky top-[15.28vh]' style={{ zIndex: index + 1 }}>
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

            <div className={`flex justify-between flex-wrap md:flex-nowrap gap-clamp-64 `}>
                {/* first col  */}
                <div className={`w-full md:max-w-[40.31vw] ${index %2 === 0 ? " order-first ":" order-last "}`}>
                    <div className='flex flex-col gap-clamp-54'>
                        <h6 className='text-balance text-clamp-18 leading-[0.7]'>
                            {number} Industry
                        </h6>
                        <h3 className="font-heading text-[4.17vw] font-bold leading-none text-balance">
                            {title}
                        </h3>
                        <p className='text-b100 text-clamp-16 leading-[1.2]'>
                            {body}
                        </p>
                        {/* categories */}
                        <div className='flex flex-wrap gap-clamp-20 w-full'>
                            {
                                category.map((item, index) => (
                                    <div key={item + index} className='flex items-center justify-between px-clamp-16 py-clamp-10 text-b100 text-clamp-14 leading-none border border-b300 whitespace-nowrap'>
                                        {item}
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>

                {/* seconed col  */}
                <div className='relative'>
                    <Image width={734} height={517} className='h-full object-cover'  src={`/images/industries/${img}`} alt={title} />
                </div>
            </div>
        </div>
    )
}

export default Industry