import AboutImage from "./utilies/AboutImage"
import Counter from "./utilies/Counter"
import Oprojects from "./utilies/Oprojects";
import Content from "./utilies/Content";

function About() {

  return (
    <section>
      {/* about us  */}
      <div className="max-layout bg-b500">
        <div className="py-[9.7222vh] px-[3.75vw]">

          {/* o-projects logo  */}
          <Oprojects />

          <div className="flex flex-col md:flex-row justify-between items-center gap-[4vw] md:gap-[6.15vw] relative z-10">
            {/* data  */}
            <div className="flex flex-col gap-[clamp(20px,2.656vw,51px)] xl:w-[45.42vw]">
              {/* title  */}
              <div>
                <h3 className="text-[4.17vw] font-heading leading-[0.7] font-bold text-balance">
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