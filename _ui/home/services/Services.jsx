"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { services } from "@/data/services"
import Card from "./utilies/Card"

gsap.registerPlugin(ScrollTrigger)

function Services() {
    const sectionRef = useRef(null)
    const cardsContainerRef = useRef(null)

    useEffect(() => {
        const section = sectionRef.current
        const cardsContainer = cardsContainerRef.current

        // Calculate how far to scroll
        const scrollWidth = cardsContainer.scrollWidth - section.offsetWidth

        // scroll animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                pin: true, 
                scrub: 1, 
                start: "top top", 
                end: () => `+=${scrollWidth}`, 
                anticipatePin: 1,
            }
        })

        // Animate cards horizontally
        tl.to(cardsContainer, {
            x: -scrollWidth,
            ease: "none"
        })

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <section >
            <div className="bg-b600 relative overflow-hidden" ref={sectionRef}>
                <div className="absolute top-[8.89vh]">
                    <h4 className="text-[10.417vw] font-bold font-heading text-b700 leading-[0.7] mb-[40px] w-fit mx-auto">
                        Our Services
                    </h4>
                    <div className="w-full h-[50.74vh] relative">
                        <img
                            src={"/images/frams/frame1.png"}
                            className="w-full h-full object-cover"
                            alt="frame"
                        />
                    </div>
                </div>

                {/* cards  */}
                <div className="px-[3.75vw] pt-[15.56vh] pb-[7.32vh] overflow-hidden" >
                    <div ref={cardsContainerRef} className="flex gap-clamp-40">
                        {
                            services.concat(services).map((item, index) => (
                                <Card key={`${item.title}-${index}`} {...item} index={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services