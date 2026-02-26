"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { services } from "@/data/services"
import Card from "./utilies/Card"
import { useGSAP } from "@gsap/react"


gsap.registerPlugin(ScrollTrigger)
function Services() {
    const sectionRef = useRef(null)
    const cardsContainerRef = useRef(null)
    const titleRef = useRef(null)
    const imgWrapperRef = useRef(null)
    const cardsRefs = useRef([])

    // Important: clear refs on every render
    cardsRefs.current = []

    useGSAP(() => {
        const section = sectionRef.current
        const cardsContainer = cardsContainerRef.current

        if (!section || !cardsContainer) return
        // states 
        gsap.set(titleRef.current, { rotate: -10 })
        gsap.set(imgWrapperRef.current, {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
            willChange: "clip-path"
        })

        // cards position
        const randomValues = cardsRefs.current.map(() => ({
            x: gsap.utils.random(-50, 50),
            y: gsap.utils.random(-50, 50),
            rotation: gsap.utils.random(-15, 15)
        }))

        cardsRefs.current.forEach((card, i) => {
            gsap.set(card, {
                ...randomValues[i],
                willChange: "transform"
            })
        })

        // timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () =>
                    `+=${cardsContainer.scrollWidth - section.offsetWidth}`,
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true
            }
        })

        // title
        tl.to(titleRef.current, { rotate: 0 }, 0)

        // image
        tl.to(
            imgWrapperRef.current,
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                ease: "none"
            },
            0
        )

        // H scroll
        tl.to(
            cardsContainer,
            {
                x: () =>
                    -(cardsContainer.scrollWidth - section.offsetWidth),
                ease: "none"
            },
            0
        )

        // stacked cards
        tl.to(
            cardsRefs.current,
            {
                x: 0,
                y: (i) => i * 120,
                rotation: 0,
                stagger: 0.05
            },
            0
        )
        return () => {
            // kill timeline
            tl.kill()


            //   i made this optional 
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger && sectionRef.current?.contains(trigger.trigger)) {
                    if (trigger.pinSpacer && trigger.pinSpacer.parentNode) {
                        trigger.pinSpacer.parentNode.removeChild(trigger.pinSpacer)
                    }
                    trigger.kill()
                }
            })

            cardsRefs.current = []
            ScrollTrigger.refresh()
        }
    }, { scope: sectionRef })

    // refresh
    // useEffect(() => {
    //     const handleLoad = () => ScrollTrigger.refresh()
    //     window.addEventListener("load", handleLoad)
    //     return () => window.removeEventListener("load", handleLoad)
    // }, [])

    return (
        <section className="services bg-b600">
            <div
                className="relative overflow-hidden xl:h-auto h-screen"
                ref={sectionRef}
            >
                {/* title */}
                <div className="absolute top-[8.89vh] w-full z-10">
                    <h4
                        ref={titleRef}
                        className="text-[10.417vw] font-bold font-heading text-b700 leading-[0.7] mb-[40px] w-fit mx-auto"
                        style={{ transformOrigin: "center center" }}
                    >
                        Our Services
                    </h4>
                </div>

                {/* cards */}
                <div className="px-[3.75vw] pt-[15.56vh] pb-[7.32vh] overflow-hidden z-10 relative">
                    <div
                        ref={cardsContainerRef}
                        className="flex gap-clamp-40 relative will-change-transform"
                    >
                        {services.concat(services).map((item, index) => (
                            <Card
                                key={`${item.title}-${index}`}
                                ref={(el) => el && cardsRefs.current.push(el)}
                                {...item}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* snack image */}
                <div
                    ref={imgWrapperRef}
                    className="w-full h-full flex items-center absolute inset-0 overflow-hidden z-0"
                    style={{ pointerEvents: "none", willChange: "transform" }}
                >
                    <img
                        src="/images/frams/frame1.png"
                        className="!w-[1920px] h-[546px] max-w-[1920px] z-[0] translate-y-24"
                        alt="frame"
                    />
                </div>
            </div>
        </section>
    )
}

export default Services