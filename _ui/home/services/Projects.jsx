import PrimaryBtn from '@/components/btn/Primary'
import Card from '@/components/sectionCards/projects/Card'
import PortfolioSection from '@/components/sections/PortfolioSection'
import Summary from '@/components/utilies/Summary'
import { projects } from '@/data/services'


function Projects() {
    const data = {
        heading: {
            subtitle: "Our Portfolio",
            title: "Latest Projects",
            className: {
                text: "leading-[1.2] text-balance",
                titleClass: "w-[29.9479vw] text-[6.667vw] font-heading text-balance font-bold leading-none"
            },
            component: <p className='text-clamp-18 text-balance max-w-[23.23vw] leading-[1.5]'>
                Explore our portfolio of innovative projects and discover how we've helped businesses like yours achieve their goals.
            </p>
        }
    }
    return (
        <section>
            <div className='overflow-hidden'>
                <PortfolioSection heading={data.heading} gap='gap-y-[3.75vw] gap-x-[8.3333vw]'>

                    {/* projects cols  */}
                    {
                        projects.slice(0, 2).map((item, index) => (
                            <div key={item.title + index} className='flex flex-col justify-between'>
                                <div className='flex-1'>
                                    <div className="sticky top-0 z-10">
                                        <Card {...item} index={index} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {/* navigation  */}
                    <div className='flex items-center justify-center gap-[31px] col-span-full'>
                        {/* projects Or portfolio */}
                        <Summary data={projects} />

                        {/* Show All Projects */}
                        <div>
                            <PrimaryBtn value={"Show All Projects"} />
                        </div>
                    </div>

                </PortfolioSection>
            </div>
        </section>
    )
}

export default Projects