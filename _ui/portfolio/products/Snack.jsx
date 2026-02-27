"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Snack() {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    gsap.to(path, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: path.parentElement, 
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      ease: "none",
    });
  }, []);

  return (
    <div className="absolute h-full w-full top-0 left-0 z-0 pointer-events-none">
      <svg
        className="h-full w-full"
        viewBox="0 0 600 2000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="
            M50,0 
            C150,200 450,400 300,600
            S500,1000 200,1400
            C100,1600 400,1800 300,2000
          "
          stroke="#ffffff33"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>
    </div>
  );
}