
import Industries from "@/_ui/home/industries/Industries";
import HeroWhyus from "@/_ui/home/merged/HeroWhyus";
import Portfolio from "@/_ui/home/portfolio/Portfolio";
import Services from "@/_ui/home/services/Services";
import Testmonials from "@/_ui/home/testmonials/Testmonials";
import Whyus from "@/_ui/home/whyus/Whyus";
import Shad1 from "@/components/shads/Shad1";

export default function Home() {
  return (

    <div>
      <HeroWhyus />
      {/* <div className="h-screen bg-stone-400 -z-10">
        <Shad1 />
      </div>
      <Whyus/> */}

      <Services />
      <Portfolio />
      <Testmonials />
      <Industries />
    </div>
  );
}
