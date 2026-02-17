"use client"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Impact() {
    const data = [
        {
            title: "Projects",
            number: 200
        },
        {
            title: "More clients",
            number: 90
        },
        {
            title: "More clients",
            number: 20
        },

    ];

    const container = useRef();
    const content = useRef();
    const numbersRef = useRef([]);
    numbersRef.current = []; 
    const addToRefs = (el) => {
        if (el && !numbersRef.current.includes(el)) {
            numbersRef.current.push(el);
        }
    };

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "30% 80%",
                toggleActions: "play none none reverse",
                // markers: true,
                // scrub: true,
            }
        });

        // column
        tl.from(content.current, {
            x: -200,
            opacity: 0,
            duration: 3,
            ease: "power3.out",
        }, 0)

    }, { scope: container });

    // count-up 
    useEffect(() => {
        numbersRef.current.forEach((el, i) => {
            gsap.fromTo(
                el,
                { innerText: 0 },
                {
                    innerText: data[i].number,
                    duration: 2,
                    ease: "power1.out",
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                    onUpdate: function () {
                        const value = Math.floor(el.innerText);
                        el.innerText =
                            i === data.length - 1 ? `$${value}M` : value;
                    }
                }
            )
        })
    }, [data]);

    return (
        <div ref={container} className='xl:w-[22.76vw] pt-[19px] '>
            <div className='ps-[3.75vw]' ref={content}>
                <h6 className='p-clamp-10 leading-[0.7] text-b200 text-clamp-24 mb-[9px] w-fit'>
                    Our Impact
                </h6>
                {/* counters */}
                <div className='p-[10px] xl:block flex justify-center gap-clamp-30'>
                    {data.map((item, index) => (
                        <div className={`py-clamp-32 ${index !== 0 ? " xl:border-t border-t-b50 " : " "}`}
                            key={item.title}>
                            <div className={`flex flex-col gap-clamp-20`}>
                                {/* number  */}
                                <span className='text-b7 text-clamp-80 font-heading font-bold leading-[0.69] flex gap-[16px]' ref={addToRefs}>
                                    {index === data.length - 1 ? "$" + item.number + "M" : item.number} <span>+</span>
                                </span>
                                {/* title  */}
                                <p className='text-b7 text-clamp-18 leading-[0.67]'>
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Impact