import { Link } from "react-router-dom";
import { BASE_URL } from "../apiCalls";
const FilmCard = ({ content }) => {
  return (
    <div className="flex w-full p-8 mb-4 bg-gray-500 rounded-lg">
      <div className="relative flex-shrink-0 mr-2 overflow-hidden bg-gray-900 md:mr-6 cardImage">
        <img
          className="absolute object-cover object-right w-full h-full"
          src={content.img || BASE_URL + content.image.url}
          alt={content.title}
        />
      </div>
      <div className="flex flex-col justify-around">
        <div>
          <h1 className="font-semibold md:text-2xl">{content.title}</h1>
          <h2 className="text-xs text-gray-900 md:text-base ">
            {content.year}
          </h2>
        </div>
        <p className="text-xs text-gray-900 md:text-base">
          {content.description.substring(0, 100) + "..."}
        </p>
        <div>
          <Link
            className="p-1 text-xs bg-blue-700 rounded-full md:px-4 md:py-1 md:text-base"
            to={`/film/${content._id}`}
          >
            Selengkapnya
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
