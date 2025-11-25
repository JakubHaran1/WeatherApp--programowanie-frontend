import ConditionList from "./components/ConditionList";
import ImgBgc from "./components/ImgBgc";
import MainPart from "./components/MainPart";
import NavComponent from "./components/NavComponent";
import Forecast from "./components/Forecast";

import { fetching } from "./utils";
import { weatherIcons } from "./assets/weatherIcons";

import { useState, useEffect } from "react";

function App() {
  function getIcon(code: number, day: number) {
    const newDay = day == 0 ? "0" : "1";
    const icons = weatherIcons[code][newDay];
    return icons;
  }

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
    name: string | undefined;
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
      if (coords?.[0] == undefined && coords?.[1] == undefined) return;

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

  return (
    <main className="grid grid-rows-2 grid-cols-1 align-self-start min-h-screen relative  bg-blue-900 p-3 ">
      <h3>{error}</h3>
      <ImgBgc
        link={
          getIcon(
            conditions?.current.condition.code ?? 1003,
            conditions?.current.is_day ?? 0
          ) ?? "--"
        }
      />

      <div className="weather-app row-start-1 row-end-3 self-start w-85  md:w-150  relative rounded-md m-auto  z-1 py-5 md:grid  md:grid-cols-2 md:grid-rows-[0.3fr,1fr,0.3fr]">
        <NavComponent city={conditions?.location.name ?? "--"} />
        <MainPart
          city={conditions?.location.name ?? "--"}
          country={conditions?.location.country ?? "--"}
          icon={getIcon(1003, conditions?.current.is_day ?? 0) ?? "--"}
          temp={conditions?.current.temp_c ?? "--"}
          text={conditions?.current.condition.text ?? "--"}
        />
        <ConditionList
          wind={conditions?.current.wind_kph ?? "--"}
          precip={conditions?.current.precip_mm ?? "--"}
          cloud={conditions?.current.cloud ?? "--"}
        />
        <Forecast />
      </div>
    </main>
  );
}

export default App;
