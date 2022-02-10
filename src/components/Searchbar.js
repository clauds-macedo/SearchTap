import React, { useState, useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AppContext } from "../context/context";
import { useLocation } from "react-router-dom";

const Searchbar = () => {
  const [newSearchText, setnewSearchText] = useState("");
  const { searchText, saveSearchText } = useContext(AppContext);
  const location = useLocation().pathname;

  return (
    <div className="flex flex-row items-center w-screen justify-center gap-x-5 mt-4">
      <input
        className="rounded-lg w-md md:w-8/12 sm:w-56 border shadow-md border-r-stone-50	 outline-none p-1 text-black hover:shadow-lg h-12"
        defaultValue={searchText}
        onChange={(e) => {
          setnewSearchText(e.target.value);
        }}
      />
      {location === "/" ? (
        <Link to="results">
          <button onClick={() => saveSearchText(newSearchText)}>
            <FiSearch size={32} />
          </button>
        </Link>
      ) : (
        <button onClick={() => saveSearchText(newSearchText)}>
          <FiSearch size={32} />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
