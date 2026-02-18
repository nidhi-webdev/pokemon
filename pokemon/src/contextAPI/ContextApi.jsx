// Create Context Component 

import { createContext } from "react";


export const BoiContext = createContext()





// make provider component 
export const BioProvider = ({ children }) => {

    const data = "Nidhi"
    console.log(children);


    return (
    <BoiContext.Provider value={data}>
        {children}
    </BoiContext.Provider>
    )
}