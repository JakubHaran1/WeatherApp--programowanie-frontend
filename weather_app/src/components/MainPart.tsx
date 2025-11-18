export default function MainPart() {
  return (
    <section className="main-part flex flex-col gap-3  mt-7 mb-3   md:grid-row-1 md:col-start-1 md:col-end-2 ">
      <p className="text-center">
        <span className="city  mr-2 font-medium text-xl">Wrocław,</span>
        <span className="country ">Poland</span>
      </p>
      <div className="imgs-wrapper ">
        <img src="isolated-thunderstorms.svg" className="w-45 mx-auto" alt="" />
      </div>
      <div className="temperature text-center ">
        <h2 className="text-3xl">30°c</h2>
        <p> Expect high high</p>
      </div>
    </section>
  );
}
