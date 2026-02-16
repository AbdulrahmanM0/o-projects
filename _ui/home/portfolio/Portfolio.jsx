import React from 'react'
import Card from './utilies/Card'
import { studies } from '@/data/studies'
import ShowAllAtc from '@/components/show/ShowAllAtc'

function Portfolio() {
    return (
        <section>
            <div className='px-clamp-72 py-clamp-100 bg-b500'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h6 className='text-clamp-18 3xl:text-clamp-24 leading-none text-balance mb-clamp-30'>Our Portfolio</h6>
                        <h3 className='text-[6.667vw] font-heading text-balance font-bold leading-none'>
                            Case <br /> Studies
                        </h3>
                    </div>
                    <div>
                        <p className='text-clamp-18 text-balance max-w-[23.23vw] leading-[1.5]'>
                            Explore our portfolio of innovative projects and discover how we've helped businesses like yours achieve their goals.
                        </p>
                    </div>
                </div>

                {/* cards  */}
                <div className='px-[3.62vw] grid grid-cols-2 gap-[8.80vw]'>
                    <div>
                        <div>
                            <Card {...studies[0]} />
                        </div>
                        <div>
                            <ShowAllAtc />
                        </div>
                    </div>
                    <div>
                        <div>
                            <Card {...studies[1]} />
                        </div>
                        <div>
                            <Card {...studies[2]} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Portfolio