const About = () => {
  return (
    <div id="about" className="pt-20" style={{ backgroundColor: "#1B2124" }}>
      <div className=" mx-auto max-w-7xl">
        <h1
          className="py-8 text-5xl text-center font-bold"
          style={{ color: "#d9d9d9" }}
        >
          Tentang
        </h1>
        <div className="flex flex-col md:flex-row">
          <div
            className="flex-1 md:text-xl leading-10 text-justify mx-14 md:mr-0 mb-8 md:mb-0"
            style={{ color: "#bfbfbf" }}
          >
            <p className="mb-6">
              Filmku merupakan platform informatif yang menjelaskan seputar
              review dan pendapat dari berbagai film di dunia.
            </p>
            <p className="">
              Pembahasan film berasal dari berbagai negara dengan genre yang
              beragam. adapun jajak pendapat yang dimuat merupakan pendapat
              pribadi
            </p>
          </div>
          <div className="bg-gray-200  md:w-1/2 mx-14">
            <img
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              className=""
              src="image2.jpg"
              alt="gambar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
