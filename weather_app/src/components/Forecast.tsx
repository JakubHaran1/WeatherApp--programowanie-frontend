import { getIcon } from "../utils";
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
  return (
    <section className="forecast overflow-hidden md:col-start-2 md:col-end-3   md:grid-row-1  md:content-center ">
      <h3>
        <i className="fa-solid fa-clock mr-1"></i>Hourly Forecast
      </h3>
      <ul className="flex overflow-x-scroll gap-3 pt-3 pb-5">
        {forecastday.hour.map((day) => {
          console.log("d", day);
          return (
            <li className="p-2 text-center rounded-lg ">
              <img
                src={"./static/" + getIcon(day.condition.code, day.is_day)}
                className="w-25 mx-auto"
                alt=""
              />
              <h4>{`${day.time.split(" ")[1]}`}</h4>
              <p>{day.condition.text}</p>
              <p>
                {day.temp_c}
                <span className="unit">°c</span>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
