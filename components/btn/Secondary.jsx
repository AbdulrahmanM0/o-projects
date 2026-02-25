function SecondaryBtn({ value }) {
  return (
    <button className="relative border border-balance hover:border-b200 flex overflow-hidden group transition-colors duration-300">

      {/* Backdrop */}
      <div className="absolute left-0 top-0 h-full w-0 bg-balance transition-all duration-500 ease-out group-hover:w-full" />

      {/* Text */}
      <div className="flex items-center justify-center relative z-10 p-clamp-12 2xl:p-clamp-20 leading-[0.7] font-heading font-bold text-clamp-24 text-balance group-hover:text-b200">
        {value ? value : "Let's Talk"}
      </div>

      {/* Icon */}
      <div className="relative z-10 p-clamp-12 2xl:p-clamp-20 border-l border-balance group-hover:border-b200 transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-clamp-20 fill-[#1A50E8] group-hover:fill-white transition-colors duration-300">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6 4.99984C4.6 4.5396 4.97309 4.1665 5.43333 4.1665H15.8333C16.2936 4.1665 16.6667 4.5396 16.6667 4.99984V15.3998C16.6667 15.8601 16.2936 16.2332 15.8333 16.2332C15.3731 16.2332 15 15.8601 15 15.3998V7.01168L5.58925 16.4224C5.26382 16.7479 4.73618 16.7479 4.41074 16.4224C4.0853 16.097 4.0853 15.5694 4.41074 15.2439L13.8215 5.83317H5.43333C4.97309 5.83317 4.6 5.46007 4.6 4.99984Z" fill="#B9CBFF" />
        </svg>
      </div>

    </button>
  )
}

export default SecondaryBtn