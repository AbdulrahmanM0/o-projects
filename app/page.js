import Portfolio from "@/_ui/home/portfolio/Portfolio";
import Services from "@/_ui/home/services/Services";
import Whyus from "@/_ui/home/whyus/Whyus";
import Shad1 from "@/components/shads/Shad1";

export default function Home() {
  return (

    <div>
      <div className="h-screen bg-stone-950 -z-10">
        <Shad1 />
      </div>
      <Whyus />
      <Services />
      <Portfolio />
    </div>
  );
}
