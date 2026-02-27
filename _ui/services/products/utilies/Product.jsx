"use client"

import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RevealParagraph from '@/components/animation/RevealParagraph'

gsap.registerPlugin(ScrollTrigger)

function Product({ title, body, img, index }) {
  const cardRef = useRef(null)

  const colors = ["#F3C921", "#00E4A5", "#E7E8E9"]
  const grads = ["from-[#F3C921]", "from-[#00E4A5]", "from-[#E7E8E9]"]

  const color = colors[index % colors.length]
  const grad = grads[index % grads.length]

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    // Advanced scroll animation
    gsap.fromTo(
      el,
      { opacity: 0, y: 100, scale: 0.9, rotation: -5 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        ease: "power3.out",
        duration: 1.2,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",   // when top of card hits 80% of viewport
          end: "bottom 20%",  // optional
          toggleActions: "play none none reverse",
        },
      }
    )
  }, [])

  return (
    <div
      ref={cardRef}
      className='p-[3.75vw] bg-b500 border border-b200 mb-clamp-48 sticky top-[15.28vh] group overflow-hidden'
      style={{ zIndex: index + 1 }}
    >
      {/* gradient border */}
      <div
        className={`absolute inset-0 p-[3px] bg-gradient-to-r ${grad} to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out z-0`}
      >
        <div className="w-full h-full bg-b500"></div>
      </div>

      {/* borders */}
      <div>
        <svg className='absolute top-0 left-0' width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M0 0V24.001H2.18164V2.32227H24V0H0Z" fill={color} />
        </svg>
        <svg className='absolute top-0 right-0' width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M24 0V24.001H21.8184V2.32227H0V0H24Z" fill={color} />
        </svg>
        <svg className='absolute bottom-0 left-0' width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M0 24.001V0H2.18164V21.6787H24V24.001H0Z" fill={color} />
        </svg>
        <svg className='absolute bottom-0 right-0' width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M24 24.001V0H21.8184V21.6787H0V24.001H24Z" fill={color} />
        </svg>
      </div>

      <div className='flex justify-between flex-wrap gap-clamp-64 relative z-10'>
        {/* image */}
        <div className='overflow-hidden'>
          <Image
            width={420}
            height={250}
            className='w-[21.875vw] transition-all duration-300 group-hover:rotate-[5deg] group-hover:scale-[1.2]'
            src={img}
            alt={title}
          />
        </div>

        {/* title */}
        <div className='flex items-center'>
          <h3
            className="font-heading text-[4.17vw] font-bold leading-none text-balance"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>

        {/* description */}
        <div className='flex items-center xl:w-[21.51vw]'>
          <RevealParagraph className={"!text-b100 text-clamp-16 leading-[1.2]"} body={body} />
        </div>
      </div>
    </div>
  )
}

export default Product