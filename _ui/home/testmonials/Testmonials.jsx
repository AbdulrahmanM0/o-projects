import Swiper from "./utilies/Swiper"

function Testmonials() {
    return (
        <section>
            <div className="py-[94px] bg-balance">
                {/* header  */}
                <div className="flex flex-col gap-clamp-40 leading-none text-b550 text-center mb-[55px]">
                    <div className="text-clamp-24 leading-[0.7]">
                        Testimonials
                    </div>

                    <h4 className="font-heading text-[4.2vw] font-bold leading-[0.7]">
                        Endorsed by Innovators
                    </h4>
                </div>

                {/* body  */}
                <div className="w-full h-[50.74vh] relative">
                    <img
                        src={"/images/frams/frame2.png"}
                        className="w-full h-full object-cover absolute"
                        alt="frame"
                    />
                    <Swiper />
                </div>
            </div>
        </section>
    )
}

export default Testmonials