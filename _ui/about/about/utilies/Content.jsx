"use client"
import { aboutus } from "@/data/aboutus"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)

function Content() {
    const itemsRef = useRef([])
    itemsRef.current = [] 

    const colors = ["text-g400", "text-y400", "text-b600"]

    const addToRefs = (el) => {
        if (el && !itemsRef.current.includes(el)) {
            itemsRef.current.push(el)
        }
    }

    useGSAP(() => {
        if (!itemsRef.current.length) return

        gsap.from(itemsRef.current, {
            x: -100, 
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2, 
            scrollTrigger: {
                trigger: itemsRef.current[0],
                start: "top 80%",
                end: "top 50%",
                toggleActions: "play none none none",
            },
        })
    }, [])

    return (
        <>
            {aboutus.map((item, index) => (
                <div
                    key={item.heighlights + index}
                    ref={addToRefs}
                    className="ms-[clamp(10px,3.65vw,70px)] relative group"
                >
                    <div
                        className={`w-[clamp(20px,5.57vw,107px)] ${index ? "bg-wd800" : "bg-b600"} 
                                    transition-transform duration-300 ease-in-out 
                                    group-hover:bg-b600 group-hover:scale-x-[1.2] 
                                    px-[16px] py-[3px] md:py-[6px] text-balance text-clamp-18 
                                    absolute text-end left-[clamp(-143px,-7.45vw,-20px)] top-[-0.56vh]`}
                    >
                        0{index + 1}
                    </div>
                    <p className="text-wd text-clamp-20 group-hover:text-b400">
                        {"<"}{" "}
                        <span className={`${colors[index]} underline-text`}>
                            {item.heighlights}
                        </span>{" "}
                        {"> "} {item.body}
                    </p>
                </div>
            ))}
        </>
    )
}

export default Content