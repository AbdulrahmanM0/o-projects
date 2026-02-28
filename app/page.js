
import Industries from "@/_ui/home/industries/Industries";
import HeroWhyus from "@/_ui/home/merged/HeroWhyus";
import Portfolio from "@/_ui/home/portfolio/Portfolio";
import Services from "@/_ui/home/services/Services";
import SplashScreen from "@/components/sections/SplashScreen";
import Testmonials from "@/components/sections/testmonials/Testmonials";
// import Shads from "@/components/utilies/Shads";

export default function Home() {
  return (
    <div>
      {/* <Shads/> */}
      <SplashScreen />
      <HeroWhyus />
      <Services />
      <Portfolio />
      <Testmonials />
      <Industries /> 
    </div>
  );
}
