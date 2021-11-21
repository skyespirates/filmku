const Card = ({ content }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 mb-6 bg-gray-900 rounded-lg px-36">
      <div className="relative w-40 h-40 mb-8 overflow-hidden bg-blue-700 rounded-full">
        <img
          className="absolute object-cover w-full h-full"
          src={content.img}
          alt={content.name}
        />
      </div>
      <p className="mb-8 font-bold">{content.name}</p>
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
