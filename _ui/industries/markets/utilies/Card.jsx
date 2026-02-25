import Image from "next/image"

function Card({ title, body, icon, img, index }) {
    return (
        <div class="flex flex-col">
            {/* number  */}
            <span className='text-[clamp(150px,10.42vw,200px)] font-heading leading-[0.7] font-bold text-[#F7F7F7]'>
                0{index + 1}
            </span>

            {/* card body  */}
            <div className="flex-1 border-t border-t-b400 h-auto p-clamp-32 flex flex-col gap-clamp-36 bg-balance mt-[-10.88%] relative z-10">
                <div className="shrink-0">
                    {icon}
                </div>
                <div className="text-clamp-36 leading-[0.7] font-heading font-bold">
                    {title}
                </div>
                <div>
                    <p className="text-clamp-18 leading-[1.3] bg-gradient-to-r from-[#737373] to-[#D9D9D9] bg-clip-text text-transparent">{body}</p>
                </div>
                <div className="mt-auto">
                    <Image src={`/images/places/${img}`} width={372} className="w-full" height={244} alt={title} />
                </div>
            </div>
        </div>
    )
}

export default Card