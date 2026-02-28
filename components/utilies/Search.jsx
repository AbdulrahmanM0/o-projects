
function Search() {
  return (
    <label className="relative block w-full">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-full text-clamp-18 text-b100 placeholder-b100 leading-[0.7] 
                   bg-transparent border border-b300 
                   py-clamp-18 pe-clamp-32 ps-clamp-66 outline-none rounded-[2px] w-[clamp(300px,30.0521vw,577px)]"
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="absolute start-clamp-32 top-1/2 -translate-y-1/2 w-6 h-6 pointer-events-none"
        fill="none"
      >
        <path
          d="M10 18C11.775 17.9998 13.4989 17.4056 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.4051 13.4997 17.9997 11.7755 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
          fill="#E8EEFF"
        />
      </svg>
    </label>
  )
}

export default Search