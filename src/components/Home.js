import React from "react";
import Header from "./Header";
import Searchbar from "./Searchbar";

const Home = () => {

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex justify-center items-center space-x-5 flex-col p-5 mb-10 h-screen">
          <h1 className="sm:text-6xl md:text-6xl lg:text-8xl mb-8 text-center">
            Search<span>Tap</span>
          </h1>
        <Searchbar/>
        </div>
      </div>
    </>
  );
};

export default Home;
