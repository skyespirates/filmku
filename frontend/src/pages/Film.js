import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import FilmCard from "../components/FilmCard";

import { useEffect, useState } from "react";
import UsePagination from "../components/UsePagination";
import TextEditor from "../components/TextEditor";

const Film = () => {
  const [films, setFilms] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const PER_PAGE = 5;
  const _DATA = UsePagination(filteredResult, PER_PAGE);
  const handleNext = () => {
    _DATA.next();
  };
  const handlePrev = () => {
    _DATA.prev();
  };
  const movies = [
    {
      id: 1,
      ranking: 9,
      title: "The Avengers",
      years: 2012,
      genre: "Non Animasi",
      country: "Internasional",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      ranking: 10,
      title: "Frozen",
      years: 2015,
      genre: "Animasi",
      country: "Internasional",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  const setItem = () => {
    localStorage.setItem("movies", JSON.stringify(movies));
    getItem();
  };
  const addItem = () => {
    const movies = JSON.parse(localStorage.getItem("movies"));
    const movie = {
      id: 3,
      ranking: 4,
      title: "toy story 3",
      years: 1998,
      genre: "Animasi",
      country: "Internasional",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    };
    const films = [...movies, movie];
    localStorage.setItem("movies", JSON.stringify(films));
  };
  const getItem = () => {
    const movies = JSON.parse(localStorage.getItem("movies"));
    console.log(movies);
    setFilteredResult(movies);
  };
  const clearItem = () => {
    localStorage.clear();
  };
  useEffect(() => {
    getItem();
  }, []);

  return (
    <>
      {/* filter */}
      <Navbar />

      {/* text editor */}
      <TextEditor />

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
            <div>
              <button
                className="px-6 py-2 text-black bg-white rounded hover:bg-gray-300"
                onClick={setItem}
              >
                Set Item
              </button>
              <button
                className="px-6 py-2 text-black bg-white rounded hover:bg-gray-300"
                onClick={addItem}
              >
                Add Item
              </button>
              <button
                className="px-6 py-2 text-black bg-white rounded hover:bg-gray-300"
                onClick={getItem}
              >
                Get Item
              </button>
              <button
                className="px-6 py-2 text-black bg-white rounded hover:bg-gray-300"
                onClick={clearItem}
              >
                Clear Item
              </button>
            </div>
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
