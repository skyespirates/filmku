const Fitur = () => {
  return (
    <div id="feature" className="flex items-center justify-between max-w-5xl mx-auto">
      <div className="grid h-56 bg-transparent justify-items-center w-50">
        <div className="w-40 rounded h-36 rounded-xl" style={{ backgroundColor: '#1B2124' }}>
          <i class="fa fa-film"></i>
        </div>
        <div className="mt-6 text-4xl font-semibold text-center ">Berbagai Genre</div>
      </div>
      <div className="grid h-56 bg-transparent justify-items-center w-50">
        <div className="w-40 rounded h-36 rounded-xl" style={{ backgroundColor: '#1B2124' }}>
          <ion-icon name="archive-outline"></ion-icon>
        </div>
        <div className="mt-6 text-4xl font-semibold text-center ">Periode Beragam</div>
      </div>
      <div className="grid h-56 bg-transparent justify-items-center w-50">
        <div className="w-40 rounded h-36 rounded-xl" style={{ backgroundColor: '#1B2124' }}></div>
        <div className="mt-6 text-4xl font-semibold text-center ">Negara yang berbeda</div>
      </div>
      {/* <div className="w-40 rounded h-36 rounded-xl" style={{ backgroundColor: '#1B2124' }}></div>
      <div className="w-40 rounded h-36 rounded-xl" style={{ backgroundColor: '#1B2124' }}></div> */}
    </div>
  );
};

export default Fitur;
