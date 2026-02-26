"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Title() {
    const titleRef = useRef(null)
    const text = "Comprehensive Technology Solutions"

    useGSAP(() => {
        const letters = titleRef.current.querySelectorAll(".letter")

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            }
        })
        tl.fromTo(
            titleRef.current,
            { opacity: 0.2 },
            { opacity: 1, duration: 1, ease: "power2.out" }
        )
        tl.to(letters, {
            rotate: () => gsap.utils.random(-25, 25),
            y: () => gsap.utils.random(-10, 10),
            duration: 0.3,
            stagger: {
                each: 0.02,
                from: "random"
            },
            ease: "power2.out"
        })
        tl.to(letters, {
            rotate: 0,
            y: 0,
            duration: 0.4,
            ease: "elastic.out(1, 0.4)",
            stagger: {
                each: 0.02,
                from: "random"
            }
        })

    }, [])

    return (
        <h3
            ref={titleRef}
            className="font-heading text-[6.667vw] font-bold leading-[1.1] text-balance"
        >
            {text.split("").map((char, i) => (
                <span
                    key={i}
                    className="letter inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </h3>
    )
}

export default Title