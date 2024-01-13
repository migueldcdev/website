import { useState } from "react"
import { ThemeContext, themes } from "./ThemeContext"


export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(themes.dark)

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === themes.light ? themes.dark : themes.light);
      };
    
      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );  
}