"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

function SplashScreen() {
    const container = useRef(null)
    const cards = useRef([])

    const textStyle = "text-clamp-24 leading-[0.7] font-thin text-balance"

    const cols = [
        <div className={textStyle}>Hello..</div>,
        <div className={textStyle}>Trust..</div>,
        <div >
            <svg xmlns="http://www.w3.org/2000/svg" width="66" height="55" viewBox="0 0 66 55" fill="none">
                <path d="M42.9717 44.1289C45.1798 43.474 47.2371 42.3902 49.0258 40.9395C50.7208 39.5514 52.1292 37.8465 53.1721 35.9201C54.2251 33.9574 54.8553 31.7961 55.0219 29.5751C55.2021 27.176 54.9192 24.7645 54.1888 22.4721C53.5216 20.1748 52.4144 18.0289 50.9287 16.1537C49.5421 14.4164 47.8168 12.9789 45.8575 11.9286C43.9211 10.8955 41.7947 10.2671 39.6078 10.0817C34.9904 9.76548 30.4186 11.1633 26.7679 14.0074C25.0583 15.3856 23.6454 17.0955 22.6143 19.0341C18.777 25.3959 10.3829 26.3351 10.1897 28.6166C10.014 31.0063 10.3051 33.4074 11.047 35.6859C11.7234 37.9948 12.8376 40.1521 14.3288 42.0404C15.7778 43.8319 22.8582 41.799 29.9893 43.0352C31.934 44.0478 34.0578 44.6711 36.2415 44.8701C38.5118 45.0663 40.7985 44.8145 42.9717 44.1289ZM45.8696 53.6438C42.2592 54.7791 38.4638 55.2078 34.6911 54.9065C31.133 54.6277 27.6662 53.6429 24.4931 52.0097C21.3199 50.3764 18.5041 48.1274 16.21 45.394C13.8893 42.6682 3.2687 48.395 0.436048 38.9211C-2.3966 29.4472 9.48459 28.3245 9.85407 24.7416C10.1916 21.22 11.2477 17.805 12.9572 14.7075C14.6868 11.5763 17.0183 8.81777 19.8179 6.59049C25.8933 1.87194 33.4922 -0.448214 41.1678 0.0717343C44.7391 0.358206 48.2195 1.34254 51.4117 2.96896C54.553 4.58952 57.3337 6.82916 59.586 9.55291C61.9374 12.4096 63.6892 15.7104 64.737 19.2586C66.3852 24.4405 66.4211 30.0005 64.8398 35.2031C63.2586 40.4058 60.1348 45.006 55.8816 48.395C52.9188 50.7742 49.5228 52.5566 45.8816 53.6438H45.8696Z" fill="#1D58FF" />
            </svg>
        </div>,
        <div className={textStyle}>The Best..</div>,
    ]

    useGSAP(() => {
        const tl = gsap.timeline({
            onStart: () => {
                document.body.style.overflow = "hidden"
            },
        })

        tl.to(cards.current, {
            opacity: 0,
            rotateY: 180,
            duration: 4,
            ease: "power4.out",
        })
            .set(container.current, {
                display: "none",
                onComplete: () => {
                    document.body.style.overflow = ""
                }
            })

    }, { scope: container })

    return (
        <section ref={container} className="w-screen h-screen absolute top-0 bottom-0 z-[9999]">
            <div className="w-full h-full grid grid-cols-4 absolute top-0 left-0">
                {cols.map((items, index) => (
                    <div
                        key={index}
                        ref={el => cards.current[index] = el}
                        className="bg-b500 border-l border-l-b300 w-full h-full flex items-center justify-center"
                    >
                        {items}
                    </div>
                ))}
            </div>
            <div className="w-full h-full bg-gray-400 flex flex-col justify-between">
                <div className="h-[30.185vh] bg-b500 h-full w-full" />

                <div className="h-[30.185vh] bg-b500 h-full w-full" />
            </div>
        </section>
    )
}

export default SplashScreen