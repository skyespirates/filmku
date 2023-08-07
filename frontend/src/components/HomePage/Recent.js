import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Recent = () => {
  const [film, setFilm] = useState([]);
  const [recent, setRecent] = useState([]);
  const id = Math.floor(Math.random() * 10) + 1;
  const image = `http://localhost:4000/images/1684997163098-image.png`;

  useEffect(() => {
    const getFilms = () => {
      axios.get(`http://localhost:4000/api/v1/movies/646f042b61998f671f24add9`).then((res) => {
        const persons = res.data;
        setFilm(persons.movie);
        // console.log(film.title);
      });
    };
    getFilms();
  }, []);

  const deskrip = film.description ? film.description.substring(0, 200) + '...' : '';

  return (
    <div className="flex items-center h-screen bg-primary">
      {/* web version */}
      <div id="recent" className="md:flex hidden items-center md:items-start px-12 gap-4 md:gap-20">
        {/* image */}
        <img className=" object-contain w-48 md:w-80" src={image} alt="gambar" />
        {/* content */}
        <div className="md:flex-1 text-justify w-auto text-white md:leading-10">
          <h1 className="text-3xl font-semibold capitalize md:text-5xl">{film.title}</h1>
          <h3 className="mb-10 text-xl font-bold">{film.year}</h3>
          <p className="mb-10 text-xs leading-5 text-justify normal-case md:leading-10 md:text-xl " dangerouslySetInnerHTML={{ __html: deskrip }}></p>
          <div className="">
            <Link className="px-3 py-1 text-xs rounded-full md:font-semibold md:px-9 md:py-3 md:text-2xl" to={`/film/${film._id}`} style={{ backgroundColor: '#04A3DD' }}>
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
      {/* mobile version */}
      <div id="recent" className="flex flex-col gap-6 md:hidden items-center md:items-start px-12 md:gap-20">
        {/* title */}
        <div className="text-center text-white">
          <h1 className="font-semibold capitalize text-5xl">{film.title}</h1>
          <h3 className="text-md font-bold">{film.year}</h3>
        </div>
        {/* image */}
        <img className=" object-contain w-48 md:w-80" src={image} alt="gambar" />
        {/* content */}
        <div className="md:flex-1 flex flex-col gap-2 text-justify w-auto text-white md:leading-10">
          <p className="text-xs leading-5 text-justify normal-case md:leading-10 md:text-xl " dangerouslySetInnerHTML={{ __html: deskrip }}></p>
          <div>
            <Link className="px-3 py-1 text-xs rounded-full md:font-semibold md:px-9 md:py-3 md:text-2xl" to={`/film/${film._id}`} style={{ backgroundColor: '#04A3DD' }}>
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
