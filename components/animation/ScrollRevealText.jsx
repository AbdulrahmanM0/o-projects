"use client"
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ScrollRevealText = ({ text, className = "",textClassName,yPercent }) => {
  const container = useRef();
  const fadedText = useRef();
  const mainText = useRef();

  useGSAP(() => {
    gsap.set(mainText.current, { yPercent: -100, opacity: 1 });
    gsap.set(fadedText.current, { yPercent: 0, opacity: 0.2 }); 

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play none none none",
        markers:false
      },
    });

    tl.to(fadedText.current, {
      yPercent: yPercent || 100,
      duration: 1.2,
      ease: "power3.out",
    }, 0);

    tl.to(mainText.current, {
      yPercent: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
    }, 0);

    // return () => ScrollTrigger.getAll().forEach(st => st.kill());
  }, { scope: container });

  return (
    <div ref={container} className={`relative overflow-hidden inline-block will-change-transform ${className}`}>
      {/* Faded text */}
      <h2
        ref={fadedText}
        className={`absolute rotate-[356deg] top-0 left-0 w-full select-none pointer-events-none will-change-transform ${textClassName}`}
      >
        {text}
      </h2>

      {/* Main text */}
      <h2
        ref={mainText}
        className={`relative will-change-transform ${textClassName}`}
      >
        {text}
      </h2>
    </div>
  );
};

export default ScrollRevealText;