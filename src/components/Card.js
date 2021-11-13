const Card = ({ content }) => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-900"
      style={{ width: "240px", height: "320px" }}
    >
      <div className="relative mb-8 overflow-hidden bg-blue-700 rounded-full w-28 h-28">
        <img
          className="absolute object-cover w-full h-full"
          src={content.img}
          alt={content.name}
        />
      </div>
      <h1 className="mb-1">{content.name}</h1>
      <p className="mb-4 text-gray-500">{content.role}</p>
      <div className="flex">
        <div className="relative flex items-center justify-center rounded-full hover:opacity-50">
          <a
            href={content.socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.svg" alt="instagram" />
          </a>
        </div>
        <div className="flex items-center justify-center mx-4 rounded-full hover:opacity-50">
          <a
            href={content.socialMedia.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.svg" alt="linkedin" />
          </a>
        </div>
        <div className="flex items-center justify-center rounded-full hover:opacity-50">
          <a
            href={content.socialMedia.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.svg" alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
