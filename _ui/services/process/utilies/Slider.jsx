"use client"
import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { process } from "@/data/aboutus"
import { useGSAP } from "@gsap/react"
import Card from "./Card"

gsap.registerPlugin(ScrollTrigger)

function Slider() {
    const sectionRef = useRef(null)
    const cardsContainerRef = useRef(null)
    const titleRef = useRef(null)
    const imgWrapperRef = useRef(null)
    const cardsRefs = useRef([])

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
    return (
        <section ref={sectionRef} className="min-h-screen shadow-inset-top bg-balance py-clamp-100 relative">
            {/* Title */}
            <div className='text-center mb-[5vh] relative z-10'>
                <h2
                    ref={titleRef}
                    className='text-[10.42vw] font-heading leading-[0.7] font-bold'
                >
                    Our Process
                </h2>
            </div>

            {/* Cards container */}
            <div className="px-[3.75vw] overflow-hidden z-10 relative">
                <div ref={cardsContainerRef} className="flex gap-clamp-10 relative">
                    {process.map((item, index) => (
                        <Card
                            {...item}
                            key={index}
                            index={index}
                            ref={(el) => cardsRefs.current[index] = el}
                        />
                    ))}
                </div>
            </div>

            {/* Snake image */}
            <div
                ref={imgWrapperRef}
                className="w-full h-full flex items-center absolute inset-0 overflow-hidden z-0 pointer-events-none"
            >
                <img
                    src="/images/frams/frame1.png"
                    className="w-[1920px] h-[546px] max-w-[1920px] z-0 translate-y-24"
                    alt="frame"
                />
            </div>
        </section>
    )
}

export default Slider