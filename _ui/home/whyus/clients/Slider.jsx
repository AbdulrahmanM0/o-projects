"use client"

import { clients } from "@/data/clients"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import { useRef } from "react"
import Marquee from "react-fast-marquee"
import { ScrollTrigger } from "gsap/ScrollTrigger"



gsap.registerPlugin(ScrollTrigger)
function Slider() {
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
  },{ scope: slider })

  return (
    <div className="w-full" ref={slider}>
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={true}
      >
        {clients.map((item, index) => (
          <div key={index} className="mx-[60px]">
            <Image
              src={`/images/clients/${item}`}
              width={140}
              height={60}
              className="h-auto object-contain"
              alt="client"
              title="client"
            />
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default Slider