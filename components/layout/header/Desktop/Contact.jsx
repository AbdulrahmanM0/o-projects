import Link from 'next/link'

function Contact({ open }) {
    return (
        <>

            <div className={`hidden lg:block fixed ${open ? " top-clamp-40 " : " top-clamp-48 "} right-clamp-72 z-10 mix-blend-difference z-20`} title="contact-us link">
                <Link href={"/contact"} className="underline underline-offset-[3px] decoration-[1px] text-center text-balance text-clamp-18 leading-[0.7] p-[10px] w-[164px] block">
                    Contact us
                </Link>
            </div>

        </>
    )
}

export default Contact