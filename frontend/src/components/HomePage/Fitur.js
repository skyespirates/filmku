const Fitur = () => {
  const dataCard = [
    {
      name: 'film-outline',
      title: 'Berbagai Genre',
    },
    {
      name: 'calendar-outline',
      title: 'Periode Beragam',
    },
    {
      name: 'play-forward-circle-outline',
      title: 'Negara yang berbeda',
    },
  ];
  return (
    <div id="fitur" className=" bg-primary">
      <div className="flex flex-col md:flex-row items-center px-12 pt-20 pb-20 mx-auto text-white justify-center gap-10 md:gap-36" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        {dataCard.map((data, index) => (
          <div className="flex flex-col items-center gap-2 md:gap-6 bg-transparent ">
            <div className="flex items-center justify-center w-40 h-36 rounded-xl bg-primary">
              <ion-icon name={data.name} className="items-center" style={{ color: '#04B6F6', fontSize: '112px' }}></ion-icon>
            </div>
            <div className="text-4xl font-semibold text-center ">{data.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fitur;
