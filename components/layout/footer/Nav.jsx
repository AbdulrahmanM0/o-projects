import Link from 'next/link';
import { navigationData } from "../navigation";

function Nav() {

    return (
        <div className='font-body'>
            <div className='flex w-[267px] justify-between text-wd'>
                {/* first col  */}
                <div className='flex flex-col gap-[30px]'>
                    {navigationData.slice(0, 5).map((item, index) => (
                        <Link key={item.title} href={item.link} title={item.title} className='text-[18px] leading-[12px]'>
                            {item.title}
                        </Link>
                    ))}
                </div>
                {/* seconed col  */}
                <div className='flex flex-col gap-[30px]'>
                    {navigationData.slice(5, 9).map((item, index) => (
                        <Link key={item.title} href={item.link} title={item.title} className='text-[18px] leading-[12px]'>
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Nav