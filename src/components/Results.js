import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { AppContext } from "../context/context";
import api from "../services/api";
import { useLocation } from "react-router-dom";
import Searchbar from "./Searchbar";
import { Loading } from "./Loading";
import { NavLink } from "react-router-dom";
import { FiCamera, FiSearch } from "react-icons/fi";

const Results = () => {
  const { searchText, lang } = useContext(AppContext);
  const [searchData, setSearchData] = useState([]);
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const currentLocation = useLocation().pathname;
  const [numberOfImages, setNumberOfImages] = useState(4);
  const navLinkTranslation = lang === "Portuguese" ? (
    {
      "all":"Todos",
      "images":"Imagens",
      "news":"Notícias",
      "videos":"Vídeos"
    }
  ) : (
    {
      "all":"All",
      "images":"Images",
      "news":"News",
      "videos":"Vídeos"
    }
  )
  const links = [
    { url: "/results", text: navLinkTranslation.all },
    { url: "/images", text: navLinkTranslation.images },
    { url: "/news", text: navLinkTranslation.news },
    { url: "/videos", text: navLinkTranslation.videos }
  ];


  var pageResultsArray = [];

  const getSearchResults = async () => {
    setIsLoading(true);
    setNumberOfImages(4);
    const response = await api.get(`/search/q=${searchText}&num=20`);
    setSearchData([response.data]);
    setIsLoading(false);
  };

  const getImageResults = async () => {
    if (currentLocation === "/images") {
      setIsLoading(true);
      setNumberOfImages(30);
    }
    const response = await api.get(`/images/q=${searchText}&num=${numberOfImages}`);
    setImageData(response.data.image_results);
    setIsLoading(false);
  };

  useEffect(() => {
    getSearchResults();
    getImageResults();
  }, [searchText, currentLocation, numberOfImages]);

  searchData.map((results) => {
    pageResultsArray = results.results;
  });

  if (isLoading) return <Loading />;
  return (
    <div>
      <div>
        <Header />
        <Searchbar />
        <div>
          <div className="flex justify-center items-center mt-4 gap-x-5 sm:flex-wrap">
            {links.map(({ url, text }) => (
              <NavLink
                to={url}
                activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
              >
                <div className="flex flex-row items-center gap-x-1">
                  {text === navLinkTranslation.all ? (
                    <FiSearch />
                  ) : text === navLinkTranslation.images ? (
                    <FiCamera />
                  ) : null}
                  {text}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="p-5 w-screen">
        {currentLocation === "/results" ? (
          <div className="flex flex-wrap justify-center items-center">
            {imageData.map(({ image, link: { href, title } }, index) => (
              <a
                href={href}
                target="_blank"
                key={index}
                rel="noreferrer"
                className="sm:p-3 p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <img
                  src={image?.src}
                  alt={title}
                  loading="lazy"
                  className="rounded"
                />
              </a>
            ))}
          </div>
        ) : null}
        {currentLocation === "/results" ? (
          pageResultsArray.map((results, index) => {
            var urlMainLink = results.link.substring(
              0,
              results.link.indexOf(".com") + 4
            );
            return (
              <div
                className="flex flex-wrap sm:my-5 lg:ml-40 justify-center flex-col
                  "
                key={index}
              >
                <h2 className="text-xs dark:text-gray-300">
                  {urlMainLink !== "htt" ? urlMainLink : results.link}
                </h2>
                <div>
                  <a
                    className="text-sm text-cyan-600 text-lg cursor-pointer"
                    href={results.link}
                  >
                    {results.title}
                  </a>
                </div>
                <p className="text-xs lg:w-6/12">
                  {results.description
                    ? results.description.substring(0, 320)
                    : null}
                </p>
              </div>
            );
          })
        ) : currentLocation === "/images" ? (
          <div className="flex flex-wrap justify-center items-center">
            {imageData.map(({ image, link: { href, title } }, index) => (
              <a
                href={href}
                target="_blank"
                key={index}
                rel="noreferrer"
                className="sm:p-3 p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <img
                  src={image?.src}
                  alt={title}
                  loading="lazy"
                  className="rounded"
                />
                <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Results;
