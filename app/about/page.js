// import HeroAboutUs from "@/_ui/about/merged/HeroAboutUs";
import AboutUs from "@/_ui/about/about/About";
import MissionVision from "@/_ui/about/mission&vision/MissionVision";
import Clients from "@/_ui/about/clients/Clients";
import Values from "@/components/sections/values/Values";
import Hero from "@/components/sections/hero/Hero";
import DynamicScrollSections from "@/_ui/test/TestSectionns";
import CurtainReveal from "@/components/sections/scrolls/ScrollSection";
import ScrollSection from "@/components/sections/scrolls/ScrollSection";
import Provder from "@/components/layout/Provder";

export default function About() {
  const hero = {
    title: "Who We Are?",
    slogan: <p className='text-clamp-28 font-body font-extralight leading-[1.4] w-fit ms-auto'>
      Grow your business, Executing ideas <br /> that innovate
    </p>
  }
  return (
      <div className=" bg-gray-900">
        <Hero {...hero} />
        <AboutUs />
        <MissionVision />
        <Values />
        <Clients />
      </div>
  );
}
