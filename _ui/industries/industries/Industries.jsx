import React from 'react'
import Industry from './utilies/industry'
import { industries } from '@/data/services'
function Industries() {
    return (
        <section>
            <div className="max-layout bg-b500">
                <div className="py-[9.7222vh] px-[3.75vw]">

                    {/* heading  */}
                    <div className="flex flex-col gap-clamp-44 text-center text-balance mb-clamp-64">
                        <h3 className="font-heading text-[6.667vw] font-bold leading-[1.1]">
                            Industry Solutions
                        </h3>
                        <p className="leading-[1.3] text-b350 text-clamp-18">
                            We will provide guidance on technology choices, implementation <br/> strategies, and organizational structures                        
                        </p>
                    </div>

                    {/* body  */}
                    <div>
                        {industries.map((item, index) => (
                            <Industry {...item} key={index} index={index} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Industries