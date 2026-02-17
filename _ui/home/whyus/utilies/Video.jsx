"use client"
"use client"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

function Video() {
  const container = useRef();
  const content = useRef();

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
      x: 200,
      opacity: 0,
      duration: 3,
      ease: "power3.out",
    }, 0)

  }, { scope: container });
  return (
    <div className='mt-auto' ref={container}>
      <video ref={content} src="/videos/whyus.mp4" className='object-cover max-w-[67.3vw] aspect-[1293/899]' controls fill loop autoPlay muted></video>
    </div>
  )
}

export default Video