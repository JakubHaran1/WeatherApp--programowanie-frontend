export default function NavComponent({ city }: { city: string }) {
  return (
    <nav className="flex justify-center items-center md:w-full md:col-span-2   md:grid-row-1">
      <div className="search basis-90 text-center">
        <input
          id="city"
          name="city"
          className="bg-blue-400  rounded-l-md p-1"
          type="text"
          placeholder={city}
        />
        <button className="bg-blue-500 rounded-r-md  py-1 px-2 cursor-pointer ">
          <i className="fa-solid fa-magnifying-glass "></i>
        </button>
      </div>
      <div className="nav-el ">
        <i className="fa-solid text-xl fa-star"></i>
      </div>
    </nav>
  );
}
