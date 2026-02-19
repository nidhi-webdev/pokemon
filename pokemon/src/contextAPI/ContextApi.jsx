// Create Context Component 

import { createContext, useContext } from "react";


export const BoiContext = createContext()





// make provider component 
export const BioProvider = ({ children }) => {

    const name = "Nidhi"
    const age = 30


    return (
    <BoiContext.Provider value={{name , age }}>
        {children}
    </BoiContext.Provider>
    )
}


// customs hook
export const useBoiContext = () => {
    const context = useContext(BoiContext)
    return context
}
