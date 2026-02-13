import React from 'react'

function Impact() {
    const data = [
        {
            title: "Projects",
            number: 200
        },
        {
            title: "More clients",
            number: 90
        },
        {
            title: "More clients",
            number: 20
        },

    ]
    return (
        <div >
            <div className='border border-l-0 border-r-0 border-t-b50 ps-[72px]'>
                <h6 className='p-[10px] text-b200 text-[24px] mb-[9px] w-fit'>
                    Our Impact
                </h6>
                {/* counters */}
                <div className='p-[10px]'>
                    {data.map((item, index) => (
                        <div className={`py-[32px] ${index !== 0 ? "border-t border-t-b50" : ""}`}
                            key={item.title}>
                            <div className={`flex flex-col gap-[20px]`}>
                                {/* number  */}
                                <span className='text-b7 text-[80px] font-heading font-bold leading-[.7] flex gap-[16px]'>
                                    {index === data.length - 1 ? "$" + item.number + "M" : item.number} <span>+</span>
                                </span>
                                {/* title  */}
                                <p className='text-b7 text-[18px] leadng-[.8]'>
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Impact