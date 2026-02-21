import { useReducer } from "react"

export const UseReducer = () => {
const initialState = {
    count: 0
}

    const reducer = (state, action) => {
        switch(action.type) {
            case "INCREMENT":
            return {count: state.count + 1 }

            case "DECREMENT":
            return {count: state.count - 1 }

            case "RESET": 
            return {count: 0 }

            default: 
            return state


        }


    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return <div className="flex flex-col justify-center items-center p-10 gap-4">
        <h1 className="font-extrabold text-5xl"> {state.count} </h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}
            className="bg-amber-600 px-4 py-2 rounded cursor-pointer text-white"> Increment </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}
            className="bg-green-600 px-4 py-2 rounded cursor-pointer text-white"> Decrement </button>
        <button onClick={() => dispatch({type: "RESET"})}
        className="bg-sky-600 px-9 py-2 rounded cursor-pointer text-white"> Reset  </button>
       
            
    </div>
}