import { useState, useEffect } from 'react';
import axios from 'axios';

const Filter = ({ setFilteredResult, setCurrentPage, open, isOpen, openCountry, isOpenCountry, openYear, isOpenYear }) => {
  const [data, setData] = useState([]);
  const [selectGenre, isSelectGenre] = useState('Genre');
  const [selectCountry, isSelectCountry] = useState('Negara');
  const [selectYear, isSelectYear] = useState('Tahun');
  const dataGenre = ['Animasi', 'Non Animasi'];
  const dataCountry = ['Nasional', 'Internasional'];
  const tahun = ['< 2000', '2000 - 2010', '2011 - 2020', '> 2020'];

  useEffect(() => {
    const getFilms = async () => {
      axios.get(`http://localhost:4000/api/v1/movies`).then((res) => {
        const persons = res.data;
        setData(persons);
      });
    };
    getFilms();
  }, []);

  const getOpenGenre = () => {
    isOpen(!open);
    isOpenCountry(false);
    isOpenYear(false);
  };
  const pickGenre = (value) => {
    if (value === 'Genre') {
      setFilteredResult(data);
    } else {
      const filteredData = data.filter((item) => item.genre === value);
      // console.log(filteredData);
      setFilteredResult(filteredData);
      setCurrentPage(1);
    }

    isSelectGenre(value);
    isSelectCountry('Negara');
    isSelectYear('Tahun');
    isOpen(!open);
  };
  const getOpenCountry = () => {
    isOpen(false);
    isOpenCountry(!openCountry);
    isOpenYear(false);
  };
  const pickCountry = (value) => {
    if (value === 'Negara') setFilteredResult(data);
    else {
      const filteredData = data.filter((item) => item.country === value);
      // console.log(filteredData);
      setFilteredResult(filteredData);
      setCurrentPage(1);
    }

    isSelectGenre('Genre');
    isSelectCountry(value);
    isSelectYear('Tahun');
    isOpenCountry(!openCountry);
  };
  const getOpenYear = () => {
    isOpen(false);
    isOpenCountry(false);
    isOpenYear(!openYear);
  };
  const pickYear = (value) => {
    if (value === 'Tahun') setFilteredResult(data);
    else {
      let filteredData = [];
      if (value === '< 2000') {
        filteredData = data.filter((item) => item.year < 2000);
      } else if (value === '2000 - 2010') {
        filteredData = data.filter((item) => item.year >= 2000 && item.year <= 2010);
      } else if (value === '2011 - 2020') {
        filteredData = data.filter((item) => item.year > 2010 && item.year <= 2020);
      } else {
        filteredData = data.filter((item) => item.year > 2020);
      }
      // console.log(filteredData);
      setFilteredResult(filteredData);
      setCurrentPage(1);
    }

    isSelectGenre('Genre');
    isSelectCountry('Negara');
    isSelectYear(value);
    isOpenYear(!openYear);
  };

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-8 md:gap-48 py-16 bg-primary text-white">
        {/* filter genre */}
        <div className="cursor-pointer">
          <div
            onClick={getOpenGenre}
            className="inline-flex border-4 border-secondary items-center px-8 py-2 text-base font-medium text-center text-white bg-transparent rounded-full hover:text-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <p>{selectGenre}</p>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <ul className={`py-1 ${open ? 'show' : 'hidden'} absolute z-10 text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
            <li onClick={() => pickGenre('Genre')} className="block px-4 py-2 font-black text-base text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              <p>Genre...</p>
            </li>
            {dataGenre.map((data, index) => (
              <li key={index} onClick={() => pickGenre(data)} className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                <p>{data}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* filter negara */}
        <div className=" cursor-pointer">
          <div
            onClick={getOpenCountry}
            className="inline-flex items-center px-8 py-2 text-base border-4 border-secondary font-medium text-center text-white bg-transparent rounded-full hover:text-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <p>{selectCountry}</p>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <ul className={`py-1 ${openCountry ? 'show' : 'hidden'} absolute z-10 text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
            <li
              onClick={() => {
                pickCountry('Negara');
              }}
              className="block px-4 py-2 text-base font-black text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              <p>Negara...</p>
            </li>
            {dataCountry.map((data, index) => (
              <li
                key={index}
                onClick={() => {
                  pickCountry(data);
                }}
                className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                <p>{data}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* filter tahun */}
        <div className="cursor-pointer">
          <div
            onClick={getOpenYear}
            className="inline-flex items-center px-8 py-2 border-4 border-secondary text-base font-medium text-center text-white bg-transparent rounded-full hover:text-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <p>{selectYear}</p>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <ul className={`py-1 ${openYear ? 'show' : 'hidden'} absolute z-10 text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
            <li onClick={() => pickYear('Tahun')} className="block px-4 py-2 font-black text-base text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              <p>Tahun...</p>
            </li>
            {tahun.map((tahun) => (
              <li
                key={tahun}
                onClick={() => {
                  pickYear(tahun);
                }}
                className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                <p>{tahun}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filter;
<link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.min.css" />;
<script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></script>;
