function PrimaryBtn() {
  return (
    <button className="relative border border-b200 hover:border-balance flex overflow-hidden group transition-colors duration-300">
      
      {/* Backdrop */}
      <div className="absolute left-0 top-0 h-full w-0 bg-b600 transition-all duration-500 ease-out group-hover:w-full" />

      {/* Text */}
      <div className="flex items-center justify-center relative z-10 p-clamp-12 2xl:p-clamp-20 leading-[0.7] font-heading font-bold text-clamp-24 text-balance">
        Show All Projects
      </div>

      {/* Icon */}
      <div className="relative z-10 p-clamp-12 2xl:p-clamp-20 border-l border-b800 group-hover:border-balance transition-colors duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-clamp-20 fill-[#1A50E8] group-hover:fill-white transition-colors duration-300"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.60001 4.99984C4.60001 4.5396 4.9731 4.1665 5.43334 4.1665H15.8333C16.2936 4.1665 16.6667 4.5396 16.6667 4.99984V15.3998C16.6667 15.8601 16.2936 16.2332 15.8333 16.2332C15.3731 16.2332 15 15.8601 15 15.3998V7.01168L5.58926 16.4224C5.26382 16.7479 4.73619 16.7479 4.41075 16.4224C4.08531 16.097 4.08531 15.5694 4.41075 15.2439L13.8215 5.83317H5.43334C4.9731 5.83317 4.60001 5.46007 4.60001 4.99984Z"
          />
        </svg>
      </div>

    </button>
  )
}

export default PrimaryBtn