export default function ConditionList({
  wind,
  precip,
  cloud,
}: {
  wind: number | string;
  precip: number | string;
  cloud: number | string;
}) {
  return (
    <ul className="condtions-list flex justify-around mb-5  md:w-full md:col-span-2   md:row-start-4  md:row-end-5  ">
      <li>
        <p>
          <i className="fa-solid fa-wind  mr-2 "></i>
          <span className="value">{wind}</span>
          <span className="unit">km/h</span>
        </p>
      </li>
      <li>
        <p>
          <i className="fa-solid fa-droplet mr-2"></i>
          <span className="value">{precip}</span>
          <span className="unit">mm</span>
        </p>
      </li>
      <li>
        <p>
          <i className="fa-solid fa-sun mr-2"></i>
          <span className="value">{cloud}</span>
          <span className="unit">%</span>
        </p>
      </li>
    </ul>
  );
}
