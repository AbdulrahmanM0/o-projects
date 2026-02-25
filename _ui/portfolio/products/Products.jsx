import { projects } from "@/data/services"
import Categories from "@/components/utilies/Categories"
import PortfolioSection from "@/components/sections/PortfolioSection"
import Card from '@/components/sectionCards/projects/Card'
import Pagination from "@/components/utilies/Pagination"
import { categories } from "@/data/categories"
function Products() {
  const data = {
    heading: {
      subtitle: "Our Portfolio",
      title: "Latest Projects",
      className: {
        text: "leading-[0.7] text-balance",
        titleClass: "font-heading text-[4.1667vw] font-bold leading-[0.7] text-balance"
      },
      component: <p className='text-clamp-18 text-b100 md:w-[23.229vw]'>
        Explore our portfolio of innovative projects and discover how we've helped businesses like yours achieve their goals.
      </p>
    }
  }
  const category = <div className="w-fit mx-auto my-clamp-64 col-span-full">
    <Categories categories={categories.slice(0,3)}/>
  </div>
  return (
    <section>
      <div className='overflow-hidden'>
        <PortfolioSection heading={data.heading} category={category} gap='gap-y-[3.75vw] gap-x-[8.3333vw]'>
          {/* projects cols  */}
          {
            projects.map((item, index) => (
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
            <Pagination />
          </div>

        </PortfolioSection>
      </div>
    </section>
  )
}

export default Products