
import Content from './utilies/Content'
import Impact from './utilies/Impact'
import Video from './utilies/Video'
import ScrollRevealText from '@/components/animation/ScrollRevealText'
import Clients from './clients/Clients'

function Whyus({children}) {

    return (
        <section className="min-h-screen bg-balance">
            {/* Heading */}
            <div className="pt-[50px] pb-clamp-20">
                <div className='w-fit mx-auto relative'>
                    <ScrollRevealText
                        text="Why Choose Us?"
                        className="text-[10.916vw] font-bold text-b500 m-auto font-heading"
                        yDistance={200}
                        textClassName={"leading-[1.2]"}
                    />
                    {/* moved img  */}
                    {children}
                </div>
            </div>

            <div className='overflow-hidden'>
                {/* Content */}
                <div className="flex flex-wrap">
                    {/* Left column */}
                    <div className="shrink-0 flex-1 xl:block flex flex-col ">
                        <Content />
                        <div className='xl:px-clamp-32 xl:px-[0] border-t border-t-b50'>
                            <Impact />
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="flex-1 flex justify-center">
                        <Video />
                    </div>
                </div>

                <Clients />
            </div>
        </section>
    )
}

export default Whyus
