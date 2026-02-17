"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { studies } from "@/data/studies";
import Card from "./Card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testmonials } from "@/data/testmonnials";

gsap.registerPlugin(ScrollTrigger);

export default function SwiperSection() {
  const containerRef = useRef(null);
  const swiperContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const [showSwiper, setShowSwiper] = useState(false);

  cardRefs.current = [];


  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      gsap.set(card, {
        x: i * 20,
        y: i * 20,
        rotation: i * 2,
        zIndex: studies.length - i,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
        onEnter: () => {
          gsap.to(cardRefs.current, {
            x: (i) => i * 280,
            y: 0,
            rotation: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
            onComplete: () => {
              setShowSwiper(true);
            },
          });
        },
      },
    });

    if (showSwiper && swiperContainerRef.current) {
      gsap.fromTo(
        swiperContainerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [showSwiper]);

  return (
    <section
      ref={containerRef}
      className="min-h-full"
    >
      <div className="w-full px-[3.62vw]">
        <div>
          {/* // Swiper */}
          <div ref={swiperContainerRef}>
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={20}



              navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
              }}
              pagination={{
                el: ".custom-pagination",
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} custom-bullet"></span>`;
                },
              }}

              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              className="w-full h-[400px] pb-12"
            >
              {testmonials.slice(0, 4).map((study, index) => (
                <SwiperSlide
                  key={study.id || index}
                  className="flex justify-center items-center"
                >
                  <div className={`w-full h-full ${index % 2 === 0 ? "mb-8" : "mt-8"
                    }`}>
                    <Card {...study} index={index} />
                  </div>
                </SwiperSlide>
              ))}
              <div className="flex items-center justify-center gap-6 mt-10 select-none">

                {/* left arrow */}
                <button className="swiper-prev text-blue-600 text-3xl">
                  &#10094;
                </button>

                {/* pagination bars */}
                <div className="custom-pagination flex items-center gap-3"></div>

                {/* right arrow */}
                <button className="swiper-next text-blue-600 text-3xl">
                  &#10095;
                </button>

              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}