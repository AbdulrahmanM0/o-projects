import PrimaryBtn from "@/components/btn/Primary"
import { products } from "@/data/services"
import Product from "./utilies/Product"
function Products() {
  return (
    <section>
      <div className="max-layout bg-b500">
        <div className="py-[9.7222vh] px-[3.75vw]">
          {/* heading  */}
          <div className="flex gap-clamp-44 justify-between items-center mb-clamp-72">
            <div className="flex flex-col gap-clamp-44">
              <h3 className="font-heading text-[6.667vw] font-bold leading-[1.1] text-balance">
                Comprehensive <br /> Technology Solutions
              </h3>
              <p className="leading-none text-clamp-18 text-b350">
                We will provide guidance on technology choices, implementation strategies, and organizational structures
              </p>
            </div>
            {/* button  */}
            <div>
              <PrimaryBtn value={"Let’s Talk"} />
            </div>
          </div>

          {/* body  */}
          <div>
            {products.concat(products).map((item, index) => (
              <Product {...item} key={index} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Products