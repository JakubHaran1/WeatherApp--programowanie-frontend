import { getIcon } from "../utils";
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

export default function Forecast(forecastData: forecastObjTypes) {
  return (
    <section className="forecast overflow-hidden md:col-start-2 md:col-end-3   md:grid-row-1  md:content-center ">
      <h3>
        <i className="fa-solid fa-clock mr-1"></i>Daily Forecast
      </h3>
      <ul className="flex overflow-x-scroll gap-3 pt-3 pb-5">
        {forecastData.forecastday.map((day) => {
          return (
            <li className="p-2 text-center rounded-lg ">
              <img
                src={
                  "./static/" + getIcon(day.day.condition.code, day.day.is_day)
                }
                className="w-25 mx-auto"
                alt=""
              />
              <h4>{`${day.date.split("-")[2]}.${day.date.split("-")[1]}`}</h4>
              <p>{day.day.condition.text}</p>
              <p>
                {day.day.avgtemp_c}
                <span className="unit">°c</span>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
