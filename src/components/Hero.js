import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto text-white h-96 md:min-h-screen">
        <h1 className="mb-4 text-2xl text-center md:mb-12 md:text-5xl">
          Karena Film yang seru harus diabadikan
        </h1>
        <Link
          className="px-2 py-1 text-xs bg-blue-700 md:px-6 md:py-2 md:text-base"
          to="/film"
        >
          Cek Film Disini
        </Link>
      </div>
    </div>
  );
};

export default Hero;
