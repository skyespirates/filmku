import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const DetailFilm = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black">
        <div className="max-w-5xl mx-auto pt-9">
          <div className="mb-6 head">
            <h1 className="text-3xl font-semibold text-white">
              Shawsank Redemption
            </h1>
            <p className="text-gray-900">2001</p>
          </div>
          <div className="flex body">
            <div
              className="relative flex-shrink-0 mr-6 overflow-hidden"
              style={{ width: "450px", height: "600px" }}
            >
              <img
                className="absolute object-cover w-full h-full"
                src="https://res.cloudinary.com/skyes/image/upload/v1635784317/large_505616_caccc15102.png"
                alt="gambar"
              />
            </div>
            <div className="text-white">
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
              className="inline-block my-12 text-blue-700 hover:underline"
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
