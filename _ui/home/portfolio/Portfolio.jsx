import { studies } from '@/data/studies'
import Card from '@/components/sectionCards/projects/Card'
import PortfolioSection from '@/components/sections/PortfolioSection'
import Summary from '@/components/utilies/Summary'
import PrimaryBtn from '@/components/btn/Primary'

function Portfolio() {
    const data = {
        heading: {
            subtitle: "Our Portfolio",
            title: "Case Studies",
            className: {
                text: "leading-[1.2] text-balance",
                titleClass: "w-[clamp(100px,29.9479vw,575px)] text-[clamp(50px,6.667vw,128px)] font-heading text-balance font-bold leading-none"
            },
            component: <p className='text-clamp-18 text-balance max-w-[clamp(100px,23.23vw,446px)] leading-[1.5]'>
                Explore our portfolio of innovative projects and discover how we've helped businesses like yours achieve their goals.
            </p>
        }
    }
    return (
        <section>
            <PortfolioSection heading={data.heading}>
                {/* first col */}
                <div className='flex flex-col justify-between order-2 xl:order-1'>
                    <div className='flex-1'>
                        <div className="sticky top-0 z-10 mt-clamp-100">
                            <Card {...studies[0]} index={0} />
                        </div>
                    </div>
                    <div className='mt-12'>
                        <div className='flex flex-col gap-[31px]'>
                            {/* projects Or portfolio */}
                            <Summary data={studies} />

                            {/* Show All Projects */}
                            <div>
                                <PrimaryBtn value={"Show All Projects"}/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* second col */}
                <div className='order-1 xl:order-2'>
                    <div className='mb-clamp-200 sticky top-0'>
                        <Card {...studies[1]} index={1} />
                    </div>
                    <div className='my-clamp-100'>
                        <Card {...studies[2]} index={2} />
                    </div>
                </div>
            </PortfolioSection>
        </section>
    )
}

export default Portfolio