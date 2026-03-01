"use client"
import React, { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const ScrollRevealText = ({ text, className = "", textClassName, yPercent }) => {
  const pathname = usePathname();
  const container = useRef();
  const fadedText = useRef();
  const mainText = useRef();

  useEffect(
    (context) => {
      const el = container.current;
      const main = mainText.current;
      const faded = fadedText.current;

      if (!el || !main || !faded) return;

      gsap.set(main, { yPercent: -100, opacity: 1 });
      gsap.set(faded, { yPercent: 0, opacity: 0.2 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.to(
        faded,
        {
          yPercent: yPercent ?? 100,
          duration: 1.2,
          ease: "power3.out",
        },
        0
      );

      tl.to(
        main,
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        0
      );

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    []
  );
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