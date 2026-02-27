"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Card from "./Card";
import { testmonials } from "@/data/testmonnials";

import "swiper/css";
import "swiper/css/pagination";
import { useGSAP } from "@gsap/react";

const SCATTER = [
  { x: -220, y: -60, rotZ: 10, rotY: -4, z: 1 },
  { x: 60, y: -140, rotZ: 8, rotY: 4, z: 2 },
  { x: -100, y: 140, rotZ: -8, rotY: -3, z: 3 },
  { x: 200, y: 70, rotZ: 5, rotY: 4, z: 4 },
];

export default function SwiperSection() {
  const sectionRef = useRef(null);
  const swiperWrapRef = useRef(null);
  const swiperRef = useRef(null);
  const assembledRef = useRef(false);

  useGSAP(() => {
    const raf = requestAnimationFrame(() => {
      const wrap = swiperWrapRef.current;
      if (!wrap) return;

      const slides = wrap.querySelectorAll(".swiper-slide");
      if (!slides.length) return;

      // swipper 
      if (swiperRef.current) {
        swiperRef.current.allowTouchMove = false;
        swiperRef.current.allowSlideNext = false;
        swiperRef.current.allowSlidePrev = false;
      }

      gsap.set(wrap, { perspective: 1200, overflow: "visible" });
      const inner = wrap.querySelector(".swiper-wrapper");
      if (inner) gsap.set(inner, { overflow: "visible" });

      // cards positions
      slides.forEach((slide, i) => {
        const p = SCATTER[i] ?? { x: 0, y: 0, rotZ: 0, rotY: 0, z: 0 };
        gsap.set(slide, {
          x: p.x,
          y: p.y,
          rotationZ: p.rotZ,
          rotationY: p.rotY,
          zIndex: p.z,
          transformStyle: "preserve-3d",
          position: "absolute",
          left: "50%",
          xPercent: -50,
          force3D: true,
          willChange: "transform",
          cursor: "pointer",
        });
      });

      const handleClick = () => {
        if (assembledRef.current) return;
        assembledRef.current = true;

        const slides = Array.from(
          swiperWrapRef.current.querySelectorAll(".swiper-slide")
        );

        // get positions
        const firstRects = slides.map(slide => slide.getBoundingClientRect());

        // set positions
        slides.forEach(slide => {
          gsap.set(slide, {
            clearProps: "position,left,xPercent"
          });
        });

        swiperRef.current.update();

        // get fnal positions
        const lastRects = slides.map(slide => slide.getBoundingClientRect());

        // revert positions
        slides.forEach((slide, i) => {
          const dx = firstRects[i].left - lastRects[i].left;
          const dy = firstRects[i].top - lastRects[i].top;

          gsap.set(slide, {
            x: dx,
            y: dy,
            rotationZ: SCATTER[i]?.rotZ ?? 0,
            rotationY: SCATTER[i]?.rotY ?? 0,
          });
        });

        // natural positions (make them back)
        gsap.to(slides, {
          x: 0,
          y: 0,
          rotationZ: 0,
          rotationY: 0,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.05,
          onComplete: () => {
            swiperRef.current.allowTouchMove = true;
            swiperRef.current.allowSlideNext = true;
            swiperRef.current.allowSlidePrev = true;
          }
        });
      };

      slides.forEach((slide) => slide.addEventListener("click", handleClick));

      return () => {
        slides.forEach((slide) => slide.removeEventListener("click", handleClick));
      };
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center h-full"
    >
      <div ref={swiperWrapRef} className="w-full px-[3.62vw] h-full">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} !w-[30px] !h-[5px] !rounded-[4px] custom-bullet"></span>`,
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="w-full pb-12 !overflow-visible"
        >
          {testmonials.map((item, index) => (
            <SwiperSlide
              key={item.id ?? index}
              className="flex justify-center items-center"
            >
              <div className={`w-full ${index % 2 === 0 ? "mb-8" : "mt-8"}`}>
                <Card {...item} index={index} />
              </div>
            </SwiperSlide>
          ))}

          <div className="flex items-center justify-center gap-[13px] absolute left-1/2 -translate-x-[50%] bottom-[-9.26vh] select-none w-fit mx-auto z-20">
            <button className="swiper-prev text-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px]" width="12" height="20" viewBox="0 0 12 20" fill="none">
                <path d="M11.0457 0.439179C11.3269 0.720471 11.4849 1.10193 11.4849 1.49968C11.4849 1.89743 11.3269 2.27889 11.0457 2.56018L3.62068 9.98518L11.0457 17.4102C11.3189 17.6931 11.4701 18.072 11.4667 18.4653C11.4633 18.8586 11.3055 19.2348 11.0274 19.5129C10.7493 19.791 10.3731 19.9488 9.97978 19.9522C9.58649 19.9556 9.20758 19.8044 8.92468 19.5312L0.43918 11.0457C0.157973 10.7644 4.53852e-07 10.3829 4.36466e-07 9.98518C4.1908e-07 9.58743 0.157973 9.20597 0.43918 8.92468L8.92468 0.439179C9.20597 0.157973 9.58743 -4.1908e-07 9.98518 -4.36466e-07C10.3829 -4.53852e-07 10.7644 0.157973 11.0457 0.439179Z" fill="#1D58FF" />
              </svg>
            </button>

            <div className="custom-pagination flex items-center gap-[5px]" />

            <button className="swiper-next text-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px]" width="12" height="20" viewBox="0 0 12 20" fill="none">
                <path d="M0.439184 0.439179C0.157977 0.720471 3.76653e-06 1.10193 3.74914e-06 1.49968C3.73176e-06 1.89743 0.157977 2.27889 0.439184 2.56018L7.86418 9.98518L0.439183 17.4102C0.165946 17.6931 0.0147545 18.072 0.0181724 18.4653C0.0215894 18.8586 0.179343 19.2348 0.457455 19.5129C0.735567 19.791 1.11179 19.9488 1.50508 19.9522C1.89838 19.9556 2.27728 19.8044 2.56018 19.5312L11.0457 11.0457C11.3269 10.7644 11.4849 10.3829 11.4849 9.98518C11.4849 9.58743 11.3269 9.20597 11.0457 8.92468L2.56018 0.439179C2.27889 0.157973 1.89743 -4.1908e-07 1.49968 -4.36466e-07C1.10194 -4.53852e-07 0.720475 0.157973 0.439184 0.439179Z" fill="#1D58FF" />
              </svg>
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}