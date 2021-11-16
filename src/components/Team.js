import { team } from "../data";
import Card from "./Card";
const Team = () => {
  return (
    <div id="team" className="bg-black">
      <div className="flex flex-col items-center justify-center h-full max-w-5xl pb-6 mx-auto text-white">
        <h1 className="my-6 text-xl md:mb-16 md:text-4xl">Our Team</h1>
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
