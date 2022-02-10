import React, { createContext, useState } from "react";

export const AppContext = createContext()

const AppProvider = ({ children }) => {
    
    const [darkTheme, setDarkTheme] = useState(false);
    const [searchText, setSearchText] = useState("")
    const [lang, setLang] = useState("Portuguese")

    const saveSearchText = async (searchText) => {
        setSearchText(searchText)
    }

    const saveLang = (newLang) => {
        setLang(newLang)
    }

    return(
        <AppContext.Provider
        value={{
            darkTheme,
            setDarkTheme,
            searchText,
            saveSearchText,
            lang, 
            saveLang
        }}
        >
            {children}
        </AppContext.Provider>
    )
} 

export default AppProvider;
