"use client"
import { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import OIcon from "./OIcon";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

function Slogan({ title, slogan }) {
    const hero = title?.split(" ") || [];
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const textRef3 = useRef(null);

    useGSAP(() => {
        if (!textRef1.current || !textRef2.current) return;

        const split1 = new SplitText(textRef1.current, { type: "chars" });
        const split2 = new SplitText(textRef2.current, { type: "chars" });
        const split3 = new SplitText(textRef3.current, { type: "chars" });

        const tl = gsap.timeline();

        tl.from(split1.chars, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.05,
            ease: "back.out(1.7)",
            onStart: () => {
                document.body.style.overflow = "hidden"
            },
        })
            .from(split2.chars, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.05,
                ease: "back.out(1.7)",
            })
            .from(split3.chars, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.02,
                ease: "back.out(1.7)",
                onComplete: () => {
                    document.body.style.overflow = ""
                },
            });

        return () => {
            split1.revert();
            split2.revert();
            tl.kill();
        };
    }, []);

    return (
        <div className="text-[10.42vw] font-bold text-balance font-heading flex justify-center pt-[18.7037vh] overflow-hidden max-w-screen">
            <h1 className="leading-[0.7]" ref={textRef1}>
                {hero[0]}
            </h1>
            <OIcon />
            <div>
                <h1 className="leading-[0.7]" ref={textRef2}>
                    {hero.slice(1).join(" ")}
                </h1>
                <div className="mt-clamp-48">
                    <div ref={textRef3}>{slogan}</div>
                </div>
            </div>
        </div>
    );
}

export default Slogan;