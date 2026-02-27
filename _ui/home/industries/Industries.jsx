import SecondaryBtn from "@/components/btn/Secondary"
import Card from "./utilies/Card"
import ScrollRevealText from "@/components/animation/ScrollRevealText";

function Industries() {

    return (
        <section>
            <div className='bg-balanne px-[clamp(10px,3.62vw,69.5px)] pb-[60px]'>
                <div className='bg-b600 block xl:flex overflow-hidden'>

                    {/* content  */}
                    <div className='p-[clamp(10px,3.3vw,63.3px)] flex flex-col gap-clamp-40 text-balance w-fit'>
                        <div className='text-balance text-clamp-24 leading-none'>
                            Industries
                        </div>

                        <ScrollRevealText
                            text="Are you looking to minimize technical risk?"
                            className=" font-bold leading-none capitalize font-heading max-w-[clamp(100px,49.5vw,950px)] h-full"
                            yPercent={200}
                            textClassName={"leading-[0.9] text-balance text-[clamp(10px,5vw,96px)]"}
                        />
                        <p className="text-clamp-18 max-w-[clamp(40px,22.81vw,434px)]">
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