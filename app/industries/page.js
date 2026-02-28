import Industries from "@/_ui/industries/industries/Industries";
import Markets from "@/_ui/industries/markets/Markets";
import Hero from "@/components/sections/hero/Hero";


export default function Industry() {
  const hero = {
    title: "Who We Serve?",
    slogan: <p className='text-clamp-28 font-body font-extralight leading-[1.4] mt-clamp-48 w-fit ms-auto'>
      Empowering sectors through <br/> cutting-edge solutions
    </p>
  }
  return (
    <div>
      <Hero {...hero}/>
      <Industries />
      <Markets />
    </div>
  );
}
