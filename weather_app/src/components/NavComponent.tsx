import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetching } from "../utils";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { addFav } from "../store/fav/favSlice";
type CurrentLocationTypes = {
  name: string;
  country: string;
};
// typ do obiektów location z listy z search api
type SearchArrayType = {
  name: string;
  country: string;
}[];
export default function NavComponent({
  city,
  errorState,
  locationSetter,
  location,
}: {
  city: string;
  country: string;
  errorState: React.Dispatch<React.SetStateAction<string>>;
  locationSetter: React.Dispatch<React.SetStateAction<CurrentLocationTypes>>;
  location: CurrentLocationTypes;
}) {
  const timeoutValue = useRef<ReturnType<typeof setTimeout> | null | number>(
    null
  );

  const eventRef = useRef<HTMLDivElement>(null);

  // zmienna do wayszukwiarki -  callowania api - co x s
  const [inputValue, setInputValue] = useState<string | null>(null);

  // zmienna do wyszikiwarki do wyświetlania danych - aktuializacja na bieżąco
  const [displayValue, setDisplayValue] = useState(city);
  // zmienna przechowująca stan navbara- czy widoczny czy nie
  const [searchBar, setSearchBar] = useState<boolean>(false);
  // zmienna do navbara - przechowuje dane
  const [locationsData, setLocationsData] = useState<SearchArrayType | []>([]);
  const dispatchFav = useDispatch();
  const lists = useSelector((state: RootState) => state.fav.fav);

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (timeoutValue.current) clearTimeout(timeoutValue.current);
    timeoutValue.current = setTimeout(() => {
      setInputValue(e.target.value);
    }, 500);
  }

  useEffect(() => {
    const makeQuery = async function () {
      try {
        if (!inputValue) return;
        const { data } = await fetching("/search.json", inputValue);
        setLocationsData(data);
      } catch (error) {
        if (error instanceof Error && error.message != "") {
          errorState(error.message);
        }
      }
    };

    makeQuery();
  }, [inputValue, errorState]);

  useEffect(() => {
    function mouseEvent(e: MouseEvent) {
      if (eventRef.current && !eventRef.current.contains(e.target as Node))
        setSearchBar(false);
    }
    document.addEventListener("click", mouseEvent);
    return () => document.removeEventListener("click", mouseEvent);
  }, []);

  return (
    <nav className="flex justify-center gap-5 md:gap-15 items-center md:w-full md:col-span-2   md:grid-row-1">
      <div
        className="search relative text-center d-flex justify-content-center flex-wrap"
        ref={eventRef}>
        <input
          onChange={(el) => {
            setDisplayValue(el.target.value);
            inputHandler(el);
          }}
          id="city"
          name="city"
          className="bg-blue-400  rounded-l-md p-1"
          type="text"
          value={displayValue}
          onFocus={() => setSearchBar(true)}
        />
        <button className="bg-blue-500 rounded-r-md mt py-1 px-2 cursor-pointer ">
          <i className="fa-solid fa-magnifying-glass "></i>
        </button>

        <div
          className={`search-bar absolute d-flex-column gap-3 bg-blue-300 w-full ${
            searchBar && "active"
          }`}>
          {locationsData.length > 0
            ? locationsData.map((el) => {
                return (
                  <>
                    <li
                      className="py-2"
                      onClick={() => {
                        locationSetter({ country: el.country, name: el.name });
                        setDisplayValue(el.name);
                      }}>
                      {el.name} / <span className="italic ">{el.country}</span>
                    </li>
                  </>
                );
              })
            : ""}
        </div>
      </div>
      <div
        className="nav-el mt-2 "
        onClick={() => {
          console.log(lists);
          dispatchFav(addFav(location));

          console.log(lists);
        }}>
        <i className="fa-solid text-xl fa-star"></i>
      </div>
    </nav>
  );
}
