import React, { useContext } from "react";
import { AppContext } from "../App";

const SearchBox = () => {
  const {setCategorey} = useContext(AppContext);

  const handleSelectChange = (e) => {
    e.preventDefault();
    setCategorey(e.target.categorey.value);
  };
  const options = [
    { value: "all", label: "all" },
    { value: "national", label: "national" },
    { value: "business", label: "business" },
    { value: "sports", label: "sports" },
    { value: "world", label: "world" },
    { value: "politics", label: "politics" },
    { value: "technology", label: "technology" },
    { value: "startup", label: "startup" },
    { value: "entertainment", label: "entertainment" },
    { value: "miscellaneous", label: "miscellaneous" },
    { value: "hatke", label: "hatke" },
    { value: "science", label: "science" },
    { value: "automobile", label: "automobile" },
  ];
  return (
    <div className="flex items-center justify-center py-20 bg-blue-200 container mx-auto">
      <form className="w-64" onSubmit={handleSelectChange}>
        <label htmlFor="selectInput" className="block mb-2 text-xl font-bold">
          Select Categorey:
        </label>
        <div className="relative">
          <select
            name="categorey"
            className="block w-full py-2 pl-3 pr-8 text-gray-700 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <button
          to="categorey"
          type="submit"
          className="px-4 py-2 rounded-md bg-blue-500 mt-3 w-full text-white font-semibold"
        >
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
