import PrimaryBtn from "../btn/Primary"

function Pagination() {
    return (
        <>
            {/* prev */}
            <div>
                <PrimaryBtn value={"Previous"} />
            </div>
            {/* pages */}
            <div className='flex'>
                <div className="flex gap-clamp-10">
                    <div className=" bg-b600 flex items-center justify-center relative z-10 p-clamp-12 2xl:p-clamp-20 whitespace-nowrap leading-[0.7] font-heading font-bold text-clamp-24 text-balance">
                        1
                    </div>
                    <div className=" flex border border-b200 items-center justify-center relative z-10 p-clamp-12 2xl:p-clamp-20 whitespace-nowrap leading-[0.7] font-heading font-bold text-clamp-24 text-b350">
                        2
                    </div>
                    <div className=" flex border border-b200 items-center justify-center relative z-10 p-clamp-12 2xl:p-clamp-20 whitespace-nowrap leading-[0.7] font-heading font-bold text-clamp-24 text-b350">
                        3
                    </div>
                </div>
            </div>
            {/* next  */}
            <div>
                <PrimaryBtn value={"Next"} />
            </div>
        </>
    )
}

export default Pagination