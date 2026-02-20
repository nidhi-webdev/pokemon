// creating a Context

import { createContext, use, useState } from "react";


export const ThemeContext = createContext()


// Provider Component 

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark")


    const handleToggleTheme = () => {
        return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
    }

    return <ThemeContext.Provider value={{ theme, handleToggleTheme }} >
        {children}
    </ThemeContext.Provider>
}


// Component 
export const DarkLightComp = () => {
    const { theme, handleToggleTheme } = use(ThemeContext)


    return <div>
        <h1> Dark Light Mode Website </h1>
        <p> Hello !! My React v19 Fans </p>
        <button onClick={handleToggleTheme}> {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"} </button>
    </div>
}