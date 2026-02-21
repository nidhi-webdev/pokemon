import { useReducer } from "react"

export const UseReducer = () => {
    const reducer = (state, action ) => {

    }

    const [count, dispatch] = useReducer(reducer, 0)

    return <div className="flex flex-col justify-center items-center p-10 gap-4">
        <h1></h1>
        <button className="bg-amber-600 px-4 py-2 rounded cursor-pointer"> Increment </button>
        <button className="bg-green-600 px-4 py-2 rounded cursor-pointer"> Decrement </button>
    </div>
}