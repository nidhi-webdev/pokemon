// creating a Context

import { createContext, useState } from "react";


export const ThemeContext = createContext()


// Provider Component 

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark")

    return <ThemeContext.Provider value={theme} > {children}   </ThemeContext.Provider>
}


// Component 
export const DarkLightComp = () => {
    return <div>
        <h1> Dark Light Mode Website </h1>
        <p> Hello !! My React v19 Fans </p>
        <button> Switch to Light Mode </button>
    </div>
}