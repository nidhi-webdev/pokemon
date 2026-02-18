// Create Context Component 

import { createContext } from "react";


export const BoiContext = createContext()


// make provider component 
export const BoiProvider = ({chi}) => {

    const data = "Nidhi"

    return <BoiContext.Provider value={data}>

    </BoiContext.Provider>
}
