
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
                        yPercent={200}
                        textClassName={"leading-[1.2]"}
                    />
                    {/* moved img  */}
                    {children}
                </div>
            </div>


        </section>
    )
}

export default Whyus
