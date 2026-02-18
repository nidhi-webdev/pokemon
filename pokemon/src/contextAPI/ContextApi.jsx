// Create Context Component 

import { createContext } from "react";


export const BoiContext = createContext()


// make provider component 
export const BoiProvider = () => {

    return <BoiContext.Provider>

    </BoiContext.Provider>
}
