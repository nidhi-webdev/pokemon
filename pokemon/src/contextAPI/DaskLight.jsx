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


    return <div className="p-4 flex flex-col justify-center items-center min-h-screen gap-5">
        <h1 className="font-extrabold text-4xl"> Dark Light Mode Website </h1>
        <p className="font-bold text-2xl"> Hello !! My React v19 Fans </p>
        <button className="bg-blue-500 rounded px-4 py-2 hover:bg-blue-600 cursor-pointer"
            onClick={handleToggleTheme}>
            {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
    </div>
}