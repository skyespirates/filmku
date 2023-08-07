const About = () => {
  return (
    <div id="about" className="bg-primary">
      <div className="px-12 pt-12 pb-12 md:pt-20 md:pb-20" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <h1 className="py-8 mb-4 text-4xl font-bold text-center text-white md:mb-0 md:text-5xl">Tentang</h1>
        <div className="flex">
          <div className="flex-1 mb-8 leading-10 text-justify text-white md:text-xl md:mr-0 md:mb-0">
            <p className="mb-6">Filmku merupakan Blog pribadi yang memuat tentang film terbaik yang pernah ditonton dan diurutkan dari mulai yang terbaik.</p>
            <p className="">Pembahasan film berasal dari berbagai negara dengan genre yang beragam. adapun jajak pendapat yang dimuat merupakan pendapat pribadi</p>
          </div>
          <div className="hidden bg-gray-200 md:block md:w-1/2 ml-14">
            <img style={{ objectFit: 'cover', width: '100%', height: '350px' }} className="" src="image2.jpg" alt="gambar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
