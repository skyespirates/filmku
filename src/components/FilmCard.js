import { Link } from "react-router-dom";

const FilmCard = ({ content }) => {
  return (
    <div className="flex p-4 mb-4 bg-gray-500">
      <div
        style={{ width: "180px", height: "240px" }}
        className="relative flex-shrink-0 mr-6 overflow-hidden bg-gray-900"
      >
        <img
          className="absolute object-cover object-right w-full h-full"
          src={content.img}
          alt={content.title}
        />
      </div>
      <div className="flex flex-col justify-evenly">
        <div>
          <h1 className="text-2xl font-semibold ">{content.title}</h1>
          <h2 className="text-gray-900 ">{content.year}</h2>
        </div>
        <p className="text-gray-900">{content.description}</p>
        <div>
          <Link className="px-4 py-1 bg-blue-700" to={`/film/${content.id}`}>
            Selengkapnya
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
