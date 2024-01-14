import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


import { FaMoon } from 'react-icons/fa'

import { MdSunny } from 'react-icons/md'

export const ToggleThemeSwitch = () => {

    const { theme,toggleTheme} = useContext(ThemeContext)
    
    return (
        <div>
          {theme === 'light' 
          ?
          <button onClick={toggleTheme} className="rounded p-2 bg-indigo-500">
            <FaMoon className="text-white"/>
          </button>
          :
          <button onClick={toggleTheme} className="rounded p-2 bg-yellow-500">
            <MdSunny className="text-white"/>
          </button>
        }
        </div>
      );
}