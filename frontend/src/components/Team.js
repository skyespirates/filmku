import { team } from "../data";
import Card from "./Card";
const Team = () => {
  return (
    <div
      id="team"
      className="bg-black px-12 pt-20"
      style={{ backgroundColor: "#1B2124", color: "#d9d9d9" }}
    >
      <div className="flex flex-col items-center justify-center h-full pb-6 mx-auto max-w-7xl">
        <h1 className=" py-8 text-5xl font-bold text-center">Tim Pengembang</h1>
        <div className="flex flex-col items-center w-full md:flex-row md:justify-around">
          {team.map((item) => (
            <Card key={item.id} content={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
