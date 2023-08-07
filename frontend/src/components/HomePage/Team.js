import { team } from '../../data';
import Card from './Card';
const Team = () => {
  return (
    <div id="team" className="px-12 pt-4 md:pt-20 bg-primary text-white">
      <div className="flex flex-col items-center justify-center h-full pb-6 mx-auto max-w-7xl">
        <h1 className="py-8 text-4xl font-bold text-center md:text-5xl ">Kontak</h1>
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
