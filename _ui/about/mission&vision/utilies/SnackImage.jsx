"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function SnackImage() {
    const imgWrapperRef = useRef(null);
    useGSAP(() => {
        gsap.set(imgWrapperRef.current, {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"
        });

        gsap.to(imgWrapperRef.current, {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "none",
            duration: 1.5,
            scrollTrigger: {
                trigger: imgWrapperRef.current,
                start: "top 40%",
                end: "top -20%",
                markers:true
            }
        });

    }, { scope: imgWrapperRef });

    return (
        <div
            ref={imgWrapperRef}
            className="w-full h-full py-clamp-100 absolute inset-0 overflow-hidden z-0"
            style={{ pointerEvents: "none" }}
        >
            <img
                src="/images/frams/frame3.png"
                className="!w-[1920px] h-[546px] max-w-[1920px] z-[0]"
                alt="frame"
            />
        </div>
    )
}

export default SnackImage