"use client"
import Image from 'next/image'
import { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import PrimaryBtn from '@/components/btn/Primary';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

function Card({ date, img, title, category, index }) {
    const overlayRef = useRef(null);
    const triggerRef = useRef(null);

    useGSAP(() => {
        gsap.set(overlayRef.current, {
            top: 0
        })
        gsap.to(overlayRef.current, {
            top: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top center",
                end: "bottom top",
                scrub: false,
                markers: false
            }
        })

        const overlay = overlayRef.current;
        const parent = triggerRef.current;

        const hoverIn = () => gsap.to(overlay, { top: 0, duration: 0.3, ease: "power2.out" });
        const hoverOut = () => gsap.to(overlay, { top: "100%", duration: 0.3, ease: "power2.in" });

        parent.addEventListener("mouseenter", hoverIn);
        parent.addEventListener("mouseleave", hoverOut);

        return () => {
            parent.removeEventListener("mouseenter", hoverIn);
            parent.removeEventListener("mouseleave", hoverOut);
        };

    }, [])

    return (
        <div className={`${index == 0 ? "sticky top-0 " : ""}`}>
            <div className='flex flex-col gap-[29px] group'>
                {/* date  */}
                <span className='text-clamp-18 text-balance'>
                    {date}
                </span>

                {/* image  */}
                <div ref={triggerRef} className='relative overflow-hidden'>
                    <Image width={734} height={481} src={img} alt={title} className='group-hover:scale-[1.2] duration-500 object-cover w-full' />
                    <div
                        ref={overlayRef}
                        className='bg-[#0f1a20a3] w-full h-full absolute top-0 left-0 flex items-center justify-center group-hover:top-0'
                    >
                        <PrimaryBtn value="Learn More"/>
                    </div>
                </div>

                <div className='flex justify-between'>
                    {/* title  */}
                    <h6 className='text-clamp-18 3xl:text-clamp-24 text-balance font-bold'>
                        {title}
                    </h6>

                    {/* categories */}
                    <div className='flex gap-clamp-10'>
                        {
                            category.map(item => (
                                <div className='flex items-center justify-between px-clamp-16 py-clamp-10 text-b100 text-clamp-14 leading-[0.7] border border-b300' key={item}>
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card