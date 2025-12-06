import ConditionList from "./components/ConditionList";
import ImgBgc from "./components/ImgBgc";
import MainPart from "./components/MainPart";
import NavComponent from "./components/NavComponent";
import Forecast from "./components/Forecast";

import { fetching, getIcon } from "./utils";

import { useState, useEffect } from "react";

function App() {
  const [coords, setCoords] = useState<number[] | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      navigator.geolocation.getCurrentPosition(
        (data) => {
          try {
            const user_coords = [data.coords.latitude, data.coords.longitude];
            setCoords(user_coords);
          } catch (error) {
            let message;
            if (error instanceof Error && error.message != "") {
              message = error.message;
            } else {
              message = "Critical error !";
            }
            setError(message);
          }
        },
        () => {
          const user_coords = [52.2298, 21.0118];
          setCoords(user_coords);
        }
      );
    })();
  }, []);

  type locationTypes = {
    name: string;
    country: string;
  };

  type currentObjTypes = {
    condition: { code: number; text: string };
    is_day: number;
    temp_c: number;
    wind_kph: number;
    precip_mm: number;
    cloud: number;
  };

  type forecastObjTypes = {
    forecastday: {
      date: string;
      day: {
        avgtemp_c: number;
        avgtemp_f: number;
        condition: { code: number; text: string };
        is_day: number;
      };
    }[];
  };

  type dataObjType = {
    current: currentObjTypes;
    location: locationTypes;
    forecast: forecastObjTypes;
  };

  const [conditions, setConditions] = useState<dataObjType | null>(null);

  useEffect(() => {
    (async () => {
      if (!coords) return;

      const { data, error } = await fetching(
        "/forecast.json",
        `${coords?.[0]},${coords?.[1]}`,
        5
      );
      if (error == null) {
        const dataObj: dataObjType = data;
        console.log(dataObj);

        setConditions(dataObj);
      } else {
        setError(error);
      }
    })();
  }, [coords]);

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
        <NavComponent city={conditions?.location.name ?? "--"} />
        <MainPart
          city={conditions.location.name}
          country={conditions.location.country}
          icon={getIcon(
            conditions.current.condition.code,
            conditions.current.is_day ?? 0
          )}
          temp={conditions.current.temp_c}
          text={conditions.current.condition.text}
        />
        <ConditionList
          wind={conditions.current.wind_kph}
          precip={conditions.current.precip_mm}
          cloud={conditions.current.cloud}
        />
        <Forecast {...conditions.forecast} />
      </div>
    </main>
  );
}

export default App;
