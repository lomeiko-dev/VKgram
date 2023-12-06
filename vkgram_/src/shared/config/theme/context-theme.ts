import { createContext } from "react";
import { IThemeContext } from "./types";
import { lightTheme } from "./themes";

export const ThemeContext = createContext<IThemeContext>({
    theme: lightTheme, 
    changeTheme: () => {}
})