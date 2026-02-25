import ScrollRevealText from "@/components/animation/ScrollRevealText"
import PrimaryBtn from "@/components/btn/Primary"
import Card from "@/components/sectionCards/endcard/Card"
import { coloredClients } from "@/data/clients"
import Image from "next/image"

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
        <section>
            <div className='bg-balance px-[3.75vw] py-clamp-100'>
                {/* head  */}
                <div className='mx-auto max-w-[75.94vw] text-center text-b250 mb-clamp-56'>
                    <h6 className="text-clamp-24 leading-[0.7] mb-clamp-44">
                        Our Clients
                    </h6>
                    <ScrollRevealText
                        text="We provide innovative solutions
                        to expand your business"
                        className="font-heading text-[4.17vw] text-b500 font-bold leading-none"
                        yPercent={200}
                        textClassName={"leading-[1.2]"}
                    />
                </div>
                {/* clients  */}
                <div className="flex justify-center items-center flex-wrap gap-clamp-100 relative mb-clamp-64">
                    {coloredClients.map((item, index) => (
                        <div key={item.path}>
                            <Image src={`/images/clients/colored/${item.path}`} width={140} height={80} className="w-[clamp(60px,7.29vw,140px)]" alt={item.title} title={item.title} />
                        </div>
                    ))}
                </div>
                {/* contact  */}
                <div>
                    <Card col1={col1} />
                </div>
            </div>
        </section>
    )
}

export default Clients