"use client"
import Link from 'next/link'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';


gsap.registerPlugin(ScrollTrigger)
function Content() {
    const container = useRef();
    const content = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "30% 80%",
                toggleActions: "play none none none",
                // markers: true,
                // scrub: true,
            }
        });

        // column
        tl.from(content.current, {
            y: 200,
            opacity: 0,
            duration: 3,
            ease: "power3.out",
        }, 0)

    }, { scope: container });

    return (
        <div ref={container}>
            <div ref={content}  className='py-[40px] px-[3vw] flex flex-col gap-[30px] xl:max-w-[30.36vw] border border-b50 translate-none xl:translate-x-[10.94vw] text-clamp-18 leading-[1.55] text-b200 bg-balance z-[10] relative'>
                <p className='p-0'>
                    <Link href="#" className='text-b600'>
                        {"< We combine international  > "}
                    </Link>
                    expertise with deep MENA market knowledge to deliver technology solutions that drive real business results. Our proven track record includes successful digital transformations for global brands, with measurable outcomes including cost savings, efficiency improvements, and revenue growth.
                </p>
                <p >
                    Our team understands the unique challenges of MENA markets, including cultural considerations, regulatory requirements, and business practices that influence technology success. This regional expertise, combined with cutting-edge technical capabilities, enables us to deliver solutions that not only meet international standards but also resonate with local users
                </p>
            </div>
        </div>
    )
}

export default Content