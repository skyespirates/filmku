import { Link } from "react-router-dom";
import { BASE_URL } from "../apiCalls";
const FilmCard = ({ content }) => {
  return (
    <div className="">
      <div className="flex w-full p-8 mb-4 rounded-lg" style={{ backgroundColor: '#5E5E60', width: '1024px', height: '312px' }}>
        <div className="relative flex-shrink-0 mr-2 overflow-hidden bg-gray-900 md:mr-6 cardImage">
          <img className="absolute object-cover object-right w-full h-full" src={content.img || BASE_URL + content.image.url} alt={content.title} />
        </div>
        <div className="flex flex-col justify-between mb-3">
          <div>
            <h1 className="font-semibold text-white-900 md:text-2xl">{content.title}</h1>
            <p className="font-bold text-white-900 md:text-base ">{content.year}</p>
            {/* <h2 className="text-xs text-gray-900 md:text-base ">{content.year}</h2> */}
          </div>
          <p className="text-xs text-white-900 md:text-base">{content.description.substring(0, 200) + '...'}</p>
          <div>
            <Link className="w-32 p-1 rounded-full h-9 md:px-4 md:py-1 md:text-base" style={{ backgroundColor: '#04A3DD' }} to={`/film/${content._id}`}>
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
