import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const page = location.pathname.split("/")[1];
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className="bg-black sticky top-0 z-30 shadow-xl px-12"
      style={{ backgroundColor: "#1B2124" }}
    >
      <div
        onClick={() => setToggle(!toggle)}
        className="relative flex flex-col px-2 py-6 mx-auto cursor-pointer max-w-7xl md:flex-row md:justify-between"
      >
        <Link
          id="logo"
          className="text-2xl font-bold text-blue-700 md:text-4xl"
          style={{ color: "#1677ff" }}
          to="/"
        >
          FILMKU
        </Link>
        <div className="absolute z-10 flex items-center justify-center w-6 h-6 rounded-full md:hidden top-3 right-3">
          <ion-icon size="large" name="menu-outline"></ion-icon>
        </div>
        <ul
          className={`text-sm md:text-base items-center justify-center md:justify-end  w-full  md:flex ${
            toggle ? "block" : "hidden"
          }`}
        >
          {page !== "" && (
            <li className="text-center md:mr-9">
              <Link
                className="block py-1 text-white md:py-0 hover:text-blue-300 hover:font-bold"
                to="/"
              >
                Home
              </Link>
            </li>
          )}
          {page === "film" ? null : (
            <>
              <li className="text-center md:mr-9">
                <a
                  className="block py-1 text-white md:py-0 hover:text-blue-300"
                  href="#about"
                >
                  Tentang
                </a>
              </li>
              <li className="text-center md:mr-9">
                <a
                  className="block py-1 text-white md:py-0 hover:text-blue-300"
                  href="#team"
                >
                  Kontak
                </a>
              </li>
            </>
          )}
          <li className="text-center md:mr-9">
            <Link
              className="block py-1 text-white md:py-0 hover:text-blue-300 hover:font-bold"
              to="/movies"
            >
              Movies
            </Link>
          </li>
          <li className="">
            <Link
              className="block px-4 py-1 text-center text-white bg-blue-700 rounded-full hover:bg-transparent"
              style={{ backgroundColor: "#1890ff" }}
              to="/film"
            >
              Daftar Film
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
