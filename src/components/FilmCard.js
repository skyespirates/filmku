import { Link } from 'react-router-dom';
import { BASE_URL } from '../apiCalls';
const FilmCard = ({ content }) => {
  return (
    <div className="">
      <div className="flex w-full p-8 mb-4 rounded-lg" style={{ backgroundColor: '#5E5E60', width: '1024px', height: '312px' }}>
        <div className="relative flex-shrink-0 mr-2 overflow-hidden bg-gray-900 md:mr-6 cardImage">
          {/* <img className="absolute object-cover object-right w-full h-full" src={content.img || BASE_URL + content.image.url} alt={content.title} /> */}
        </div>
        <div className="flex flex-col justify-between mb-3">
          <div>
            <h1 className="font-semibold text-white-900 md:text-2xl">{content.title}</h1>
            <p className="font-bold text-white-900 md:text-base ">{content.years}</p>
            <p className="mt-4 text-xs text-white-900 md:text-base">{content.description.substring(0, 250) + '...'}</p>
          </div>
          <div>
            <Link className="px-3 py-1 text-xs font-semibold bg-blue-700 rounded-full md:px-6 md:py-3 md:text-base" style={{ backgroundColor: '#04A3DD' }} to={`/film/${content.id}`}>
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
