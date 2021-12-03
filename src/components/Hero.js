import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="" style={{ backgroundImage: 'image1.jpg', backgroundSize: '1440px 640px', backgroundColor: '#1B2124' }}>
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto text-white h-96 md:min-h-screen">
        <h1 className="mb-16 text-2xl text-center md:mb-12 md:text-7xl font-bold tracking-wide leading-relaxed ">Karena Film yang seru harus diabadikan</h1>
        <Link className="px-3 py-1 font-semibold text-xs bg-blue-700 rounded-full md:px-9 md:py-3 md:text-2xl" to="/film" style={{ backgroundColor: '#04A3DD' }}>
          Cek Film Disini
        </Link>
      </div>
    </div>
  );
};

export default Hero;
