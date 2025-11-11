function App() {
  return (
    <>
      <main className="grid grid-rows-2 grid-cols-1 align-self-start min-h-screen relative  bg-blue-900 p-3 ">
        <div className="img-bgc flex items-center justify-center row-start-1 row-end-2 absolute overflow-hidden  md:row-end-3  ">
          <img src="isolated-thunderstorms-day.svg " alt="" className="pt-5" />
        </div>
        <div className="weather-app row-start-1 row-end-3 self-start w-85  md:w-150  relative rounded-md m-auto  z-1 py-5 md:grid  md:grid-cols-2 md:grid-rows-[0.3fr,1fr,0.3fr]">
          <nav className="flex justify-center items-center md:w-full md:col-span-2   md:grid-row-1">
            <div className="search basis-90 text-center">
              <input
                id="city"
                name="city"
                className="bg-blue-400  rounded-l-md p-1"
                type="text"
                placeholder="Wrocław"
              />
              <button className="bg-blue-500 rounded-r-md  py-1 px-2 ">
                <i className="fa-solid fa-magnifying-glass "></i>
              </button>
            </div>
            <div className="nav-el ">
              <i className="fa-solid text-xl fa-star"></i>
            </div>
          </nav>

          <section className="main-part flex flex-col gap-3  mt-7 mb-3   md:grid-row-1 md:col-start-1 md:col-end-2 ">
            <p className="text-center">
              <span className="city  mr-2 font-medium text-xl">Wrocław,</span>
              <span className="country ">Poland</span>
            </p>
            <div className="imgs-wrapper ">
              <img
                src="isolated-thunderstorms.svg"
                className="w-45 mx-auto"
                alt=""
              />
            </div>
            <div className="temperature text-center ">
              <h2 className="text-3xl">30°c</h2>
              <p> Expect high high</p>
            </div>
          </section>

          <ul className="condtions-list flex justify-around mb-5  md:w-full md:col-span-2   md:row-start-4  md:row-end-5  ">
            <li>
              <p>
                <i className="fa-solid fa-wind  mr-2 "></i>
                <span className="value">11</span>
                <span className="unit">km/h</span>
              </p>
            </li>
            <li>
              <p>
                <i className="fa-solid fa-droplet mr-2"></i>
                <span className="value">11</span>
                <span className="unit">km/h</span>
              </p>
            </li>
            <li>
              <p>
                <i className="fa-solid fa-sun mr-2"></i>
                <span className="value">11</span>
                <span className="unit">km/h</span>
              </p>
            </li>
          </ul>

          <section className="forecast overflow-hidden md:col-start-2 md:col-end-3   md:grid-row-1  md:content-center ">
            <h3>
              <i className="fa-solid fa-clock mr-1"></i> Hourly Forecast
            </h3>
            <ul className="flex overflow-x-scroll gap-3 py-3">
              <li className="p-2 text-center rounded-lg ">
                <img
                  src="isolated-thunderstorms-day.svg"
                  className="w-25 mx-auto"
                  alt=""
                />
                <h4>Time</h4>
                <p>
                  30<span className="unit">km/h</span>
                </p>
              </li>
              <li className="p-2 text-center rounded-lg">
                <img
                  src="isolated-thunderstorms-day.svg"
                  className="w-25 mx-auto"
                  alt=""
                />
                <h4>Time</h4>
                <p>
                  30<span className="unit">km/h</span>
                </p>
              </li>
              <li className="p-2 text-center rounded-lg">
                <img
                  src="isolated-thunderstorms-day.svg"
                  className="w-25 mx-auto"
                  alt=""
                />
                <h4>Time</h4>
                <p>
                  30<span className="unit">km/h</span>
                </p>
              </li>
              <li className="p-2 text-center rounded-lg">
                <img
                  src="isolated-thunderstorms-day.svg"
                  className="w-25 mx-auto"
                  alt=""
                />
                <h4>Time</h4>
                <p>
                  30<span className="unit">km/h</span>
                </p>
              </li>
              <li className="p-2 text-center rounded-lg">
                <img
                  src="isolated-thunderstorms-day.svg"
                  className="w-25 mx-auto"
                  alt=""
                />
                <h4>Time</h4>
                <p>
                  30<span className="unit">km/h</span>
                </p>
              </li>
              <li className="p-2 text-center rounded-lg">
                <img
                  src="isolated-thunderstorms-day.svg"
                  className="w-25 mx-auto"
                  alt=""
                />
                <h4>Time</h4>
                <p>
                  30<span className="unit">km/h</span>
                </p>
              </li>
              <li className="p-2 text-center rounded-lg">
                <img
                  src="isolated-thunderstorms-day.svg"
                  className="w-25 mx-auto"
                  alt=""
                />
                <h4>Time</h4>
                <p>
                  30<span className="unit">km/h</span>
                </p>
              </li>
              <li className="p-2 text-center rounded-lg">
                <img
                  src="isolated-thunderstorms-day.svg"
                  className="w-25 mx-auto"
                  alt=""
                />
                <h4>Time</h4>
                <p>
                  30<span className="unit">km/h</span>
                </p>
              </li>
              <li className="p-2 text-center rounded-lg">
                <img
                  src="isolated-thunderstorms-day.svg"
                  className="w-25 mx-auto"
                  alt=""
                />
                <h4>Time</h4>
                <p>
                  30<span className="unit">km/h</span>
                </p>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
