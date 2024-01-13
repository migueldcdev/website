import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";

export const ToggleThemeSwitch = () => {

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <Switch
          defaultSelected
          size="lg"
          color="success"
          startContent={<SunIcon />}
          endContent={<MoonIcon />}
        >
          Dark mode
        </Switch>
      );
}