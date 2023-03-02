const Fitur = () => {
  return (
    <div
      id="feature"
      className="flex items-center justify-between mx-auto px-14"
      style={{ backgroundColor: "#1B2124", color: "#d9d9d9" }}
    >
      <div className="grid h-56 bg-transparent justify-items-center w-50">
        <div
          className="flex items-center justify-center w-40 rounded h-36 rounded-xl"
          style={{ backgroundColor: "#1B2124" }}
        >
          <ion-icon
            name="film-outline"
            className="items-center"
            style={{ color: "#04B6F6", fontSize: "112px" }}
          ></ion-icon>
        </div>
        <div className="mt-6 text-4xl font-semibold text-center ">
          Berbagai Genre
        </div>
      </div>
      <div className="grid h-56 bg-transparent justify-items-center w-50">
        <div
          className="flex items-center justify-center w-40 rounded h-36 rounded-xl"
          style={{ backgroundColor: "#1B2124" }}
        >
          <ion-icon
            name="calendar-outline"
            className="items-center"
            style={{ color: "#04B6F6", fontSize: "112px" }}
          ></ion-icon>
        </div>
        <div className="mt-6 text-4xl font-semibold text-center ">
          Periode Beragam
        </div>
      </div>
      <div className="grid h-56 bg-transparent justify-items-center w-50">
        <div
          className="flex items-center justify-center w-40 rounded h-36 rounded-xl"
          style={{ backgroundColor: "#1B2124" }}
        >
          <ion-icon
            name="play-forward-circle-outline"
            className="items-center"
            style={{ color: "#04B6F6", fontSize: "112px" }}
          ></ion-icon>
        </div>
        <div className="mt-6 text-4xl font-semibold text-center ">
          Negara yang berbeda
        </div>
      </div>
    </div>
  );
};

export default Fitur;
