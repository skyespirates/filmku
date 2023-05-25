import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Hero = () => {
  return (
    <div className="relative" style={{ marginTop: '' }}>
      <div className="" style={styling}>
        <div className="" style={{ backgroundColor: 'rgba(27, 33, 36, 0.6)', zIndex: '2' }}>
          <div className="flex flex-col items-center justify-center max-w-5xl mx-auto text-white h-96 md:min-h-screen" style={{ zIndex: '3' }}>
            <h1 className="mb-12 text-5xl font-bold leading-relaxed tracking-wide text-center md:mb-12 md:text-7xl" style={{ lineHeight: 1.2 }}>
              Karena Film yang seru harus diabadikan
            </h1>
            <Link className="px-3 py-1 text-lg font-semibold rounded-full md:px-9 md:py-3 md:text-xl" to="/film" style={{ backgroundColor: '#04A3DD' }}>
              Cek Film Disini
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const styling = {
  backgroundImage: 'url("image1.jpg")',
  backgroundSize: '1440px 640px',
  zIndex: '1',
};
