import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
// import { request } from '../apiCalls';
// import { BASE_URL } from '../apiCalls';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const DetailFilm = () => {
  const filmId = useLocation().pathname.split("/")[2];
  const [films, setFilms] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getFilm = async () => {
      axios.get(`http://localhost:3333/movie/${filmId}`).then((res) => {
        const persons = res.data;
        setFilms(persons);
        setFilteredResult(persons);
        setLoading(false);
      });
    };
    getFilm();
  }, []);
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen px-2 "
        style={{ backgroundColor: "#1B2124" }}
      >
        {loading ? (
          <h1 className="text-3xl text-white">Loading...</h1>
        ) : (
          <div className="max-w-5xl mx-auto pt-9">
            <div className="mb-6 head">
              <h1 className="text-xl font-semibold text-white md:text-3xl">
                {films.title}
              </h1>
              <p className="text-sm text-white md:text-base">{films.years}</p>
            </div>
            <div className="flex flex-col md:flex-row body">
              <div className="relative flex-shrink-0 mb-6 mr-6 overflow-hidden detail bg-gray-900">
                <img
                  className="absolute object-cover w-full h-full"
                  // src={BASE_URL + film.image.url}
                  alt={films.title}
                />
              </div>
              <div className="text-sm text-black-400 md:text-base">
                <p className="mb-6 text-white">{films.description}</p>
              </div>
            </div>
            <div className="text-center pb-8">
              <Link
                className="mx-3 my-1 text-xs bg-transparent font-semibold text-white  rounded-full hover:text-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:px-8 md:py-2 md:text-base"
                style={{ border: "3px solid #04A3DD" }}
                to={`/film`}
              >
                Kembali
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
