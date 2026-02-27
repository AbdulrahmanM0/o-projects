"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSection({ section, children, x = "-100%", scrollDistance = 600 }) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const el        = sectionRef.current;
    const triggerEl = document.getElementById(section); // Values element
    if (!el || !triggerEl) return;

    // ── 1. Start: fixed overlay, off-screen ─────────────────────────────
    gsap.set(el, {
      position : "fixed",
      top      : 0,
      left     : 0,
      width    : "100%",
    //   height   : "100vh",
      zIndex   : 9999,
      x,                   // off-screen e.g. "-100%"
    });

    // ── 2. Timeline: slide in ────────────────────────────────────────────
    const tl = gsap.timeline({ paused: true });
    tl.to(el, { x: "0%", ease: "none" });

    // ── 3. Pin Values, scrub Clients sliding over it ─────────────────────
    const st = ScrollTrigger.create({
      trigger  : triggerEl,
      start    : "bottom bottom",      // Values fully scrolled into view
      end      : `+=${scrollDistance}`, // scroll runway for slide-in
      pin      : true,                  // freeze Values during animation
      scrub    : 1,                     // ties animation to scroll
      animation: tl,

      // ── 4. Animation done → convert Clients back to normal flow ────────
      onLeave: () => {
        gsap.set(el, {
          position : "relative",
          top      : "auto",
          left     : "auto",
          width    : "100%",
          height   : "auto",
          zIndex   : "auto",
          x        : 0,
        });
        ScrollTrigger.refresh(); // recalculate all other triggers
      },

      // ── 5. Scrolling back up → restore fixed + already visible ─────────
      onEnterBack: () => {
        gsap.set(el, {
          position : "fixed",
          top      : 0,
          left     : 0,
          width    : "100%",
          height   : "100vh",
          zIndex   : 9999,
          x        : "0%",
        });
      },
    });

    return () => st.kill(); // only kills this trigger
  }, []);

  return (
    <div ref={sectionRef}>
      {children}
    </div>
  );
}