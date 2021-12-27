import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative">
      <div className="" style={styling}>
        <div className="" style={{ backgroundColor: '#1B2124', opacity: '0.6', zIndex: '2' }}>
          <div className="flex flex-col items-center justify-center max-w-5xl mx-auto text-white h-96 md:min-h-screen">
            <h1 className="mb-16 text-2xl font-bold leading-relaxed tracking-wide text-center md:mb-12 md:text-7xl ">Karena Film yang seru harus diabadikan</h1>
            <Link className="px-3 py-1 text-xs font-semibold bg-blue-700 rounded-full md:px-9 md:py-3 md:text-2xl" to="/film" style={{ backgroundColor: '#04A3DD' }}>
              Cek Film Disini
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const styling = { backgroundImage: 'url("image1.jpg")', backgroundSize: '1440px 640px', zIndex: '1' };
