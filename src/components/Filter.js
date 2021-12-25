const Filter = () => {
  return (
    <div className="py-16 text-white" style={{ backgroundColor: '#1B2124' }}>
      <div class="flex flex-row justify-center content-center">
        <div className="mx-16">
          <button
            id="dropdownDividerButton"
            data-dropdown-toggle="dropdownDivider"
            className="inline-flex items-center px-8 py-2 text-sm font-medium text-center text-white bg-transparent rounded-full hover:text-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            style={{ border: '3px solid #04A3DD' }}
          >
            <p>Filter Genre</p>
            <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          <div id="dropdownDivider" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul className="py-1" aria-labelledby="dropdownDividerButton">
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                <p>Animasi</p>
              </li>
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                <p>Non animasi</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-16">
          <button
            id="dropdownDividerButton"
            data-dropdown-toggle="dropdownDivider"
            className="inline-flex items-center px-8 py-2 text-sm font-medium text-center text-white bg-transparent rounded-full hover:text-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            style={{ border: '3px solid #04A3DD' }}
          >
            <p>Filter Negara</p>
            <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          <div id="dropdownDivider" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul className="py-1" aria-labelledby="dropdownDividerButton">
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                <p>Indonesia</p>
              </li>
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                <p>Mancanegara</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-16">
          <button
            id="dropdownDividerButton"
            data-dropdown-toggle="dropdownDivider"
            className="inline-flex items-center px-8 py-2 text-sm font-medium text-center text-white bg-transparent rounded-full hover:text-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            style={{ border: '3px solid #04A3DD' }}
          >
            <p>Filter Tahun</p>
            <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          <div id="dropdownDivider" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul className="py-1" aria-labelledby="dropdownDividerButton">
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                <p>2018</p>
              </li>
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                <p>2019</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
