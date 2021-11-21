const Recent = () => {
  return (
    <div className="bg-black">
      <div id="recent" className="flex max-w-5xl mx-auto">
        <div style={{ width: "360px" }} className="bg-gray-400">
          <img
            className="w-full h-full"
            src="https://images.unsplash.com/photo-1637319443590-5c6ec2be79f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="gambar"
          />
        </div>
        <div className="flex-1 text-white">
          <p className="mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur reprehenderit officiis eum nisi eaque veritatis neque
            laboriosam mollitia ad voluptatem! Omnis quam repellendus sit neque
            nam delectus, labore harum iure!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur reprehenderit officiis eum nisi eaque veritatis neque
            laboriosam mollitia ad voluptatem! Omnis quam repellendus sit neque
            nam delectus, labore harum iure!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recent;
