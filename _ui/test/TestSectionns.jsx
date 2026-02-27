// Section2.jsx — owns ALL the animation logic
"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section2() {
  const section2Ref = useRef(null);

  useLayoutEffect(() => {
    const section2 = section2Ref.current;

    // 👇 Find section1 by id — no parent ref needed
    const section1 = document.getElementById("values-section");

    gsap.set(section2, { x: "-100%" });

    ScrollTrigger.create({
      trigger: section1,         
      start: "bottom bottom",
      onEnter: () => {
        gsap.to(section2, { x: "0%", duration: 0.8, ease: "power2.out" });
      },
      onLeaveBack: () => {
        gsap.to(section2, { x: "-100%", duration: 0.8, ease: "power2.in" });
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={section2Ref}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        background: "#16213e",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10000,
      }}
    >
      <h2>Section 2 — slid in from the left 🎉</h2>
    </section>
  );
}