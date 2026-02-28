import Products from "@/_ui/portfolio/products/Products";
import Hero from "@/components/sections/hero/Hero";
import Testmonials from "@/components/sections/testmonials/Testmonials";

export default function Portfolio() {
  const hero = {
    title: "Our  Partners",
    slogan: <p className='text-clamp-28 font-body font-extralight leading-[1.4] w-fit ms-auto'>
      We Provide Innovative Solutions to <br /> Expand your Business
    </p>
  }
  const nav = {
    title: "Portfolio",
    src: "/portfolio"
  }
  return (
    <div>
      <Hero {...hero} nav={nav} />
      <Products />
      <Testmonials />
    </div>
  );
}
