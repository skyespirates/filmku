import { useState, useEffect } from "react";
import axios from "axios";

const Filter = ({ filteredResult, setFilteredResult }) => {
  const [data, setData] = useState([]);
  const [tahun, setTahun] = useState([
    "< 2000",
    "2000 - 2010",
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
  ]);
  useEffect(() => {
    const getFilms = async () => {
      axios.get(`http://localhost:3333/movie`).then((res) => {
        const persons = res.data;
        setData(persons);
      });
    };
    console.log(filteredResult);
    getFilms();
  }, []);

  const [selectGenre, isSelectGenre] = useState("Genre");
  const [open, isOpen] = useState(false);
  const getOpenGenre = () => {
    isOpen(!open);
    isOpenCountry(false);
    isOpenYears(false);
  };
  const pickGenre = (value) => {
    const filteredData = data.filter((item) => item.genre === value);
    // const filteredData = filteredResult.filter((item.genre === "Animasi") => {
    //   return Object.values(item.genre).join('').includes(value);
    // });
    console.log(filteredData);
    setFilteredResult(filteredData);
    isSelectGenre(value);
    isSelectCountry("Negara");
    isSelectYears("Tahun");
    isOpen(!open);
  };
  const [selectCountry, isSelectCountry] = useState("Negara");
  const [openCountry, isOpenCountry] = useState(false);
  const getOpenCountry = () => {
    isOpen(false);
    isOpenCountry(!openCountry);
    isOpenYears(false);
  };
  const pickCountry = (value) => {
    const filteredData = data.filter((item) => item.country === value);
    console.log(filteredData);
    setFilteredResult(filteredData);
    isSelectGenre("Genre");
    isSelectCountry(value);
    isSelectYears("Tahun");
    isOpenCountry(!openCountry);
  };
  const [selectYears, isSelectYears] = useState("Tahun");
  const [openYears, isOpenYears] = useState(false);
  const getOpenYears = () => {
    isOpen(false);
    isOpenCountry(false);
    isOpenYears(!openYears);
  };
  const pickYears = (value) => {
    let filteredData = [];
    if (value === "< 2000") {
      filteredData = data.filter((item) => item.years === 1998);
    } else if (value === "2000 - 2010") {
      filteredData = data.filter((item) => item.years === 2009);
    } else {
      filteredData = data.filter((item) => item.years === value);
    }
    console.log(filteredData);
    setFilteredResult(filteredData);
    isSelectGenre("Genre");
    isSelectCountry("Negara");
    isSelectYears(value);
    isOpenYears(!openYears);
  };

  return (
    <div className="py-16 text-white" style={{ backgroundColor: "#1B2124" }}>
      <div className="flex flex-row justify-center content-center">
        {/* filter genre */}
        <div className="mx-16">
          <div
            onClick={getOpenGenre}
            className="inline-flex items-center px-8 py-2 text-sm font-medium text-center text-white bg-transparent rounded-full hover:text-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{ border: "3px solid #04A3DD" }}
          >
            <p>{selectGenre}</p>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
          <div
            id="dropdownDivider"
            className="z-10 text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute"
          >
            <ul
              className={`py-1 ${open ? "show" : "hidden"}  `}
              aria-labelledby="dropdownDividerButton"
            >
              <li
                onClick={() => pickGenre("Animasi")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Animasi
              </li>
              <li
                onClick={() => {
                  pickGenre("Non Animasi");
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Non Animasi
              </li>
            </ul>
          </div>
        </div>

        {/* filter negara */}
        <div className="mx-16">
          <div
            onClick={getOpenCountry}
            className="inline-flex items-center px-8 py-2 text-sm font-medium text-center text-white bg-transparent rounded-full hover:text-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{ border: "3px solid #04A3DD" }}
          >
            <p>{selectCountry}</p>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
          <div
            id="dropdownDivider"
            className="z-10 text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute"
          >
            <ul
              className={`py-1 ${openCountry ? "show" : "hidden"} `}
              aria-labelledby="dropdownDividerButton"
            >
              <li
                onClick={() => {
                  pickCountry("Indonesia");
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Indonesia
              </li>
              <li
                onClick={() => {
                  pickCountry("Internasional");
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Internasional
              </li>
            </ul>
          </div>
        </div>

        {/* filter tahun */}
        <div className="mx-16">
          <div
            onClick={getOpenYears}
            className="inline-flex items-center px-8 py-2 text-sm font-medium text-center text-white bg-transparent rounded-full hover:text-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{ border: "3px solid #04A3DD" }}
          >
            <p>{selectYears}</p>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
          <div
            id="dropdownDivider"
            className="z-10 text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute"
          >
            <ul
              className={`py-1 ${openYears ? "show" : "hidden"} `}
              aria-labelledby="dropdownDividerButton"
            >
              {tahun.map((tahun) => (
                <li
                  key={tahun}
                  onClick={() => {
                    pickYears(tahun);
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  {tahun}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
<link
  rel="stylesheet"
  href="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css"
/>;
<script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></script>;
