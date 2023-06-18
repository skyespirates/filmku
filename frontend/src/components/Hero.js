import { Link } from "react-router-dom";
import { Button } from "antd";

const Hero = () => {
  return (
    <div className="relative">
      <div className="bg-background" style={styling}>
        <div className="">
          <div
            className="flex flex-col items-center justify-center max-w-5xl mx-auto text-white h-96 md:min-h-screen"
            style={{ zIndex: "3" }}
          >
            <h1 className="mb-12 text-3xl font-bold leading-relaxed tracking-wide text-center md:mb-12 md:text-5xl">
              Karena film yang seru harus diabadikan
            </h1>
            <Link
              className="px-6 py-2 text-base rounded-full md:px-9 md:py-3 md:text-lg bg-primary"
              to="/film"
            >
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
  backgroundSize: "1440px 640px",
  zIndex: "1",
};
