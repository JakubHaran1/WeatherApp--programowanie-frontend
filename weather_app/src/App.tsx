import ConditionList from "./components/ConditionList";
import ImgBgc from "./components/ImgBgc";
import MainPart from "./components/MainPart";
import NavComponent from "./components/NavComponent";
import Forecast from "./components/Forecast";

import { fetching } from "./utils";

import { useState, useEffect } from "react";

function App() {
  const [coords, setCoords] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      navigator.geolocation.getCurrentPosition(
        (data) => {
          try {
            const user_coords = {
              latitude: data.coords.latitude,
              longitude: data.coords.longitude,
            };
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
          const user_coords = {
            latitude: 52.2298,
            longitude: 21.0118,
          };
          setCoords(user_coords);
        }
      );
    })();
  }, []);

  const [conditions, setConditions] = useState<object>({});

  useEffect(() => {
    (async () => {
      if (coords?.latitude == undefined && coords?.longitude == undefined)
        return;

      const { data, error } = await fetching(
        "/current.json",
        `${coords?.latitude},${coords?.longitude}`
      );
      if (error == null) {
        setConditions(data);
      } else {
        setError(error);
      }
    })();
  }, [coords]);

  useEffect(() => {
    console.log(conditions);
  }, [conditions]);

  return (
    <main className="grid grid-rows-2 grid-cols-1 align-self-start min-h-screen relative  bg-blue-900 p-3 ">
      <h3>{error}</h3>
      <h3>{coords?.latitude}</h3>
      <ImgBgc />

      <div className="weather-app row-start-1 row-end-3 self-start w-85  md:w-150  relative rounded-md m-auto  z-1 py-5 md:grid  md:grid-cols-2 md:grid-rows-[0.3fr,1fr,0.3fr]">
        <NavComponent />
        <MainPart />
        <ConditionList />
        <Forecast />
      </div>
    </main>
  );
}

export default App;
