const Fitur = () => {
  return (
    <div id="fitur" className="bg-background">
      <div className="flex flex-col gap-9 md:flex-row items-center px-12 pt-20 pb-20 mx-auto text-white justify-evenly">
        <div className="grid gap-4 bg-transparent justify-items-center w-50">
          <div className="flex items-center justify-center w-40 h-36 rounded-xl bg-surface">
            <ion-icon
              name="film-outline"
              className="items-center text-blue-700 text-6xl"
              style={{ fontSize: "4rem", color: "rgba(26, 86, 219, 1)" }}
            ></ion-icon>
          </div>
          <div className="text-2xl font-semibold text-center text-grey ">
            Berbagai Genre
          </div>
        </div>
        <div className="grid gap-4 bg-transparent justify-items-center w-50">
          <div className="flex items-center justify-center w-40 h-36 rounded-xl bg-surface">
            <ion-icon
              name="calendar-outline"
              className="items-center text-blue-700 text-6xl"
              style={{ fontSize: "4rem", color: "rgba(26, 86, 219, 1)" }}
            ></ion-icon>
          </div>
          <div className="text-2xl font-semibold text-center text-grey ">
            Periode Beragam
          </div>
        </div>
        <div className="grid gap-4 bg-transparent justify-items-center w-50">
          <div className="flex items-center justify-center w-40 h-36 rounded-xl bg-surface">
            <ion-icon
              name="play-forward-circle-outline"
              className="items-center text-blue-700 text-6xl"
              style={{ fontSize: "4rem", color: "rgba(26, 86, 219, 1)" }}
            ></ion-icon>
          </div>
          <div className="text-2xl font-semibold text-center text-grey ">
            Berbagai Negara
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitur;
