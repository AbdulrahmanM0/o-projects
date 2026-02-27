import { records } from "@/data/aboutus"
import Card from "./utilies/Card"
import ScrollRevealText from "@/components/animation/ScrollRevealText"
function Tracks() {
    return (
        <section>
            <div className='py-clamp-100 px-[3.698vw] bg-b600'>
                {/* heading  */}
                <div className="flex flex-col gap-clamp-40 leading-none text-balance text-center mb-[55px] mb-clamp-12">
                    {/* <h4 className="font-heading text-[4.2vw] font-bold leading-[0.7]">
                        What make us different?
                    </h4> */}
                    <ScrollRevealText
                        text="What make us different?"
                        className="font-heading text-[4.2vw] font-bold leading-[0.7]"
                        yPercent={200}
                        textClassName={"leading-[0.7]"}
                    />
                    <div className="text-clamp-24 leading-[0.7]">
                        Proven Track Record
                    </div>
                </div>

                {/* tracks  */}
                <div>
                    {/* cards  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-clamp-64 xl:gap-clamp-10 '>
                        {records.map((item, index) => (
                            <Card key={index} {...item} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Tracks