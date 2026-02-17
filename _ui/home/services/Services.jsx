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
    const titleRef = useRef(null)
    const imgWrapperRef = useRef(null)
    const cardsRefs = useRef([])

    useEffect(() => {
        const section = sectionRef.current
        const cardsContainer = cardsContainerRef.current
        const scrollWidth = cardsContainer.scrollWidth - section.offsetWidth

        gsap.set(titleRef.current, { rotate: -10 });
        gsap.set(imgWrapperRef.current, { 
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" 
        });

        gsap.to(titleRef.current, {
            rotate: 0,
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "top -20%",
                scrub: 1,
                markers: true,
            }
        });

        gsap.to(imgWrapperRef.current, {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "top -20%",
                scrub: 1,
            }
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                pin: true,
                scrub: 1,
                start: "top top",
                end: () => `+=${scrollWidth}`,
                anticipatePin: 1,
            }
        });

        tl.to(cardsContainer, { x: -scrollWidth, ease: "none" });

        // stacked random cards
        cardsRefs.current.forEach(card => {
            gsap.set(card, {
                x: gsap.utils.random(-50, 50),
                y: gsap.utils.random(-50, 50),
                rotation: gsap.utils.random(-15, 15),
                zIndex: cardsRefs.current.length
            })
        })

        gsap.to(cardsRefs.current, {
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
            x: 0,
            y: (i) => i * 120,
            rotation: 0,
            stagger: 0.05
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <section>
            <div className="bg-b600 relative overflow-hidden xl:h-auto h-screen" ref={sectionRef}>
                <div className="absolute top-[8.89vh] w-full"> 
                    <h4
                        ref={titleRef}
                        className="text-[10.417vw] font-bold font-heading text-b700 leading-[0.7] mb-[40px] w-fit mx-auto"
                        style={{ transformOrigin: "center center" }}
                    >
                        Our Services
                    </h4>

                    <div 
                        ref={imgWrapperRef} 
                        className="w-full h-[50.74vh] relative overflow-hidden"
                        style={{ pointerEvents: "none" }}
                    >
                        <img
                            src="/images/frams/frame1.png"
                            className="w-full h-full object-cover block" 
                            alt="frame"
                        />
                    </div>
                </div>

                <div className="px-[3.75vw] pt-[15.56vh] pb-[7.32vh] overflow-hidden">
                    <div ref={cardsContainerRef} className="flex gap-clamp-40 relative">
                        {services.concat(services).map((item, index) => (
                            <Card 
                                ref={el => cardsRefs.current[index] = el}
                                key={`${item.title}-${index}`} 
                                {...item} 
                                index={index} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services