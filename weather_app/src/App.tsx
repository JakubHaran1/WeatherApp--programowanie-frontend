import ConditionList from "./components/ConditionList";
import ImgBgc from "./components/ImgBgc";
import MainPart from "./components/MainPart";
import NavComponent from "./components/NavComponent";
import Forecast from "./components/Forecast";

function App() {
  return (
    <main className="grid grid-rows-2 grid-cols-1 align-self-start min-h-screen relative  bg-blue-900 p-3 ">
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
