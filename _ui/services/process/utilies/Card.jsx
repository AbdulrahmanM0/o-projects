
function Card({ title, body, index }) {
    return (
        <div className={`border border-b400 p-clamp-32 flex flex-col gap-clamp-24 min-w-[22.76vw] bg-[#FFFFFF99] backdrop-blur-[12.5px] h-fit ${index %2 === 0 ? " mt-[27.78vh]" : "mt-[14.81vh]"}`}>
            <div className='font-heading text-clamp-36 font-bold text-b100 leading-[0.7]'>
                0{index+1}
            </div>
            <div>
                <h4 className='font-heading text-clamp-36 font-bold text-b500 leading-[1.1]'>{title}</h4>
            </div>
            <div>
                <p className='text-b300 text-clamp-18 leading-[1.2]'>
                    {body}
                </p>
            </div>
        </div>
    )
}

export default Card