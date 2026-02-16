import React from 'react'
import Content from './utilies/Content'
import Impact from './utilies/Impact'
import Video from './utilies/Video'
import ScrollRevealText from '@/components/animation/ScrollRevealText'
import Clients from './clients/Clients'

function Whyus() {
    return (
        <section className="min-h-screen bg-balance">
            {/* Heading */}
            <div className="pt-[50px] pb-[75px]">
                <div className='w-fit mx-auto'>
                    <ScrollRevealText
                        text="Why Choose Us?"
                        className="text-[10.916vw] font-bold text-b500 m-auto"
                        yDistance={200}
                        textClassName={"leading-[1.2]"}
                    />
                </div>

            </div>

            {/* Content */}
            <div className="flex flex-wrap">
                {/* Left column */}
                <div className="shrink-0">
                    {/* <Content /> */}
                    <Impact />
                </div>

                {/* Right column */}
                <div className="flex-1 flex justify-center">
                    <Video />
                </div>
            </div>

            <Clients />
            
        </section>
    )
}

export default Whyus
