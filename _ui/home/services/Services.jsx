"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { services } from "@/data/services"
import Card from "./utilies/Card"
import { useGSAP } from "@gsap/react"


gsap.registerPlugin(ScrollTrigger);

function getScatter(index) {
    // Seeded-ish pattern so it's not purely random on every render
    const scatters = [
        { x: -300, y: -80, rotZ: -12 },
        { x: 200, y: -150, rotZ: 8 },
        { x: -150, y: 120, rotZ: -6 },
        { x: 350, y: 60, rotZ: 10 },
        { x: -400, y: -40, rotZ: 15 },
        { x: 100, y: 180, rotZ: -9 },
        { x: -250, y: 200, rotZ: 7 },
        { x: 450, y: -100, rotZ: -13 },
    ]
    return scatters[index % scatters.length]
}

function Services() {
    const sectionRef = useRef(null)
    const cardsContainerRef = useRef(null)
    const titleRef = useRef(null)
    const imgWrapperRef = useRef(null)
    const cardsRefs = useRef([])
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

        cardsRefs.current.forEach((card, i) => {
            const { x, y, rotZ } = getScatter(i)
            gsap.set(card, {
                x,
                y,
                rotation: rotZ,
                opacity: 0,
                zIndex: i,
                transformOrigin: "center center",
            })
        })

        // timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () =>
                    `+=${cardsContainer.scrollWidth - section.offsetWidth} 500`,
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                markers: true
            }
        })
        // cards 
        tl.from(cardsContainer, {
            y: "100%",
            duration: 0.5,
            ease: "power2.out",
        }, 0.6)

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
            1
        )

        return () => {
            // timeline finsh
            tl.kill()

            // i made this optional plus i donnt know if its better to remove it or not ?!! 
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
                        className="flex gap-clamp-40 relative will-change-transform relative"
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