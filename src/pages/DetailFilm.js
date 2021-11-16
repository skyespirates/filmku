import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const DetailFilm = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen px-2 bg-black">
        <div className="max-w-5xl mx-auto pt-9">
          <div className="mb-6 head">
            <h1 className="text-xl font-semibold text-white md:text-3xl">
              Shawsank Redemption
            </h1>
            <p className="text-sm text-gray-500 md:text-base">2001</p>
          </div>
          <div className="flex flex-col body">
            <div className="relative flex-shrink-0 mb-6 mr-6 overflow-hidden detail">
              <img
                className="absolute object-cover w-full h-full"
                src="https://res.cloudinary.com/skyes/image/upload/v1635784317/large_505616_caccc15102.png"
                alt="gambar"
              />
            </div>
            <div className="text-sm text-gray-400 md:text-base">
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                ipsum incidunt assumenda est autem? Animi temporibus mollitia
                officiis magni, ut nisi ipsum amet quae quaerat quod maxime
                sequi ratione velit.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur maiores debitis facere quas dolorum vitae natus
                numquam accusamus aperiam autem veniam voluptatem fugit et
                tempore, animi sint culpa repellendus tempora!
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita sint dicta quaerat, in excepturi quidem est maxime iste
                provident distinctio atque a commodi veritatis voluptatem quas,
                porro, error obcaecati velit.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link
              className="inline-block my-6 text-blue-700 md:my-12 hover:underline"
              to="/film"
            >
              &#60; Kembali
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailFilm;
