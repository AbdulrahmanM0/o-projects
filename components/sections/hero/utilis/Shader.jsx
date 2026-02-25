"use client"
import { useRef, useEffect } from "react"
import gsap from "gsap"

export default function DarkShader({ children }) {
  const blob1 = useRef(null)
  const blob2 = useRef(null)
  const blob3 = useRef(null)

  useEffect(() => {
    const width = window.innerWidth

    // Blob 1
    gsap.fromTo(
      blob1.current,
      { x: 0 },
      {
        x: -width - 250, 
        duration: 15,
        repeat: -1,
        ease: "linear",
      }
    )

    // Blob 2
    gsap.fromTo(
      blob2.current,
      { x: 0 },
      {
        x: -width - 300,
        duration: 20,
        repeat: -1,
        ease: "linear",
      }
    )

    // Blob 3
    gsap.fromTo(
      blob3.current,
      { x: 0 },
      {
        x: -width - 300,
        duration: 25,
        repeat: -1,
        ease: "linear",
      }
    )
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0c1a20] absolute top-0 left-0">

      {/* Blob 1 */}
      <div
        ref={blob1}
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-40"
        style={{
          background: "radial-gradient(circle, #153EB5 0%, transparent 80%)",
          top: "-40%",     
          left: "50%",    
          transform: "translateX(-50%)",
        }}
      />

      {/* Blob 2 */}
      <div
        ref={blob2}
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-30"
        style={{
          background: "radial-gradient(circle, #00E4A5 0%, transparent 80%)",
          top: "-40%",
          left: "70%",   
          transform: "translateX(-50%)",
        }}
      />

      {/* Blob 3 */}
      <div
        ref={blob3}
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-30"
        style={{
          background: "radial-gradient(circle, #d900e4 0%, transparent 80%)",
          top: "-40%",
          left: "90%",    
          transform: "translateX(-50%)",
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}