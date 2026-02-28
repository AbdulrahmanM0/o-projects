
import Card from './utilies/Card'
import { markets } from '@/data/aboutus'
import ContactCard from "@/components/sectionCards/endcard/Card"
import PrimaryBtn from '@/components/btn/Primary';
import Link from 'next/link';

function Markets() {
    const col1 = <div className="flex flex-col gap-clamp-40">
        <h6 className="text-clamp-18 leading-[0.7] text-balance">
            CONTACT US
        </h6>
        <h3 className="leading-[1.2] font-heading font-bold text-balance text-clamp-36 2xl:text-clamp-48 3xl:text-clamp-64">
            Working on something <br /> exciting? We’d love
            to help.
        </h3>
        <Link href={"/contact"}>
            <PrimaryBtn value={"Let’s Talk"} />
        </Link>
    </div>;

    return (
        <section>
            <div>
                <div className='shadow-inset-top bg-balance px-[clamp(10px,3.75vw,72px)] py-clamp-100'>
                    {/* heading  */}
                    <div className='mb-clamp-88 text-center'>
                        <h2 className='text-[clamp(30px,10.42vw,200px)] font-heading leading-[0.7] font-bold'>
                            Our Markets
                        </h2>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-clamp-20'>
                        {markets.map((item, index) => (
                            <Card key={index} {...item} index={index} />
                        ))}
                    </div>
                    {/* contact  */}
                    <div className='mt-clamp-72'>
                        <ContactCard col1={col1} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Markets