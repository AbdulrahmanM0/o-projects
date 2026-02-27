"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";


gsap.registerPlugin(ScrollTrigger);
function Hero() {
  const hero = useRef(null);
  const container = useRef(null);

  useGSAP(() => {
    // Hero 
    gsap.from(hero.current, {
      y: 100,
      duration: 2,
      ease: "power3.out",
    });
  }, { scope: container });

  return (
    <section className='h-full'>
      <div className='flex justify-center items-center text-center h-full' ref={container} id="shadContainer">
        <div>
          <div className='flex-col gap-clamp-40 w-fit p-[clamp(10px,3.33vw,64px)] z-40 relative'>
            <h1 className="text-[clamp(40px,10.94vw,210px)] font-bold font-heading leading-[0.8] mb-clamp-40 relative">
              {/* Shadow */}
              <span
                className="absolute top-0 left-0 text-black opacity-20 font-heading w-full"
                style={{ transform: "translate(0px, 16px)", filter: "blur(4px)" }}
              >
                Proven <br /> Technology <br /> Solutions
              </span>

              {/* main text */}
              <span className="relative text-white font-heading" ref={hero}>
                Proven <br /> Technology <br /> Solutions
              </span>
            </h1>

            {/* description  */}
            <p className="text-balance">
              Trusted by global brands across 140+ countries. We deliver innovative <br /> software solutions that drive growth in MENA markets.
            </p>
          </div>

          {/* scroll icon  */}
          <div className='flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M28.728 10.586C28.353 10.2111 27.8444 10.0005 27.314 10.0005C26.7837 10.0005 26.2751 10.2111 25.9 10.586L16 20.486L6.10003 10.586C5.72282 10.2217 5.21762 10.0201 4.69322 10.0247C4.16883 10.0292 3.66721 10.2396 3.29639 10.6104C2.92557 10.9812 2.71524 11.4828 2.71068 12.0072C2.70612 12.5316 2.90771 13.0368 3.27203 13.414L14.586 24.728C14.9611 25.103 15.4697 25.3136 16 25.3136C16.5304 25.3136 17.039 25.103 17.414 24.728L28.728 13.414C29.103 13.039 29.3136 12.5304 29.3136 12C29.3136 11.4697 29.103 10.9611 28.728 10.586Z" fill="#E8EEFF" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;