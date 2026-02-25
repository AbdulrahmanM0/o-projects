
import Industries from "@/_ui/home/industries/Industries";
import HeroWhyus from "@/_ui/home/merged/HeroWhyus";
import Portfolio from "@/_ui/home/portfolio/Portfolio";
import Services from "@/_ui/home/services/Services";
import Testmonials from "@/components/sections/testmonials/Testmonials";

export default function Home() {
  return (

    <div>
      <HeroWhyus />
      <Services />
      <Portfolio />
      <Testmonials />
      <Industries /> 
    </div>
  );
}
