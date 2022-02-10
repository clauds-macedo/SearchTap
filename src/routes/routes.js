import React from "react";
import { Route, Routes, Redirect, BrowserRouter } from "react-router-dom";
import Home from "../components/Home.js";
import Results from "../components/Results.js";

const SearchRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/results" element={<Results />} />
          <Route path="/images" element={<Results />} />
          <Route path="/news" element={<Results />} />
        </Routes>
    </BrowserRouter>
  );
};

export default SearchRoutes;
