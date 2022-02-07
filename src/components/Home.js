import React from "react";
import { FiSearch } from "react-icons/fi";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
      <Header />
        <div className="flex justify-center items-center space-x-5 flex-col p-5 h-screen">
          <h1 className="sm:text-4xl md:text-6xl lg:text-8xl mb-8 text-center">
            Search<span>Tap</span>
          </h1>
          <div className="flex flex-row items-center w-full justify-center gap-x-5">
            <input className="rounded-lg w-md w-6/12 border shadow-sm outline-none p-1 text-black hover:shadow-lg h-12" />
            <button>
              <FiSearch size={32} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
