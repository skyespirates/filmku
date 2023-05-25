import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Recent = () => {
  const [film, setFilm] = useState([]);
  const [recent, setRecent] = useState([]);
  const id = Math.floor(Math.random() * 10) + 1;
  const image = `http://localhost:4000/images/1675695044803-image.png`;

  useEffect(() => {
    const getFilms = () => {
      axios.get(`http://localhost:4000/api/v1/movies/63e113c6cf2eba276f1549ac`).then((res) => {
        const persons = res.data;
        setFilm(persons.movie);
        // console.log(film.title);
      });
    };
    getFilms();
  }, []);

  const deskrip = film.description ? film.description.substring(0, 150) + '...' : '';

  return (
    // <div className="bg-black" style={{ backgroundColor: '#1B2124', height="640px"}}>
    //   <div id="recent" className="flex max-w-5xl mx-auto">
    //     <div className="bg-gray-400">
    // <img
    //   className="w-full h-full"
    //   src="https://images.unsplash.com/photo-1637319443590-5c6ec2be79f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    //   alt="gambar"
    // />
    //     </div>
    //     <div className="flex-1 text-white">
    //       <p className="mb-8">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur reprehenderit officiis eum nisi eaque veritatis neque laboriosam mollitia ad voluptatem! Omnis quam repellendus sit neque nam delectus, labore harum iure!
    //       </p>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur reprehenderit officiis eum nisi eaque veritatis neque laboriosam mollitia ad voluptatem! Omnis quam repellendus sit neque nam delectus, labore harum iure!
    //       </p>
    //     </div>
    //   </div>
    // </div>

    <div id="recent" className="flex h-10 px-12 pt-20 pb-20 bg-black" style={{ backgroundColor: '#1B2124' }}>
      {/* <div className=""> */}
      {/* <div className=""> */}
      {/* image */}
      {/* <div className=""> */}
      <img className="flex-none object-contain w-48 mr-20 md:w-96" src={image} alt="gambar" />
      {/* </div> */}
      {/* content */}
      <div className="flex-1 text-justify text-white md:leading-10">
        <h1 className="text-3xl font-semibold capitalize md:text-5xl">{film.title}</h1>
        <h3 className="mb-10 text-xl font-bold">{film.year}</h3>
        <p className="mb-10 text-xs leading-5 text-justify normal-case md:leading-10 md:text-xl " dangerouslySetInnerHTML={{ __html: deskrip }}></p>
        <div>
          <Link className="px-3 py-1 text-xs rounded-full md:font-semibold md:px-9 md:py-3 md:text-2xl" to={`/film/${film._id}`} style={{ backgroundColor: '#04A3DD' }}>
            Selengkapnya
          </Link>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Recent;
