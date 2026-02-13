import Link from 'next/link'
import React from 'react'

function Content() {
    return (
        <div>
            <div className='py-[40px] px-[64px] flex flex-col gap-[30px] max-w-[583px] border border-b50 translate-x-[220px] text-[18px] leading-[1.55] text-b400 bg-balance'>
                <p className='p-0'>
                    <Link href="#" className='text-b500'>
                        {"< We combine international  > "}
                    </Link>
                    expertise with deep MENA market knowledge to deliver technology solutions that drive real business results. Our proven track record includes successful digital transformations for global brands, with measurable outcomes including cost savings, efficiency improvements, and revenue growth.
                </p>
                <p >
                    Our team understands the unique challenges of MENA markets, including cultural considerations, regulatory requirements, and business practices that influence technology success. This regional expertise, combined with cutting-edge technical capabilities, enables us to deliver solutions that not only meet international standards but also resonate with local users
                </p>
            </div>
        </div>
    )
}

export default Content