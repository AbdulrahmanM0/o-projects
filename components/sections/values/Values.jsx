
import Card from './utilies/Card'
import { values } from '@/data/aboutus'

function Values() {
    return (
        <section>
            <div className='shadow-inset-top bg-balance px-[3.75vw] py-clamp-100'>
                {/* heading  */}
                <div className='mb-clamp-88 text-center'>
                    <h2 className='text-[10.42vw] font-heading leading-[0.7] font-bold'>
                        Our Values
                    </h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-clamp-20'>
                    {values.map((item, index) => (
                        <Card key={index} {...item} index={index}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Values