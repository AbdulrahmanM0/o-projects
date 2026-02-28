"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { counter } from "@/data/aboutus"
import Image from "next/image"


gsap.registerPlugin(ScrollTrigger)
function Counter() {
    const container = useRef(null)

    useGSAP(() => {
        const numbers = container.current.querySelectorAll(".counter-number")

        numbers.forEach((el) => {
            const finalValue = +el.getAttribute("data-value")

            gsap.fromTo(
                el,
                { innerText: 0, opacity: 0.1 },
                {
                    innerText: finalValue,
                    duration: 4,
                    opacity: 1,
                    ease: "power2.out",
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                    onUpdate: function () {
                        el.innerText = Math.floor(el.innerText)
                    },
                }
            )
        })
    }, {scope: container})

    return (
        <div ref={container} className='px-[4.01vw] flex flex-wrap justify-between'>
            {counter.map((item) => (
                <div key={item.name} className="p-clamp-32 flex flex-col gap-clamp-32 group">
                    <h5 className="text-clamp-96 font-bold leading-[0.7] text-balance font-heading">
                        {item.name === "Revenue" && "$"}
                        <span className={`inline-block counter-number transform transition-transform duration-700 group-hover:-translate-y-[20%]`} data-value={item.counte}>0</span>
                        {(item.name === "Revenue" || item.name === "User Served") && "M"}<div className="inline-block h-fit transform transition-transform duration-700 group-hover:!rotate-[360deg]">+</div>
                    </h5>

                    <div className="relative overflow-hidden">
                        <div className="flex items-center gap-clamp-8 -translate-x-6">
                            <Image
                                src={"/images/o-projects/icon.png"}
                                className="transition-all duration-300 ease-in-out group-hover:translate-x-5"
                                width={25}
                                height={25}
                                alt="logo"
                            />

                            <h6 className="text-clamp-24 text-g100 leading-[0.7] relative underline-text group-hover:translate-x-5 transition-all duration-300 ease-in-out">
                                {item.name}
                            </h6>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Counter