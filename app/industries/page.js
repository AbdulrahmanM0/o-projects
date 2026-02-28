import Industries from "@/_ui/industries/industries/Industries";
import Markets from "@/_ui/industries/markets/Markets";
import Hero from "@/components/sections/hero/Hero";


export default function Industry() {
  const hero = {
    title: "Who We Serve?",
    slogan: <p className='text-clamp-28 font-body font-extralight leading-[1.4] w-fit ms-auto'>
      Empowering sectors through cutting-<br/>edge solutions
    </p>
  }
  const nav = {
    title: "Industries",
    src: "/industries"
  }
  return (
    <div>
      <Hero {...hero} nav={nav} />
      <Industries />
      <Markets />
    </div>
  );
}
