import React, { useContext } from "react";
import AppContext from "../context/context";

export default function Toggle() {

    const { darkTheme, setDarkTheme } = useContext(AppContext)
    console.log(darkTheme)
  return (
    <div>
      <div className="mb-3 mt-2.5">
        <div className="relative inline-block w-10 mr-2 align-middle select-none">
          <input
            type="checkbox"
            name="toggle"
            id="Blue"
            className="checked:bg-gray-900 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-amber-400 border-4 appearance-none cursor-pointer
            "
            onClick={() => 
                setTimeout(() => {
                    setDarkTheme(!darkTheme)
                }, 200)
            }
          />
          <label
            for="Blue"
            className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
          ></label>
        </div>
      </div>
    </div>
  );
}
