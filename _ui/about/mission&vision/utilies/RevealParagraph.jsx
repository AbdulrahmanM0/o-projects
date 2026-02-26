"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);
function RevealParagraph({body}) {
    useGSAP(() => {
        const split = new SplitText(".reveal-text", { type: "chars" });

        gsap.from(split.chars, {
            opacity: 0.2,
            y: 20,
            stagger: 0.01,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".reveal-text",
                start: "top 80%",
            }
        });
    }, []);
    return (
        <p className="reveal-text text-balance text-clamp-18">
            {body}
        </p>
    )
}

export default RevealParagraph