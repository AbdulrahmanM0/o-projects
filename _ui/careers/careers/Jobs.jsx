import Categories from "@/components/utilies/Categories"
import PortfolioSection from "@/components/sections/PortfolioSection"
import Pagination from "@/components/utilies/Pagination"
import { categories } from '@/data/categories'
import Search from "@/components/utilies/Search"
import Card from "./utilies/Card"
import { careers } from "@/data/aboutus"


function Jobs() {
  const data = {
    heading: {
      subtitle: "Open positions",
      title: "Job opportunities for professionals",
      className: {
        text: "leading-[1.2] text-balance",
        titleClass: "font-heading text-[4.1667vw] max-w-[70vw] font-bold leading-[0.7] text-balance",
        heading:"!items-end"
      },
      component: <Search />,
    },
  }
  const category = <div className="w-fit mx-auto my-clamp-64 col-span-full">
    <Categories categories={categories.slice(3)} />
  </div>
  return (
    <section>
      <div className='overflow-hidden'>
        <PortfolioSection heading={data.heading} category={category} gap='gap-y-clamp-40 gap-x-[4.17vw]'>
          {/* projects cols  */}
          {
            careers.map((item, index) => (
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

export default Jobs