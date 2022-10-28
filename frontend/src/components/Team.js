import { team } from "../data";
import Card from "./Card";
const Team = () => {
  return (
    <div id="team" className="bg-black" style={{ backgroundColor: '#1B2124' }}>
      <div className="flex flex-col items-center justify-center h-full pb-6 mx-auto text-white max-w-7xl">
        <h1 className="mb-12 text-5xl font-bold text-center">Tentang</h1>
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
