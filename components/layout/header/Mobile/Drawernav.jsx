"use client"
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { navigationData, social } from "@/data/navigation"

import Link from "next/link"
function DrawerNav() {
    return (
        <div className="block lg:hidden">
            <Drawer shouldScaleBackground>
                <DrawerTrigger asChild>
                    <button className="fixed top-clamp-48 right-clamp-72 text-balace">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="w-clamp-18 h-clamp-18 3xl:w-clamp-24 3xl:h-clamp-24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4 6.00005C20.4 5.68179 20.2736 5.37656 20.0486 5.15152C19.8235 4.92648 19.5183 4.80005 19.2 4.80005H4.80002C4.48177 4.80005 4.17654 4.92648 3.9515 5.15152C3.72645 5.37656 3.60003 5.68179 3.60003 6.00005C3.60003 6.31831 3.72645 6.62353 3.9515 6.84858C4.17654 7.07362 4.48177 7.20005 4.80002 7.20005H19.2C19.5183 7.20005 19.8235 7.07362 20.0486 6.84858C20.2736 6.62353 20.4 6.31831 20.4 6.00005ZM20.4 12C20.4 11.6818 20.2736 11.3766 20.0486 11.1515C19.8235 10.9265 19.5183 10.8 19.2 10.8H12C11.6818 10.8 11.3765 10.9265 11.1515 11.1515C10.9265 11.3766 10.8 11.6818 10.8 12C10.8 12.3183 10.9265 12.6235 11.1515 12.8486C11.3765 13.0736 11.6818 13.2 12 13.2H19.2C19.5183 13.2 19.8235 13.0736 20.0486 12.8486C20.2736 12.6235 20.4 12.3183 20.4 12ZM20.4 18C20.4 17.6818 20.2736 17.3766 20.0486 17.1515C19.8235 16.9265 19.5183 16.8 19.2 16.8H4.80002C4.48177 16.8 4.17654 16.9265 3.9515 17.1515C3.72645 17.3766 3.60003 17.6818 3.60003 18C3.60003 18.3183 3.72645 18.6235 3.9515 18.8486C4.17654 19.0736 4.48177 19.2 4.80002 19.2H19.2C19.5183 19.2 19.8235 19.0736 20.0486 18.8486C20.2736 18.6235 20.4 18.3183 20.4 18Z" fill="white" />
                        </svg>
                    </button>
                </DrawerTrigger>
                <DrawerContent className="bg-[#E5E5E559] backdrop-blur-[25px] [&>div:first-child]:mb-2 [&>div:first-child]:bg-b300 border border-b300">

                    {/* navigaton */}
                    <nav className=" text-balance">
                        <ul className="p-clamp-18 2xl:p-clamp-24 3xl:p-clamp-32 flex flex-col gap-clamp-18 2xl:gap-clamp-24 border border-b300 3xl:gap-clamp-32 mb-clamp-18 3xl:mb-clamp-24">
                            <span className="text-clamp-14 leading-[0.64]">Navigation</span>
                            {
                                navigationData.filter(item => ["Home", "About", "Services", "Industries", "Portfolio", "Career"].includes(item.title)).map((item, index) => (
                                    <li key={item.title}>
                                        <Link href={"#"} className="text-clamp-24 3xl:text-clamp-36 font-bold font-heading flex justify-between items-center  leading-[0.69]">
                                            {/* link name */}
                                            {item.title}
                                            {/* icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-14 h-clamp-14" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.21996 3.50008C3.21996 3.17792 3.48113 2.91675 3.80329 2.91675H11.0833C11.4055 2.91675 11.6666 3.17792 11.6666 3.50008V10.7801C11.6666 11.1022 11.4055 11.3634 11.0833 11.3634C10.7611 11.3634 10.5 11.1022 10.5 10.7801V4.90837L3.91244 11.4959C3.68463 11.7237 3.31529 11.7237 3.08748 11.4959C2.85967 11.2681 2.85967 10.8987 3.08748 10.6709L9.675 4.08341H3.80329C3.48113 4.08341 3.21996 3.82225 3.21996 3.50008Z" fill="#B5B8BA" />
                                            </svg>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>

                        {/* social media */}
                        <ul className="p-clamp-18 2xl:p-clamp-24 3xl:p-clamp-32 flex flex-col gap-clamp-24 3xl:gap-clamp-32 border border-b300 mb-clamp-18 3xl:mb-clamp-24">
                            <span className="text-clamp-14 leading-[0.64]">Social</span>
                            {
                                social.map((item, index) => (
                                    <li key={item.title}>
                                        <Link href={"#"} className="text-clamp-24 3xl:text-clamp-36 font-bold font-heading flex justify-between items-center leading-[0.69]">
                                            {/* link name */}
                                            {item.title}


                                            {/* icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-14 h-clamp-14" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.21996 3.50008C3.21996 3.17792 3.48113 2.91675 3.80329 2.91675H11.0833C11.4055 2.91675 11.6666 3.17792 11.6666 3.50008V10.7801C11.6666 11.1022 11.4055 11.3634 11.0833 11.3634C10.7611 11.3634 10.5 11.1022 10.5 10.7801V4.90837L3.91244 11.4959C3.68463 11.7237 3.31529 11.7237 3.08748 11.4959C2.85967 11.2681 2.85967 10.8987 3.08748 10.6709L9.675 4.08341H3.80329C3.48113 4.08341 3.21996 3.82225 3.21996 3.50008Z" fill="#B5B8BA" />
                                            </svg>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>

                        <button className="text-center px-clamp-18 2xl:px-clamp-24 3xl:px-clamp-32 py-clamp-20 flex items-center justify-center gap-clamp-16 text-clamp-18 leading-[0.7] border border-b300 w-full">
                            Request Quotation
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.14 4.5C4.14 4.08579 4.47579 3.75 4.89 3.75H14.25C14.6642 3.75 15 4.08579 15 4.5V13.86C15 14.2742 14.6642 14.61 14.25 14.61C13.8358 14.61 13.5 14.2742 13.5 13.86V6.31066L5.03033 14.7803C4.73744 15.0732 4.26256 15.0732 3.96967 14.7803C3.67678 14.4874 3.67678 14.0126 3.96967 13.7197L12.4393 5.25H4.89C4.47579 5.25 4.14 4.91421 4.14 4.5Z" fill="white" />
                            </svg>
                        </button>

                    </nav>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default DrawerNav