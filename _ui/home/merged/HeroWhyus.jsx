"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Shad1 from "@/components/shads/Shad1";
import Whyus from "../whyus/Whyus";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const container = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    if (!imgRef.current || !container.current) return;

    const img = imgRef.current;
    const containerRect = container.current.getBoundingClientRect();
    const imgRect = img.getBoundingClientRect();

    const heroCenter = containerRect.top + containerRect.height / 2;
    const imgCenter = imgRect.top + imgRect.height / 2;
    const startY = heroCenter - imgCenter;

    gsap.fromTo(
      img,
      // FROM — explicit start state (scroll position = 0)
      { y: startY, scale: 2, zIndex: 10 },
      // TO — end state
      {
        y: 0,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: () => `+=${Math.abs(startY)}`,
          scrub: 1.2,
          markers: true,
        },
      }
    );
  }, { scope: container });

  return (
    <div>
      {/* Section 1 */}
      <div className="h-screen bg-stone-400 relative" ref={container}>
        <Shad1 />
      </div>

      {/* Section 2 */}
      <div className="min-h-screen bg-balance">
        <Whyus>
          <div className='flex justify-center absolute top-[30px] left-1/2 -translate-x-[50%] z-20 overflow-visible'>
            <img
              ref={imgRef}
              src="/images/o-projects/icon.png"
              alt="icon"
              className="w-[32.14vw]"
              style={{ willChange: "transform" }}
            />
          </div>
        </Whyus>
      </div>
    </div>
  );
}