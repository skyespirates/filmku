import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FilmCard from "../components/FilmCard";
import { film } from "../data";

const Film = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black">
        <div className="flex flex-col items-center justify-center max-w-5xl min-h-screen mx-auto text-white">
          {film.map((item) => (
            <FilmCard key={item.id} content={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Film;
