// creating a Context

import { createContext } from "react";


export const ThemeContext = createContext()


// Provider Component 

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(second)

    return <ThemeContext.Provider value={theme} > {children}   </ThemeContext.Provider>
}


// Component 
export const darkLightComp = () => {
    return <div>
        <h1></h1>
        <p></p>
        <button></button>
    </div>
}