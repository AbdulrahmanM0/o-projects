"use client"
import Logo from "./Logo";
import { useState } from "react";
import Contact from "./Contact";
import Nav from "./Nav";
import DrawerNav from "../Mobile/Drawernav";

function Header() {
    const [open, setOpen] = useState(false);
    const hanndleOpen = () => setOpen(!open)
    return (
        <>
            {/* Logo */}
            <Logo open={open} />

            {/* Nav*/}
            <header className='hidden lg:block fixed top-clamp-40 left-1/2 -translate-x-[50%] z-10 w-[clamp(100px,34.19vw,647px)] bg-[#E5E5E559] backdrop-blur-[25px] z-20' >
                <div className={`p-clamp-12 2xl:p-clamp-18 3xl:px-clamp-32 ${open ? "3xl:py-clamp-32" : "3xl:py-clamp-20"} border border-g1`}>
                    <Nav open={open} setOpen={setOpen} />
                </div>
            </header>

            {/* Link */}
            <Contact open={open} />

            <DrawerNav />

            {/* backdrop  */}
            {open && <div onClick={()=>setOpen(false)} className="w-screen h-screen bg-[#2A2A2A80] fixed top-0 left-0 z-10" />}
        </>
    )
}
export default Header;


