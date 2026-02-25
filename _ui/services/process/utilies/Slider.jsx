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
        const scrollWidth = cardsContainer.scrollWidth - section.offsetWidth

        // Initial title rotation
        gsap.set(titleRef.current, { rotate: -10 })

        // Snake image initial clip
        gsap.set(imgWrapperRef.current, {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"
        })

        // Title rotation
        gsap.to(titleRef.current, {
            rotate: 0,
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "top -20%",
                scrub: 1,
            }
        })

        // Snake image reveal
        gsap.to(imgWrapperRef.current, {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "top -20%",
                scrub: 1,
            }
        })

        // Horizontal scroll timeline
        const horizontalTL = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${scrollWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                // markers: true,
            }
        })

        // Cards horizontal movement
        horizontalTL.to(cardsContainer, { x: -scrollWidth, ease: "none" })

        // Stacked cards animation: y and rotation
        cardsRefs.current.forEach((card, i) => {
            gsap.set(card, {
                x: 0,
                y: i * 120,
                rotation: 0,
                zIndex: process.length - i
            })
        })

        // Smooth fade-in / scale effect for cards as they move
        gsap.fromTo(
            cardsRefs.current,
            { scale: 0.95, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                stagger: 0.05,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                }
            }
        )

        // Clean up triggers on unmount
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill())
        }
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="min-h-screen relative">
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