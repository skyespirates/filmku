import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { request } from "../apiCalls";
import { BASE_URL } from "../apiCalls";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const DetailFilm = () => {
  const filmId = useLocation().pathname.split("/")[2];
  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getFilm = async () => {
      try {
        const res = await request.get("/films/" + filmId);
        setFilm(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    getFilm();
  }, [filmId]);
  return (
    <>
      <Navbar />
      <div className="min-h-screen px-2 bg-black">
        {loading ? (
          <h1 className="text-3xl text-white">Loading...</h1>
        ) : (
          <div className="max-w-5xl mx-auto pt-9">
            <div className="mb-6 head">
              <h1 className="text-xl font-semibold text-white md:text-3xl">
                {film.title}
              </h1>
              <p className="text-sm text-gray-500 md:text-base">{film.year}</p>
            </div>
            <div className="flex flex-col md:flex-row body">
              <div className="relative flex-shrink-0 mb-6 mr-6 overflow-hidden detail">
                <img
                  className="absolute object-cover w-full h-full"
                  src={BASE_URL + film.image.url}
                  alt={film.title}
                />
              </div>

              <div className="text-sm text-gray-400 md:text-base">
                <p className="mb-6">{film.description}</p>
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
        )}
      </div>
      <Footer />
    </>
  );
};

export default DetailFilm;
