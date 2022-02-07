import React, { useState} from 'react';

import Home from './components/Home';
import AppContext from './context/context';

function App() {
  
  const [darkTheme, setDarkTheme] = useState(false)
  
  return (
    <AppContext.Provider value={{darkTheme, setDarkTheme}}>
      <div className={darkTheme ? 'dark' : ''}>
        <div className='dark:bg-neutral-900 bg-gray-100 dark:text-gray-200 black min-h-screen  '>
          <Home/>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
