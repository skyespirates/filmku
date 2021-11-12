import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="flex justify-between max-w-5xl py-2 mx-auto">
        <Link className="text-4xl font-bold text-blue-700" to="/">
          FILMKU
        </Link>
        <ul className="flex items-center">
          <li className="mr-9">
            <Link className="text-white" to="/">
              Home
            </Link>
          </li>
          <li className="mr-9">
            <a className="text-white" href="#about">
              About
            </a>
          </li>
          <li className="mr-9">
            <a className="text-white" href="#team">
              Team
            </a>
          </li>
          <li className="">
            <Link className="px-3 py-1 text-white bg-blue-700" to="/film">
              Daftar Film
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
