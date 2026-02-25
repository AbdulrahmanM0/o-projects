"use client"

import { techs } from "@/data/tech"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import { useRef } from "react"
import Marquee from "react-fast-marquee"
import { ScrollTrigger } from "gsap/ScrollTrigger"



gsap.registerPlugin(ScrollTrigger)
function Technologies() {
  const slider = useRef();

  useGSAP(() => {
    gsap.from(slider.current, {
      scrollTrigger: {
        trigger: slider.current,
        start: "30% 80%",
        toggleActions: "play none none reverse",
        x: 100,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
      }
    }, 0)
  })

  return (
    <div className="w-full" ref={slider}>
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={true}
      >
        {techs.map((item, index) => (
          <div key={index} className="mx-[42px]">
            <Image
              src={`/images/techs/${item?.img}`}
              width={255}
              height={83}
              className="h-auto object-contain"
              alt={item.title}
              title={item?.title}
            />
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default Technologies