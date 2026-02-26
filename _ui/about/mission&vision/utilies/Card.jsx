import ScrollRevealText from "@/components/animation/ScrollRevealText";
import RevealParagraph from "./RevealParagraph";

function Card({ title, body, icon, index }) {
    const colors = [
        "#00E4A5", "#F3C921", "#E7E8E9"
    ]
    const grads = [
        "from-[#00E4A5]",
        "from-[#F3C921]",
        "from-[#E7E8E9]"
    ]
    const spaces = ["h-fit", "xl:mt-[17.22vh]"];

    const color = colors[index % colors.length];
    const space = spaces[index % spaces.length];


    return (
        <div
            className={`bg-b600 min-w-[70vw] lg:min-w-[40vw] xl:min-w-[38.23vw] w-[38.23vw] 
                        relative mx-auto lg:mx-0 ${space} 
                        ${index === 0 && "!sticky top-[15.28vh]"} 
                        group overflow-hidden`}
        >

            {/* gradiant border  */}
            <div
                className={`absolute inset-0 p-[3px] 
                            bg-gradient-to-r ${grads[index]} to-transparent
                            scale-x-0 group-hover:scale-x-100 origin-left
                            transition-transform duration-500 ease-in-out z-0`}
            >
                <div className="w-full h-full bg-b600"></div>
            </div>

            {/* Corner Borders */}
            <div className="z-20 absolute h-full inset-0">
                {/* top left */}
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M0 0V24.001H2.18164V2.32227H24V0H0Z" fill={color} />
                </svg>

                {/* top right */}
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M24 0V24.001H21.8184V2.32227H0V0H24Z" fill={color} />
                </svg>

                {/* bottom left */}
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M0 24.001V0H2.18164V21.6787H24V24.001H0Z" fill={color} />
                </svg>

                {/* bottom right */}
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M24 24.001V0H21.8184V21.6787H0V24.001H24Z" fill={color} />
                </svg>
            </div>

            {/* Content */}
            <div className="p-[3.33vw] flex flex-col gap-clamp-40 relative z-10">
                <h5 className="text-[4.17vw] font-heading font-bold text-balance leading-[0.9] gap-clamp-24 flex items-center">
                    <span className="flex items-center justify-center relative">
                        <svg className="w-[clamp(40px,4.43vw,85px)] transform transition-transform duration-700 group-hover:rotate-[360deg]" xmlns="http://www.w3.org/2000/svg" width="85" height="69" viewBox="0 0 85 69" fill="none">
                            <path d="M49.4907 56.3331C52.403 56.3599 55.2918 55.8121 57.9905 54.7211C60.5543 53.6752 62.8886 52.1406 64.8622 50.2035C66.8617 48.2261 68.4234 45.8533 69.4467 43.2381C70.5511 40.4133 71.1004 37.4034 71.0647 34.372C71.1043 31.3566 70.5547 28.3622 69.4467 25.5558C68.4086 22.9482 66.8488 20.5783 64.8622 18.5903C62.9023 16.634 60.5646 15.0938 57.9905 14.0628C52.5233 11.9822 46.4781 11.9822 41.0109 14.0628C38.4337 15.0936 36.0927 16.6337 34.1292 18.5903C27.1376 24.8393 16.6403 22.879 15.5616 25.5558C14.4646 28.3711 13.9286 31.3724 13.9835 34.3919C13.9478 37.4233 14.4971 40.4332 15.6015 43.258C16.6802 45.9446 26.009 46.0939 34.1692 50.2234C36.1464 52.1608 38.4839 53.6953 41.0509 54.741C43.7316 55.8197 46.5997 56.3607 49.4907 56.3331ZM49.4907 68.8709C44.7053 68.9097 39.9574 68.0279 35.5075 66.2738C31.3083 64.6276 27.4806 62.1641 24.2479 59.0273C21.0153 55.8904 18.4426 52.1431 16.6802 48.0044C14.8824 43.865 -0.0795849 46.8502 0.000318872 34.3919C0.0802226 21.9337 14.8624 24.9587 16.6403 20.7795C18.3496 16.6609 20.889 12.9355 24.1013 9.83375C27.3448 6.70066 31.1767 4.23562 35.3777 2.57973C39.8712 0.821872 44.6636 -0.0532814 49.4907 0.00250888C54.3191 -0.0469467 59.1116 0.834972 63.6037 2.59963C67.8123 4.25786 71.6536 6.72238 74.9101 9.85365C78.11 12.9637 80.6446 16.6871 82.3611 20.7994C84.1476 25.1078 85.0444 29.7306 84.9979 34.3919C85.074 41.2425 83.0608 47.9546 79.2246 53.6404C75.3883 59.3262 69.9098 63.7177 63.5138 66.234C59.0542 68.0067 54.2921 68.9022 49.4907 68.8709Z" fill="#4A79FF" />
                        </svg>
                        <span className="absolute">{icon}</span>
                    </span>

                    <ScrollRevealText
                        text={title}
                        className="text-[4.17vw] font-heading font-bold text-balance"
                        yPercent={200}
                        textClassName="leading-[0.9]"
                    />
                </h5>

                <RevealParagraph body={body}/>
            </div>
        </div>
    )
}

export default Card