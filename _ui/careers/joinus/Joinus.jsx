import PrimaryBtn from "@/components/btn/Primary"
import Card from "@/components/sectionCards/endcard/Card"
import { joinus } from "@/data/aboutus"

function Joinus() {
    const col1 = <div className="flex md:flex-col justify-between h-full ">
        <h3 className="leading-[1.2] font-heading font-bold text-balance text-clamp-36 2xl:text-clamp-48 3xl:text-clamp-64">
            How to get <br /> prepared for an <br /> interview
        </h3>
        <div>
            <PrimaryBtn value={"Join us"} />
        </div>
    </div>
    const col2 = <div className="grid grid-cols-2 gap-clamp-20 relative z-10">
        {joinus.map((item, index) => (
            <div className="p-[1.6667vw] flex flex-col gap-[1.6667vw] bg-[#FFFFFF24] border border-b350 backdrop-blur-[25px]">
                <h6 className="text-[clamp(22px,1.6667vw,32px)] leading-[0.7] font-bold text-balance font-heading">
                    Step {index + 1}
                </h6>
                <p className="text-clamp-18 leading-1.4 text-balance">
                    {item}
                </p>
            </div>
        ))}
    </div>

    return (
        <section>
            <div className='bg-balance px-[3.75vw] py-clamp-100'>
                <div>
                    <Card joinus={joinus} col1={col1} col2={col2} />
                </div>
            </div>
        </section>
    )
}

export default Joinus