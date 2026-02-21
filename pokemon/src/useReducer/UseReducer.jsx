import { useReducer } from "react"

export const UseReducer = () => {
    const reducer = (state, action) => {
        console.log(state, action);

        if (action.type === "INCREMENT") {
            return state + 1
        }
        if (action.type === "DECREMENT") {
            return state - 1
        }
        if(action.type === "RESET") {
            return (state = 0)
        }


    }

    const [count, dispatch] = useReducer(reducer, 0)

    return <div className="flex flex-col justify-center items-center p-10 gap-4">
        <h1 className="font-extrabold text-5xl"> {count} </h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}
            className="bg-amber-600 px-4 py-2 rounded cursor-pointer text-white"> Increment </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}
            className="bg-green-600 px-4 py-2 rounded cursor-pointer text-white"> Decrement </button>
        <button onClick={() => dispatch({type: "RESET"})}
        className="bg-sky-600 px-9 py-2 rounded cursor-pointer text-white"> Reset  </button>
       
            
    </div>
}