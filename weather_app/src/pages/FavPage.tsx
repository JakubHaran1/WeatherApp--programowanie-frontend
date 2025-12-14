import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function FavPage() {
  const lists = useSelector((state: RootState) => state.fav.fav);
  console.log(lists);

  return (
    <main className="grid grid-rows-2 grid-cols-1 align-self-start min-h-screen relative  bg-blue-900 p-3 ">
      <div className="weather-app row-start-1 row-end-3 self-start w-85  md:w-150  relative rounded-md m-auto  z-1 py-5 p-3 md:grid  md:grid-cols-2 md:grid-rows-[0.3fr,1fr,0.3fr]">
        <ul>
          {lists.map((el) => (
            <li>
              {el.name}/{el.country}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
