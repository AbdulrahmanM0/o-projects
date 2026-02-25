import Jobs from "@/_ui/careers/careers/Jobs";
import Joinus from "@/_ui/careers/joinus/Joinus";
import Hero from "@/components/sections/hero/Hero";
import Values from "@/components/sections/values/Values";

export default function Careers() {
  const hero = {
    title: "Join Our Squad",
    slogan: <p className='text-clamp-28 font-body font-extralight leading-[1.4] w-fit ms-auto'>
      Diverse ingredients, a pinch of crazy,<br /> and a whole lot of awesomeness.
    </p>
  }
  return (
    <div>
      <Hero {...hero} />
      <Jobs />
      <Values />
      <Joinus />
    </div>
  );
}
