
import { missionnVision } from "@/data/aboutus"
import Card from "./Card"
import SnackImage from "./SnackImage";

function Slider() {

    return (
        <div>
            <div>
                {/* cards  */}
                <div className="px-[3.75vw] z-10 relative">
                    <div className="flex flex-wrap justify-between gap-clamp-40 relative">
                        {missionnVision.map((item, index) => (
                            <Card
                                key={`${item.title}-${index}`}
                                {...item}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* snake iamge  */}
                <SnackImage />
            </div>
        </div>
    )
}

export default Slider