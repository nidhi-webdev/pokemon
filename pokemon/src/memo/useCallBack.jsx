import { useState } from "react"

export const UseCallBack = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        console.log("Increment Inside");
        setCount((prev) => prev + 1)

    }

    const decrement = () => {
        console.log("")
    }

    return (
        <div className="p-4 flex flex-col justify-center items-center h-1vh tracking-wider gap-4">
            <h1 className="text-5xl font-extrabold"> Count: {count} </h1>
            <button onClick={increment}
                className="bg-green-800 px-4 py-2 rounded"> Increment </button>
            <button onClick={decrement}
                className="bg-red-800 px-4 py-2 rounded"> Decrement </button>
        </div>
    )
}