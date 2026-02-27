import Products from "@/_ui/portfolio/products/Products";
import Hero from "@/components/sections/hero/Hero";
import Testmonials from "@/components/sections/testmonials/Testmonials";

export default function Portfolio() {
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
      <Testmonials />
    </div>
  );
}
