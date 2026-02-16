import Image from 'next/image'

function Card({ title, body, img, index }) {
    const colors = [
        "#F3C921", "#00E4A5", "#E7E8E9"
    ]
    const spaces = ["mt-[18.52vh]" ,"mb-[18.52vh]"];

    const color = colors[index % colors.length];
    const space = spaces[index % spaces.length];


    return (
        <div className={`bg-b600 w-fit relative min-w-[70vw] lg:min-w-[40vw] xl:min-w-[29.38vw] relative ${space}`}>
            {/* borders  */}
            <div>
                {/* top left  */}
                <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-0 left-0' width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M0 0V24.001H2.18164V2.32227H24V0H0Z" fill={color}/>
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
            {
                index === 0 && <h6 className='text-clamp-18 3xl:text-clamp-24 absolute leading-none text-balance -top-clamp-56'>What We Build</h6>
            }
            {/* title  */}
            <div className='p-clamp-32 flex flex-col gap-clamp-30'>
                <h5 className='text-[4.17vw] font-heading font-bold text-balance leading-[0.9]' dangerouslySetInnerHTML={{ __html: title }} />
                <p className='max-w-[500px] text-balance text-clamp-16'>
                    {body}
                </p>
            </div>
            {/* image  */}
            <div className='relative p-clamp-32'>
                <img className='w-full' src={img} alt={title} />
            </div>
        </div>
    )
}

export default Card