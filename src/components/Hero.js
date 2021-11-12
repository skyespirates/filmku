import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col items-center justify-center max-w-5xl min-h-screen mx-auto text-white">
        <h1 className="mb-12 text-5xl">
          Karena Film yang seru harus diabadikan
        </h1>
        <Link className="px-6 py-2 bg-blue-700" to="/film">
          Cek Film Disini
        </Link>
      </div>
    </div>
  );
};

export default Hero;
