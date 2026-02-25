
function Card({ title, body, icon, index }) {
    return (
        <div>
            {/* number  */}
            <span className='text-[clamp(150px,10.42vw,200px)] font-heading leading-[0.7] font-bold text-[#F7F7F7]'>
                0{index + 1}
            </span>

            {/* card body  */}
            <div className="border-t border-t-b400 py-clamp-64 bg-balance mt-[-10.88%] relative z-10">
                <div className="w-clamp-40 mb-clamp-96">
                    {icon}
                </div>
                <div className="text-clamp-36 leading-[0.7] font-heading font-bold mb-clamp-40 ">
                    {title}
                </div>
                <div className="text-clamp-24 leading-[1.3] bg-gradient-to-r from-[#737373] to-[#D9D9D9] bg-clip-text text-transparent">
                    {body}
                </div>
            </div>
        </div>
    )
}

export default Card