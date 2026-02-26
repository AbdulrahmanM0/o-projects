'use client'

import { coloredClients } from '@/data/clients'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Logos() {
    const containerRef = useRef(null)
    const itemsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial state — pushed down, invisible, slightly rotated
            gsap.set(itemsRef.current, {
                opacity: 0,
                y: 60,
                scale: 0.50,
                rotateX: 46,
                filter: 'blur(8px)',
            })

            // Staggered reveal on scroll
            gsap.to(itemsRef.current, {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
                filter: 'blur(0px)',
                duration: 1.5,
                ease: 'power3.out',
                stagger: {
                    each: 0.1,        
                    from: 'center',     
                    grid: 'auto',     
                },
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 30%',  
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                    markers:true
                },
            })

            itemsRef.current.forEach((el) => {
                el.addEventListener('mouseenter', () => {
                    gsap.to(el, {
                        y: -8,
                        scale: 1.08,
                        filter: 'drop-shadow(0 12px 20px rgba(0,0,0,0.15))',
                        duration: 0.3,
                        ease: 'power2.out',
                    })
                })
                el.addEventListener('mouseleave', () => {
                    gsap.to(el, {
                        y: 0,
                        scale: 1,
                        filter: 'drop-shadow(0 0px 0px rgba(0,0,0,0))',
                        duration: 0.4,
                        ease: 'power2.inOut',
                    })
                })
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={containerRef}
            className="flex justify-center items-center flex-wrap gap-clamp-100 relative mb-clamp-64"
            style={{ perspective: '800px' }} // enables the rotateX 3D effect
        >
            {coloredClients.map((item, index) => (
                <div
                    key={item.path}
                    ref={(el) => (itemsRef.current[index] = el)}
                    style={{ willChange: 'transform, opacity, filter' }}
                >
                    <Image
                        src={`/images/clients/colored/${item.path}`}
                        width={140}
                        height={80}
                        className="w-[clamp(60px,7.29vw,140px)]"
                        alt={item.title}
                        title={item.title}
                    />
                </div>
            ))}
        </div>
    )
}

export default Logos