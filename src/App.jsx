import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

import { ToggleThemeSwitch } from "./components/ToggleThemeSwitch";

function App() {

  const { theme } = useContext(ThemeContext)
  
 
  return (
    <div className={theme}>
     <ToggleThemeSwitch />
    </div>
  );
}

export default App;
