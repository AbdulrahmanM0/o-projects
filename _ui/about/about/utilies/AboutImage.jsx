"use client"
import gsap from 'gsap';
import Image from 'next/image'
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

function AboutImage() {
    const frameRef = useRef(null)
    const handleMouseLeave = () => {
        const frame = frameRef.current;

        gsap.to(frame, {
            duration: 0.3,
            rotateX: 0, rotateY: 0,
            ease: 'power1.inOut'

        })
    };
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const frame = frameRef.current;
        if (!frame) return;
        const rect = frame.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * -10;

        gsap.to(frame, {
            duration: 0.3,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut'

        })
    }
    useGSAP(() => {
        if (!frameRef.current) return

        gsap.from(frameRef.current, {
            x: -100,
            opacity: 0,
            duration: 1,
            rotate: 46,
            ease: "power2.out",
            stagger: 0.2, 
            scrollTrigger: {
                trigger: frameRef.current,
                start: "top 40%",
                end: "top bottom",
                toggleActions: "play none none reverse",
                // markers: true
            },
        })
    }, [])

    return (
        <div
            ref={frameRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseLeave}
            onMouseEnter={handleMouseLeave}
            className="w-[80vw] mx-auto md:mx-0 md:w-[40.94vw] perspective"
            style={{ perspective: 1000 }}
        >
            <Image src={"/images/studies/aboutus.png"} width={659} height={615} className="w-[80vw] mx-auto md:mx-0 md:w-[40.94vw] " alt="about us" />
        </div>
    )
}

export default AboutImage