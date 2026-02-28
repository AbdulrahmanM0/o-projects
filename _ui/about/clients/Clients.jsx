import ScrollRevealText from "@/components/animation/ScrollRevealText"
import PrimaryBtn from "@/components/btn/Primary"
import Card from "@/components/sectionCards/endcard/Card"
import Logos from "./utilies/Logos"

function Clients() {
    const col1 = <div className="flex flex-col gap-clamp-40">
        <h6 className="text-clamp-18 leading-[0.7] text-balance">
            CONTACT US
        </h6>
        <h3 className="leading-[1.2] font-heading font-bold text-balance text-clamp-36 2xl:text-clamp-48 3xl:text-clamp-64">
            Working on something <br /> exciting? We’d love
            to help.
        </h3>
        <div>
            <PrimaryBtn value={"Let’s Talk"} />
        </div>
    </div>
    return (
        <section className="relative z-20" id="section-1" >
            <div className='bg-balance px-[clamp(20px,3.75vw,72px)] py-clamp-100'>
                {/* head  */}
                <div className='mx-auto max-w-[clamp(100px,75.94vw,1458px)] text-center text-b250 mb-clamp-56'>
                    <h6 className="text-clamp-24 leading-[0.7] mb-clamp-44">
                        Our Clients
                    </h6>
                    <ScrollRevealText
                        text="We provide innovative solutions
                        to expand your business"
                        className="font-heading text-[clamp(10px,4.17vw,80px)] text-b500 font-bold leading-none"
                        yPercent={200}
                        textClassName={"leading-[1.2]"}
                    />
                </div>
                {/* clients  */}
                <Logos />
                {/* contact  */}
                <div>
                    <Card col1={col1} />
                </div>
            </div>
        </section>
    )
}

export default Clients