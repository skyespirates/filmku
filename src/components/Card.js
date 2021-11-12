const Card = ({ content }) => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-400"
      style={{ width: "240px", height: "320px" }}
    >
      <div className="w-24 h-24 mb-6 bg-blue-700 rounded-full"></div>
      <h1 className="mb-1">{content.name}</h1>
      <p className="mb-4 text-gray-500">{content.role}</p>
      <div className="flex">
        <div className="w-12 h-12 bg-blue-700 rounded-full"></div>
        <div className="w-12 h-12 mx-4 bg-blue-700 rounded-full"></div>
        <div className="w-12 h-12 bg-blue-700 rounded-full"></div>
      </div>
    </div>
  );
};

export default Card;
