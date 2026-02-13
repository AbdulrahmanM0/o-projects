import React from 'react'
import Content from './utilies/Content'
import Impact from './utilies/Impact'
import Video from './utilies/Video'

function Whyus() {
    return (
        <section className="min-h-screen">
            {/* Heading */}
            <div className="pt-[100px] pb-[75px]">
<h1 className="h1 font-heading font-bold text-center ~px-4/8 ~py-2/4">
  Why Choose Us?
</h1>
<h1 class="~sm/2xl:~px-4/60">
  Fluid Font + Fluid Padding
</h1>


      <div className="bg-red-500 text-white p-4 mb-4">
        Regular Tailwind Test
      </div>



            </div>

            {/* Content */}
            <div className="flex flex-wrap">
                {/* Left column */}
                <div className="shrink-0">
                    <Content />
                    <Impact />
                </div>

                {/* Right column */}
                <div className="flex-1 flex justify-center">
                    <Video />
                </div>
            </div>
        </section>
    )
}

export default Whyus
