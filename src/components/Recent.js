import { Link } from 'react-router-dom';

const Recent = () => {
  return (
    // <div className="bg-black" style={{ backgroundColor: '#1B2124', height="640px"}}>
    //   <div id="recent" className="flex max-w-5xl mx-auto">
    //     <div className="bg-gray-400">
    // <img
    //   className="w-full h-full"
    //   src="https://images.unsplash.com/photo-1637319443590-5c6ec2be79f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    //   alt="gambar"
    // />
    //     </div>
    //     <div className="flex-1 text-white">
    //       <p className="mb-8">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur reprehenderit officiis eum nisi eaque veritatis neque laboriosam mollitia ad voluptatem! Omnis quam repellendus sit neque nam delectus, labore harum iure!
    //       </p>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur reprehenderit officiis eum nisi eaque veritatis neque laboriosam mollitia ad voluptatem! Omnis quam repellendus sit neque nam delectus, labore harum iure!
    //       </p>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-black" style={{ backgroundColor: '#1B2124' }}>
      <div className="py-8 max-w-7xl">
        <div className="flex">
          <div className="flex-none mx-20 w-96">
            <img
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1637319443590-5c6ec2be79f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="gambar"
            />
          </div>
          <div className="flex-1 leading-10 text-justify " style={{ color: '#ffffff' }}>
            <h1 className="text-5xl font-semibold ">The Avengers</h1>
            <h3 className="mb-10 text-2xl font-bold">2012</h3>
            <p className="mb-10 text-2xl leading-10 text-justify">
              Filmku merupakan platform informatif yang menjelaskan seputar review dan pendapat dari berbagai film di dunia. Filmku merupakan platform informatif yang menjelaskan seputar review dan pendapat dari berbagai film di dunia.
            </p>
            <div>
              {/* fontnya gak oswald  */}
              <Link className="px-3 py-1 text-xs font-semibold rounded-full md:px-9 md:py-3 md:text-2xl" to="/film" style={{ backgroundColor: '#04A3DD' }}>
                Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
