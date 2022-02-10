import React, { useContext, useState } from "react";
import SearchRoutes from "./routes/routes";

import Home from "./components/Home";
import { AppContext } from "./context/context";

function App() {
  
  const {darkTheme} = useContext(AppContext)

  return (
    <div className={ darkTheme ? "dark" : '' }>
      <div className="dark:bg-neutral-900 bg-gray-200 dark:text-gray-200 black min-h-screen overflow-hidden  ">
        <SearchRoutes>
          <Home />
        </SearchRoutes>
      </div>
    </div>
  );
}

export default App;
