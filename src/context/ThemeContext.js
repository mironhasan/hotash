import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const themeMode = localStorage.getItem("theme");
    const themeClass = document.querySelector("html").classList;
    const [theme, setTheme] = useState(themeMode ? themeMode : "dark_mode");

    const lightTheme = () => {
        setTheme("light_mode");
        localStorage.setItem("theme", "light_mode");
        themeClass.replace("dark_mode", "light_mode");
    }

    const darkTheme = () => {
        setTheme("dark_mode");
        localStorage.setItem("theme", "dark_mode");
        themeClass.replace("light_mode", "dark_mode");
    }

    const toggleTheme = () => {
        if(themeMode !== "light_mode") lightTheme();
        else darkTheme();
    }

    if(themeMode !== 'light_mode') themeClass.replace("light_mode", "dark_mode");
    else themeClass.replace("dark_mode", "light_mode");

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}