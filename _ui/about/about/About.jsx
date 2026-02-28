import AboutImage from "./utilies/AboutImage"
import Counter from "./utilies/Counter"
import Oprojects from "./utilies/Oprojects";
import Content from "./utilies/Content";

function About() {

  return (
    <section className="snap-start">
      {/* about us  */}
      <div className="max-layout bg-b500 ">
        <div className="py-[9.7222vh] px-[clamp(10px,3.75vw,72px)]">

          {/* o-projects logo  */}
          <Oprojects />

          <div className="flex flex-col md:flex-row justify-between items-center gap-[clamp(10px,4vw,76.8px)] md:gap-[clamp(10px,6.15vw,118.08px)] relative z-10">
            {/* data  */}
            <div className="flex flex-col gap-[clamp(20px,2.656vw,51px)] xl:w-[clamp(20px,45.42vw,872px)]">
              {/* title  */}
              <div>
                <h3 className="text-[clamp(10px,4.17vw,80px)] font-heading leading-[0.7] font-bold text-balance">
                  About Us
                </h3>
              </div>

              {/* content  */}
              <Content />
            </div>

            {/* image  */}
            <div className="relative shrink-0">
              <AboutImage />
            </div>
          </div>

          <div className="relative z-10">
            <Counter />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About