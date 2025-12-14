import ConditionList from "../components/ConditionList";
import ImgBgc from "../components/ImgBgc";
import MainPart from "../components/MainPart";
import NavComponent from "../components/NavComponent";
import Forecast from "../components/Forecast";

import { fetching, getIcon } from "../utils";

import { useState, useEffect, useCallback } from "react";

export default function HomePage() {
  // lokalizacja dla której jest pobierane API
  type CurrentLocationTypes = {
    name: string;
    country: string;
  };

  // Pod typ zwrócenia z api
  type CurrentWeatherTypes = {
    condition: { code: number; text: string };
    is_day: number;
    temp_c: number;
    wind_kph: number;
    precip_mm: number;
    cloud: number;
  };

  // Pod typ do mainType - prognoza godzinowa
  type ForecastTypes = {
    forecastday: {
      date: string;
      hour: {
        time: string;
        temp_f: number;
        temp_c: number;
        condition: { code: number; text: string };
        is_day: number;
      }[];
    }[];
  };

  // main datatype dla forecast api
  type MainObjType = {
    current: CurrentWeatherTypes;
    location: CurrentLocationTypes;
    forecast: ForecastTypes;
  };

  const [coords, setCoords] = useState<number[]>([]);
  const [error, setError] = useState<string>("");
  const [conditions, setConditions] = useState<MainObjType | null>(null);
  const [location, setLocation] = useState<CurrentLocationTypes>({
    name: "--",
    country: "--",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        const user_coords = [data.coords.latitude, data.coords.longitude];
        setCoords(user_coords);
      },
      () => {
        const user_coords = [52.2298, 21.0118];
        setCoords(user_coords);
      }
    );
  }, []);

  useEffect(() => {
    if (typeof coords[0] != "number") return;

    const getLocation = async () => {
      try {
        const { data, error } = await fetching(
          "/search.json",
          `${coords[0]},${coords[1]}`
        );
        if (error || !data || data.length === 0)
          throw new Error("Search Api Error");

        setLocation({ name: data[0].name, country: data[0].country });
      } catch (err) {
        setError((err as Error).message);
      }
    };
    getLocation();
  }, [coords]);

  const fetchForecast = useCallback(() => {
    if (location.name == "--") return;
    async function forecast() {
      const query = location.name;
      console.log(location.name);

      const { data, error } = await fetching("/forecast.json", query);

      console.log(data);
      if (error == null) {
        const dataObj: MainObjType = data;
        console.log(dataObj);

        setConditions(dataObj);
      } else {
        setError(error);
      }
    }
    forecast();
  }, [location]);

  useEffect(() => {
    fetchForecast();
  }, [fetchForecast]);

  useEffect(() => {
    console.log(conditions ?? "No");
  }, [conditions]);

  if (!conditions) {
    return (
      <main className=" bg-blue-900 text-center">
        <div className="weather-app">
          <h3 className="my-auto">NO DATA ;_;</h3>
        </div>
      </main>
    );
  }

  return (
    <main className="grid grid-rows-2 grid-cols-1 align-self-start min-h-screen relative  bg-blue-900 p-3 ">
      <h3>{error}</h3>
      <ImgBgc
        link={getIcon(
          conditions.current.condition.code,
          conditions.current.is_day
        )}
      />

      <div className="weather-app row-start-1 row-end-3 self-start w-85  md:w-150  relative rounded-md m-auto  z-1 py-5 p-3 md:grid  md:grid-cols-2 md:grid-rows-[0.3fr,1fr,0.3fr]">
        <NavComponent
          city={conditions?.location.name ?? "--"}
          country={conditions?.location.country ?? "--"}
          errorState={setError}
          locationSetter={setLocation}
          location={location}
        />
        <MainPart
          city={conditions.location.name}
          country={conditions.location.country}
          icon={getIcon(
            conditions.current.condition.code,
            conditions.current.is_day ?? 0
          )}
          temp={conditions.current.temp_c}
          text={conditions.current.condition.text}
          date={conditions.forecast.forecastday[0].date}
        />

        <ConditionList
          wind={conditions.current.wind_kph}
          precip={conditions.current.precip_mm}
          cloud={conditions.current.cloud}
        />
        <Forecast forecastday={conditions.forecast.forecastday[0]} />
      </div>
    </main>
  );
}
