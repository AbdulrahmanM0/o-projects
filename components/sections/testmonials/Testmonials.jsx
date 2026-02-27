"use client"
import { useGSAP } from "@gsap/react"
import Swiper from "./utilies/Swiper"
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

function Testmonials() {
    const imgWrapperRef = useRef(null);
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.set(imgWrapperRef.current, {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"
        });

        gsap.to(imgWrapperRef.current, {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "none",
            duration: 1.2,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 40%",
                end: "top -20%",
            }
        });

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef}>
            <div className="py-clamp-100 bg-balance relative w-screen overflow-hidden shadow-inset-top">
                {/* header */}
                <div className="flex flex-col gap-clamp-40 leading-none text-b550 text-center mb-[55px] z-10 relative">
                    <div className="text-clamp-24 leading-[0.7]">
                        Testimonials
                    </div>
                    <h4 className="font-heading text-[4.2vw] font-bold leading-[0.7]">
                        Endorsed by Innovators
                    </h4>
                </div>

                {/* body */}
                <div className="w-full h-[50.74vh] relative z-20">
                    <Swiper />
                </div>

                {/* image rapper  */}
                <div ref={imgWrapperRef} className="w-full h-full flex items-center absolute inset-0 overflow-hidden">
                    <img
                        src="/images/frams/frame2.png"
                        className="!w-[1920px] h-[546px] max-w-[1920px] z-[0] translate-y-24"
                        alt="frame"
                    />
                </div>
            </div>
        </section>
    )
}

export default Testmonials