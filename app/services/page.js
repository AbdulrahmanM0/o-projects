// import HeroAboutUs from "@/_ui/about/merged/HeroAboutUs";
import AboutUs from "@/_ui/about/about/About";
import Projects from "@/_ui/home/services/Projects";
import Process from "@/_ui/services/process/Process";
import Products from "@/_ui/services/products/Products";
import Tracks from "@/_ui/services/tracks/Tracks";
import Hero from "@/components/sections/hero/Hero";
import Testmonials from "@/components/sections/testmonials/Testmonials";

export default function Services() {
  const hero = {
    title: "What We Do?",
    slogan: <p className='text-clamp-28 font-body font-extralight leading-[1.4] w-fit ms-auto'>
      Unleash your potential with innovative <br/> solutions
    </p>
  }
  const nav = {
    title: "Services",
    src: "/services"
  }
  return (
    <div>
      <Hero {...hero} nav={nav}/>
      <Products />
      <Process />
      <Projects />
      <Testmonials />
      <Tracks />
    </div>
  );
}
