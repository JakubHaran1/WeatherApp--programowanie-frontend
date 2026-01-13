import { useSelector } from "react-redux";
import { getIcon } from "../utils";
import type { RootState } from "../store/store";
type hoursDataType = {
  forecastday: {
    hour: {
      time: string;
      temp_c: number;
      temp_f: number;
      condition: { code: number; text: string };
      is_day: number;
    }[];
  };
};

export default function Forecast({ forecastday }: hoursDataType) {
  const unitState = useSelector((state: RootState) => state.unit.unit);
  return (
    <section className="forecast overflow-hidden md:col-start-2 md:col-end-3   md:grid-row-1  md:content-center ">
      <h3>
        <i className="fa-solid fa-clock mr-1"></i>Hourly Forecast
      </h3>
      <ul className="flex overflow-x-scroll gap-3 pt-3 pb-5">
        {forecastday.hour.map((day) => {
          return (
            <li
              className="p-2 text-center rounded-lg "
              key={`${day.time.split(" ")[1]}`}>
              <img
                src={"./static/" + getIcon(day.condition.code, day.is_day)}
                className="w-25 mx-auto"
                alt=""
              />
              <h4>{`${day.time.split(" ")[1]}`}</h4>
              <p>{day.condition.text}</p>
              <p>
                <span className="unit">
                  {unitState == "F" ? day.temp_c + "°c" : day.temp_f + "°F"}
                </span>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
