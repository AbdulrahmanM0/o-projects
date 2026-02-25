
import Slider from './Slider'
import ScrollRevealText from '@/components/animation/ScrollRevealText'

function Clients() {


  return (
    <div className='py-clamp-100' >
      <div className='px-clamp-72 mb-clamp-88'>
        <h4 className='text-clamp-24 leading-none text-b300 mb-clamp-44'>
          Our Clients
        </h4>
        <ScrollRevealText
          text="We provide innovative solutions to expand your business"
          className="text-[4.17vw] font-heading max-w-[69.11vw] capitalize font-bold leading-none"
          yPercent={250}
          textClassName={"leading-[1.2]"}
        />
      </div>

      {/* clients  */}
      <div className='h-[81px]'>
        <div >
          <div >
            <Slider />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients