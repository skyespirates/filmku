import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Auth from "../components/Auth";
import Filter from "../components/Filter";
import FilmCard from "../components/FilmCard";
import axios from "axios";
import { useEffect, useState } from "react";
// import { request } from "../apiCalls";
// import { film } from "../data";
// import { Link } from "react-router-dom";
import UsePagination from "../components/UsePagination";

const Film = () => {
  const [films, setFilms] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getFilms = async () => {
      axios.get(`http://localhost:3333/movie`).then((res) => {
        const persons = res.data;
        setFilms(persons);
        setFilteredResult(persons);
        setLoading(false);
      });
    };
    // console.log(filteredResult);
    getFilms();
  }, []);

  const PER_PAGE = 5;
  const _DATA = UsePagination(filteredResult, PER_PAGE);
  const handleNext = () => {
    _DATA.next();
  };
  const handlePrev = () => {
    _DATA.prev();
  };
  // const handleChangePage = (e: any, p: any) => {
  //   setPage(p);
  //   _DATA.jump(p);
  // };

  return (
    <>
      {/* filter */}
      <Navbar />

      {/* daftar film  */}
      <Filter
        filteredResult={filteredResult}
        setFilteredResult={setFilteredResult}
      />

      <div className="" style={{ backgroundColor: "#1B2124" }}>
        {loading ? (
          <h1 className="text-3xl text-white">Loading...</h1>
        ) : (
          <div className="flex flex-col items-center max-w-5xl min-h-screen p-2 mx-auto text-white">
            {_DATA.currentData().map((film) => (
              <FilmCard key={film.id} content={film} />
            ))}
          </div>
        )}
      </div>

      <div className="py-16 text-white" style={{ backgroundColor: "#1B2124" }}>
        <div className="flex justify-center ">
          <div
            className="px-8 py-1 mx-6 bg-transparent border rounded-full hover:text-blue-300"
            onClick={handlePrev}
            style={{ border: "3px solid #04A3DD" }}
          >
            Sebelumnya
          </div>
          <div
            className="px-8 py-1 mx-6 bg-transparent border rounded-full hover:text-blue-300"
            onClick={handleNext}
            style={{ border: "3px solid #04A3DD" }}
          >
            Selanjutnya
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Film;
