"use client"
import ScrollRevealText from '@/components/animation/ScrollRevealText'
import Card from './utilies/Card'
import { values } from '@/data/aboutus'

function Values() {

    return (
        <section>
            <div
                className="shadow-inset-top bg-balance px-[3.75vw] py-clamp-100 relative z-20 sticky top-[200px]"
            >
                {/* heading */}
                <div className="mb-clamp-88 text-center">
                    {/* <h2 className="text-[10.42vw] font-heading leading-[0.7] font-bold">
                        Our Values
                    </h2> */}
                    <ScrollRevealText
                        text="Our Values"
                        className="text-[10.42vw] font-heading leading-[0.7] font-bold"
                        yPercent={200}
                        textClassName={"leading-[0.7]"}
                    />
                </div>

                {/* cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-clamp-20 " >
                    {values.map((item, index) => (
                        <Card key={index} {...item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Values