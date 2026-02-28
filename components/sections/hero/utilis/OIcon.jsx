"use client"
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function OIcon() {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const image = imageRef.current;
      if (!image) return;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const rotateY = ((e.clientX - centerX) / centerX) * 15; 
      const rotateX = ((e.clientY - centerY) / centerY) * -15; 

      gsap.to(image, {
        rotationY: rotateY,
        rotationX: rotateX,
        duration: 0.8,
        ease: "power1.out",
        transformPerspective: 800,
        transformOrigin: "center",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Image
      ref={imageRef}
      className='ms-[clamp(-430.4px,-22.4167vw,-30px)] me-[clamp(-115.2px,-6vw,-10px)] mt-[clamp(-192px,-10vw,-10px)] w-[clamp(100px,44.5416vw,855.2px)] relative z-10 will-change-transform'
      src="/images/o-projects/blue-icon.png"
      width={740}
      height={740}
      alt='o-projects'
    />
  );
}