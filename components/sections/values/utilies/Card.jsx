'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

function Card({ title, body, icon, index }) {
    const cardRef = useRef(null)
    const numberRef = useRef(null)
    const borderRef = useRef(null)
    const contentRef = useRef(null)
    const iconRef = useRef(null)
    const wrapperRef = useRef(null)

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const wrapperHeight = wrapperRef.current?.offsetHeight ?? 300

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 50%',
                    end: 'top 25%',
                    scrub: 1.2,
                },
            })
            tl.fromTo(
                borderRef.current,
                { y: wrapperHeight },  
                { y: 0, ease: 'none', duration: 1 }, 
                0
            )
            tl.fromTo(
                contentRef.current,
                { clipPath: 'inset(100% 0% 0% 0%)' },
                { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', duration: 1 },
                0
            )
            tl.fromTo(
                numberRef.current,
                { y: 80, opacity: 0 },
                { y: 0, opacity: 1, ease: 'power2.out', duration: 0.6 },
                0.1
            )
            tl.fromTo(
                iconRef.current,
                { rotate: -90, opacity: 0 },
                { rotate: 0, opacity: 1, ease: 'back.out(1.4)', duration: 0.5 },
                0.5
            )
        }, cardRef)

        return () => ctx.revert()
    }, {scope: cardRef})

    return (
        <div ref={cardRef} className="group relative">
            <span
                ref={numberRef}
                className="relative z-0 block text-[clamp(150px,10.42vw,200px)] font-heading leading-[0.7] font-bold text-[#F7F7F7] group-hover:text-b400 transition-colors duration-300 ease-in-out"
            >
                0{index + 1}
            </span>
            <div ref={wrapperRef} className="relative overflow-hidden mt-[-10.88%] group-hover:mt-[0%] transition-[margin] duration-300 ease-in-out z-10">
                <div
                    ref={borderRef}
                    className="absolute top-0 left-0 w-full h-[2px] bg-b400 group-hover:bg-b600 transition-colors duration-300 z-20"
                />
                <div
                    ref={contentRef}
                    className="py-clamp-64 bg-balance"
                >
                    <div ref={iconRef} className="w-clamp-40 mb-clamp-96 transform transition-transform duration-700 group-hover:!rotate-[360deg]">
                        {icon}
                    </div>
                    <div className="text-clamp-36 leading-[0.7] font-heading font-bold mb-clamp-40">
                        {title}
                    </div>
                    <div className="text-clamp-24 leading-[1.3] bg-gradient-to-r transition-all duration-500 group-hover:text-[#737373] from-[#737373] to-[#D9D9D9] bg-clip-text text-transparent">
                        {body}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card