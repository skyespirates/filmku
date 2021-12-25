import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Auth from '../components/Auth';
import Filter from '../components/Filter';
import FilmCard from '../components/FilmCard';
import { useEffect, useState } from 'react';
import { request } from '../apiCalls';
import { film } from '../data';
const Film = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getFilms = async () => {
      try {
        const res = await request.get('/films');
        setFilms(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setFilms(film);
        setLoading(false);
      }
    };
    getFilms();
  }, []);
  return (
    <>
      <Navbar />
      <Filter />
      <div className="" style={{ backgroundColor: '#1B2124' }}>
        {loading ? (
          <h1 className="text-3xl text-white">Loading...</h1>
        ) : (
          <div className="flex flex-col items-center max-w-5xl min-h-screen p-2 mx-auto text-white">
            {films.map((film) => (
              <FilmCard key={film._id} content={film} />
            ))}
          </div>
        )}
      </div>
      <Auth />
      <Footer />
    </>
  );
};

export default Film;
