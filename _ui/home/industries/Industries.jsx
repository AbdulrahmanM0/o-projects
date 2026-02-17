import SecondaryBtn from "@/components/btn/Secondary"
import Card from "./utilies/Card"

function Industries() {
    return (
        <section>
            <div className='bg-balanne px-[3.62vw] pb-[60px]'>
                <div className='bg-b600 block xl:flex '>

                    {/* content  */}
                    <div className='p-[3.3vw] flex flex-col gap-clamp-40 text-balance w-fit'>
                        <div className='text-balance text-clamp-24 leading-none'>
                            Industries
                        </div>
                        <h4 className="text-[5vw] font-bold leading-none capitalize font-heading max-w-[49.5vw]">
                            Are you looking to <br /> minimize technical <br /> risk?
                        </h4>
                        <p className="text-clamp-18 max-w-[22.81vw]">
                            We will provide guidance on technology choices, implementation strategies, and organizational structures
                        </p>
                        <div>
                            <SecondaryBtn />
                        </div>
                    </div>

                    {/* card  */}
                    <div className="flex flex-col justify-end">
                        <Card/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Industries