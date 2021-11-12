import { team } from "../data";
import Card from "./Card";
const Team = () => {
  return (
    <div style={{ height: "560px" }} className="bg-black">
      <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto text-white">
        <h1 className="mb-16 text-4xl">Our Team</h1>
        <div className="flex justify-around w-full">
          {team.map((item) => (
            <Card key={item.id} content={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
