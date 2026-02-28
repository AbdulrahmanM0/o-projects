"use client"
import { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import OIcon from "./OIcon";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

function Slogan({ title, slogan }) {
    const hero = title?.split(" ") || [];
    const container = useRef(null)
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const textRef3 = useRef(null);
    const scrollIconRef = useRef(null);

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
            })
            .from(scrollIconRef.current, {
                opacity: 0,
                duration: 0.8,
            })

        return () => {
            split1.revert();
            split2.revert();
            tl.kill();
        };
    }, {scope: container});

    return (
        <div ref={container} className="text-[clamp(30px,10.42vw,200px)] font-bold text-balance font-heading flex justify-center pt-[18.7037vh] overflow-hidden max-w-[1920px] w-full relative">
            <h1 className="leading-[0.7] will-change-[transform,opacity]" ref={textRef1}>
                {hero[0]}
            </h1>
            <OIcon />
            <div>
                <h1 className="leading-[0.7] will-change-[transform,opacity]" ref={textRef2}>
                    {hero.slice(1).join(" ")}
                </h1>
                <div className="mt-clamp-48 will-change-[transform,opacity]">
                    <div ref={textRef3}>{slogan}</div>
                </div>
            </div>

            <div className="h-[84.72vh] w-full absolute top-0 left-0 z-0 ">
                <div>
                    <svg ref={scrollIconRef} xmlns="http://www.w3.org/2000/svg" className="bottom-[16.76vh] left-1/2 -translate-x-[50%] absolute animate-bounce" width="27" height="16" viewBox="0 0 27 16" fill="none">
                        <path d="M26.0175 0.5856C25.6424 0.210658 25.1338 2.65335e-05 24.6035 2.64871e-05C24.0731 2.64408e-05 23.5645 0.210657 23.1895 0.5856L13.2895 10.4856L3.38945 0.585598C3.01225 0.221282 2.50704 0.019693 1.98265 0.0242497C1.45826 0.0288065 0.95663 0.239144 0.585814 0.60996C0.214997 0.980776 0.00466169 1.4824 0.000104803 2.0068C-0.00445208 2.53119 0.197137 3.03639 0.561453 3.4136L11.8755 14.7276C12.2505 15.1025 12.7591 15.3132 13.2895 15.3132C13.8198 15.3132 14.3284 15.1025 14.7035 14.7276L26.0175 3.4136C26.3924 3.03854 26.603 2.52993 26.603 1.9996C26.603 1.46927 26.3924 0.960655 26.0175 0.5856Z" fill="#E8EEFF" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Slogan;