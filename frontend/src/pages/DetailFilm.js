import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
// import { request } from '../apiCalls';
// import { BASE_URL } from '../apiCalls';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const DetailFilm = () => {
  const filmId = useLocation().pathname.split('/')[2];
  const [films, setFilms] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const image = `http://localhost:4000/images/${films.image}`;
  useEffect(() => {
    const getFilm = async () => {
      axios.get(`http://localhost:4000/api/v1/movies/${filmId}`).then((res) => {
        const persons = res.data.movie;
        setFilms(persons);
        setFilteredResult(persons);
        setLoading(false);
        console.log(persons);
        // console.log(films.title);
      });
    };
    getFilm();
  }, []);
  return (
    <>
      <Navbar />
      <div className="min-h-screen px-2 " style={{ backgroundColor: '#1B2124' }}>
        {loading ? (
          <h1 className="text-3xl text-white">Loading...</h1>
        ) : (
          <div className="max-w-5xl mx-auto pt-9">
            <div className="mb-6 head">
              <h1 className="text-xl font-semibold text-white capitalize md:text-3xl">{films.title} </h1>
              <p className="text-sm text-white md:text-base">{films.year}</p>
            </div>
            <div className="flex flex-col md:flex-row body">
              <div className="relative flex-shrink-0 mb-6 mr-6 overflow-hidden bg-gray-900 detail">
                <img className="absolute object-cover w-full h-full" src={image} alt={films.title} />
              </div>
              <div className="text-sm text-black-400 md:text-base">
                <p className="mb-6 text-white normal-case" dangerouslySetInnerHTML={{ __html: films.description }} />
                {/* <p className="mb-6 text-white" dangerouslySetInnerHTML={{ __html: contoh }} /> */}
              </div>
            </div>
            <div className="pb-8 text-center">
              <Link
                className="mx-3 my-1 text-xs font-semibold text-white bg-transparent rounded-full hover:text-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:px-8 md:py-2 md:text-base"
                style={{ border: '3px solid #04A3DD' }}
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
