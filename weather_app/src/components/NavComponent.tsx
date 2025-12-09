import React, { useRef, useState, useEffect } from "react";
import { fetching } from "../utils";
export default function NavComponent({
  city,
  errorState,
}: {
  city: string;
  errorState: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  type LocationDataType = {
    name: string;
    country: string;
  }[];

  const [inputValue, setInputValue] = useState(city);
  const [displayValue, setDisplayValue] = useState(city);
  const [locationsData, setLocationsData] = useState<LocationDataType | []>([]);

  const timeoutValue = useRef<ReturnType<typeof setTimeout> | null | number>(
    null
  );

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setDisplayValue(e.target.value);
    if (timeoutValue.current) clearTimeout(timeoutValue.current);
    timeoutValue.current = setTimeout(() => {
      setInputValue(e.target.value);
    }, 500);
  }

  useEffect(() => {
    const makeQuery = async function () {
      try {
        const { data } = await fetching("/search.json", inputValue, 0);
        setLocationsData(data);
        console.log(data);
      } catch (error) {
        if (error instanceof Error && error.message != "") {
          errorState(error.message);
        }
      }
    };
    makeQuery();
  }, [inputValue, errorState]);

  return (
    <nav className="flex justify-center gap-5 md:gap-15 items-center md:w-full md:col-span-2   md:grid-row-1">
      <div className="search relative text-center d-flex justify-content-center flex-wrap">
        <input
          onChange={inputHandler}
          id="city"
          name="city"
          className="bg-blue-400  rounded-l-md p-1"
          type="text"
          value={displayValue}
        />
        <button className="bg-blue-500 rounded-r-md mt py-1 px-2 cursor-pointer ">
          <i className="fa-solid fa-magnifying-glass "></i>
        </button>

        <div className="search-bar absolute d-flex-column bg-blue-300 w-full">
          {locationsData.length > 0 ? (
            locationsData.map((el) => {
              return (
                <>
                  <li>{el.name}</li>
                </>
              );
            })
          ) : (
            <p>Nie możemy znaleźć szukanej lokalizacji</p>
          )}
        </div>
      </div>
      <div className="nav-el mt-2 ">
        <i className="fa-solid text-xl fa-star"></i>
      </div>
    </nav>
  );
}
