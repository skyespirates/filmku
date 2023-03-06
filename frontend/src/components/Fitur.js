const Fitur = () => {
  return (
    <div id="fitur" style={{ backgroundColor: '#1B2124' }}>
      <div className="flex items-center px-12 pt-20 pb-20 mx-auto text-white justify-evenly" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="grid h-56 bg-transparent justify-items-center w-50">
          <div className="flex items-center justify-center w-40 h-36 rounded-xl" style={{ backgroundColor: '#1B2124' }}>
            <ion-icon name="film-outline" className="items-center" style={{ color: '#04B6F6', fontSize: '112px' }}></ion-icon>
          </div>
          <div className="mt-6 text-4xl font-semibold text-center ">Berbagai Genre</div>
        </div>
        <div className="grid h-56 bg-transparent justify-items-center w-50">
          <div className="flex items-center justify-center w-40 h-36 rounded-xl" style={{ backgroundColor: '#1B2124' }}>
            <ion-icon name="calendar-outline" className="items-center" style={{ color: '#04B6F6', fontSize: '112px' }}></ion-icon>
          </div>
          <div className="mt-6 text-4xl font-semibold text-center ">Periode Beragam</div>
        </div>
        <div className="grid h-56 bg-transparent justify-items-center w-50">
          <div className="flex items-center justify-center w-40 h-36 rounded-xl" style={{ backgroundColor: '#1B2124' }}>
            <ion-icon name="play-forward-circle-outline" className="items-center" style={{ color: '#04B6F6', fontSize: '112px' }}></ion-icon>
          </div>
          <div className="mt-6 text-4xl font-semibold text-center ">Negara yang berbeda</div>
        </div>
      </div>
    </div>
  );
};

export default Fitur;
