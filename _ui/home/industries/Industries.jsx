import SecondaryBtn from "@/components/btn/Secondary"
import Card from "./utilies/Card"
import ScrollRevealText from "@/components/animation/ScrollRevealText";

function Industries() {

    return (
        <section>
            <div className='bg-balanne px-[3.62vw] pb-[60px]'>
                <div className='bg-b600 block xl:flex overflow-hidden'>

                    {/* content  */}
                    <div className='p-[3.3vw] flex flex-col gap-clamp-40 text-balance w-fit'>
                        <div className='text-balance text-clamp-24 leading-none'>
                            Industries
                        </div>

                        <ScrollRevealText
                            text="Are you looking to minimize technical risk?"
                            className=" font-bold leading-none capitalize font-heading max-w-[49.5vw] h-full"
                            yPercent={200}
                            textClassName={"leading-[0.9] text-balance text-[5vw]"}
                        />
                        <p className="text-clamp-18 max-w-[22.81vw]">
                            We will provide guidance on technology choices, implementation strategies, and organizational structures
                        </p>
                        <div>
                            <SecondaryBtn />
                        </div>
                    </div>

                    {/* card  */}
                    <Card />
                </div>
            </div>
        </section>
    )
}

export default Industries