"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

function RevealParagraph({ body, className }) {
    useEffect(() => {
        const split = new SplitText(".reveal-text", { type: "words" }); // to make me remember ".chart"

        gsap.from(split.words, {
            opacity: 0.5,
            y: 20,
            stagger: 0.1, 
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".reveal-text",
                start: "top 80%",
            }
        });
    }, []);

    return (
        <p className={`reveal-text text-balance text-clamp-18 ${className || ""}`}>
            {body}
        </p>
    );
}

export default RevealParagraph;