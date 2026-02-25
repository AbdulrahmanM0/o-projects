"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function ScrollTriggerProvider() {
  const pathname = usePathname()

  useEffect(() => {
    // optional: kill old triggers to avoid leftover spacers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    
    // recalc all scroll triggers for the new page
    ScrollTrigger.refresh()
  }, [pathname])

  return null
}