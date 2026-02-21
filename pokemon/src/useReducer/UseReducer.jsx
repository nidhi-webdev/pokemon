import { useReducer } from "react"

export const UseReducer = () => {
    const reducer = (state, action) => {
        console.log(state, action);

        if(action.type === "INCREMENT") {
            return state + 1 
        } 
        if(action.type === "DECREMENT") {
            return state - 1 
        }
        

    }

    const [count, dispatch] = useReducer(reducer, 0)

    return <div className="flex flex-col justify-center items-center p-10 gap-4">
        <h1 className="font-extrabold text-5xl"> {count} </h1>
        <button onClick={() => dispatch({ type: "INCREMENT"})}
            className="bg-amber-600 px-4 py-2 rounded cursor-pointer"> Increment </button>
        <button onClick={() => dispatch({type: "DECREMENT"})}
            className="bg-green-600 px-4 py-2 rounded cursor-pointer"> Decrement </button>
    </div>
}