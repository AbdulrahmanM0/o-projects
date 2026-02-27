"use client"
import Logo from "./Logo";
import { useState } from "react";
import Contact from "./Contact";
import Nav from "./Nav";
import DrawerNav from "../Mobile/Drawernav";

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Logo */}
            <Logo open={open} />

            {/* Nav*/}
            <header className='hidden lg:block fixed top-[3.704vh] left-1/2 -translate-x-[50%] z-[500] w-[clamp(100px,33.7vw,647px)] bg-[#E5E5E559] backdrop-blur-[25px]' >
                <div className={`p-clamp-12 2xl:p-clamp-18 px-[1.667vw] ${open ? "3xl:py-clamp-32" : "3xl:py-clamp-20"} border border-g1`}>
                    <Nav open={open} setOpen={setOpen} />
                </div>
            </header>

            {/* Link */}
            <Contact open={open}/>

            <DrawerNav />

            {/* backdrop  */}
            {open && <div onClick={()=>setOpen(false)} className="w-screen h-screen z-50 bg-[#2A2A2A80] fixed top-0 left-0" />}
        </>
    )
}
export default Header;


