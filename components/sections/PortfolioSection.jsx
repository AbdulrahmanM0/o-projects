
import ScrollRevealText from '@/components/animation/ScrollRevealText'

function PortfolioSection({ heading, children, gap , category }) {
    const { subtitle, title, className: { text, titleClass }, component } = heading;

    return (
        <div className='px-[3.75vw] py-clamp-100 bg-b500'>
            {/* heading  */}
            <div className={`flex justify-between items-center ${heading.className.heading}`}>
                <div className='relative'>
                    <h6 className='text-clamp-18 3xl:text-clamp-24 leading-none text-balance mb-clamp-30'>{subtitle}</h6>
                    <ScrollRevealText
                        text={title}
                        className={titleClass}
                        yDistance={200}
                        textClassName={text}
                    />
                </div>
                <div>
                    {component}
                </div>
            </div>

            {/* categories */}
            {category && category}

            {/* cards  */}
            <div className={`px-[3.62vw] grid grid-cols-1 xl:grid-cols-2 ${gap ? gap : 'gap-[8.80vw]'}`}>
                {children}
            </div>
        </div>
    )
}

export default PortfolioSection