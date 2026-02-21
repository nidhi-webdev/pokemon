import { useReducer } from "react"

export const UseReducer = () => {
    const reducer = (state, action ) => {

    }

    const [count, dispatch] = useReducer(reducer, 0)

    return <div className="flex flex-col justify-center min-h-screen">
        <h1></h1>
        <button> Increment </button>
        <button> Decrement </button>
    </div>
}