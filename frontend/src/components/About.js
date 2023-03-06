const About = () => {
  return (
    <div id="about" className="" style={{ backgroundColor: '#1B2124' }}>
      <div className="px-12 pt-20 pb-20" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <h1 className="py-8 text-5xl font-bold text-center text-white">Tentang</h1>
        <div className="flex">
          <div className="flex-1 mb-8 leading-10 text-justify text-white md:text-xl mr-14 md:mr-0 md:mb-0">
            <p className="mb-6">Filmku merupakan Blog pribadi yang memuat tentang film terbaik yang pernah ditonton dan diurutkan dari mulai yang terbaik.</p>
            <p className="">Pembahasan film berasal dari berbagai negara dengan genre yang beragam. adapun jajak pendapat yang dimuat merupakan pendapat pribadi</p>
          </div>
          <div className="flex-none bg-gray-200 md:w-1/2 ml-14">
            <img style={{ objectFit: 'cover', width: '100%', height: '350px' }} className="" src="image2.jpg" alt="gambar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
