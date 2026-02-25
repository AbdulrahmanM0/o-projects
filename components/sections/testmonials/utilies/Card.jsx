
import { Star } from "lucide-react";
import Image from "next/image";

function Card({ rate = 4, description, color, auther }) {

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="p-clamp-36 flex flex-col gap-clamp-32 bg-white shadow-lg rounded-lg" style={{ backgroundColor: color }}>
      {/* Rating */}
      <div className="flex items-center gap-1">
        {stars.map((star) => (
          <Star
            key={star}
            size={20}
            className={star <= rate ? ` ${(color === "#00E4A5" || color === "#E7E8E9") ? 'fill-b500' : 'fill-yellow-400 text-yellow-400'} ` : ` ${(color === "#00E4A5" || color === "#E7E8E9") ? 'text-b500' : 'text-yellow-400'} `}
          />
        ))}
      </div>

      {/* content */}
      <p className={`${(color === "#00E4A5" || color === "#E7E8E9") ? 'text-b500' : 'text-balance '} text-clamp-18 leading-[1.3] h-[12vh] 3xl:h-[19.44vh] max-h-[210px]`}>{description}</p>

      {/* auther  */}
      <div className="flex gap-clamp-16">
        {/* b500 */}
        <div>
          <Image src={auther.img} className="shrink-0 w-[55px] h-[55px] object-cover rounded-full " width={55} height={55} alt={auther.name} />
        </div>
        <div className={`${(color === "#00E4A5" || color === "#E7E8E9") ? 'text-b500' : 'text-balance'}  `}>
          <h5 className={`font-bold text-clamp-20 `}>
            {auther.name}
          </h5>
          <p className={`text-clamp-14`}>
            {auther.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;