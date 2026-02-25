import Image from 'next/image'

function Summary({data}) {
    return (
        <div className='flex gap-[10px]'>
            {data.slice(0,3).map(item => (
                <Image
                    key={item.title}
                    width={61}
                    height={63}
                    className='w-[61px] h-[63px] object-cover'
                    src={item.img}
                    alt={item.title}
                />
            ))}
            <div className='text-balance flex items-center justify-center bg-b900 w-[60px] h-[61px]'>+{data.length - 1}</div>
        </div>
    )
}

export default Summary