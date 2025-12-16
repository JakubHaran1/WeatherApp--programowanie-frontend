import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function MainPart({
  city,
  country,
  icon,
  temp_c,
  temp_f,
  text,
  date,
}: {
  city: string;
  country: string;
  icon: string;
  temp_c: number | string;
  temp_f: number | string;
  text: string;
  date: string;
}) {
  const unitState = useSelector((state: RootState) => state.unit.unit);
  return (
    <section className="main-part flex flex-col gap-3  mt-7 mb-3   md:grid-row-1 md:col-start-1 md:col-end-2 ">
      <p className="text-center">
        <span className="city  mr-2 font-medium text-xl">{city},</span>
        <span className="country ">{country}</span>
      </p>
      <h3 className="text-center">
        {date.split("-")[2]}.{date.split("-")[1]}.{date.split("-")[0]}
      </h3>
      <div className="imgs-wrapper ">
        <img src={"./animated/" + icon} className="w-45 mx-auto" alt="" />
      </div>
      <div className="temperature text-center ">
        <h2 className="text-3xl">
          {unitState == "F" ? temp_c + "°c" : temp_f + "°F"}
        </h2>
        <p>{text}</p>
      </div>
    </section>
  );
}
