const About = () => {
  return (
    <div id="about" className="">
      <div className="py-8 mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl text-center">Tentang</h1>
        <div className="flex">
          <div className="flex-1">
            <p className="mb-4">
              Filmku merupakan platform informatif yang menjelaskan seputar
              review dan pendapat dari berbagai film di dunia.
            </p>
            <p className="">
              Pembahasan film berasal dari berbagai negara dengan genre yang
              beragam. adapun jajak pendapat yang dimuat merupakan pendapat
              pribadi
            </p>
          </div>
          <div className="flex-1">
            <img
              className=""
              src="https://images.unsplash.com/photo-1577643422888-4b19d0e4fbe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="gambar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
