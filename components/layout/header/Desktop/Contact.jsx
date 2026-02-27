import Link from 'next/link'

function Contact({open}) {
    return (
        <>

            <div className={`hidden lg:block fixed top-[5vh] right-[3.75vw] ${open ? "" :" mix-blend-difference "} z-[500]`} title="contact-us link">
                <Link href={"/contact"} className={`underline underline-offset-[3px] decoration-[1px] text-center text-balance text-clamp-18 leading-[0.7] p-[10px] w-[8.5417] block`}>
                    Contact us
                </Link>
            </div>

        </>
    )
}

export default Contact