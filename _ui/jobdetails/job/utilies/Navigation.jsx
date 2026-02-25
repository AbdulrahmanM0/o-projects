"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

function Navigation() {
    const pathname = usePathname()
    const apply = pathname.startsWith("/job/apply")

    return (
        <>
            <Link href="/">Home</Link> -{" "}
            <Link href="/job">Career</Link> -{" "}
            <span>{pathname === "/job" ? "Career Page" : "UI/UX Designer"}</span>
            {apply && <span> - Apply</span>}
        </>
    )
}

export default Navigation