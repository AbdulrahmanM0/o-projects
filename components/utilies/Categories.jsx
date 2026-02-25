
function Categories({categories}) {
    return (
        <div >
            {/* categories */}
            <div className='flex flex-wrap gap-clamp-20'>
                <div className='flex items-center justify-between px-clamp-24 py-clamp-18 text-b600 text-clamp-24 font-bold leading-[0.7] border border-b700'>
                    All
                </div>
                {
                    categories.map((item, index) => (
                        <div key={index + item?.id} className='flex items-center justify-between px-clamp-24 py-clamp-18 text-b100 text-clamp-24 font-bold leading-[0.7] border border-b300'>
                            {item.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories