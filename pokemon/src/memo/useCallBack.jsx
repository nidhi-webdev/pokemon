import { useState, memo } from "react"


const Button = memo(({ onClick, children }) => {
console.log(`Rendering Button: ${children}`)


    return (
        <button className={`px-4 py-2 rounded cursor-pointer text-white
            ${children.trim() === "Increment" ? "bg-green-800" : "bg-red-800"} `}
            onClick={onClick}> {children}
        </button>
    )
})







export const UseCallBack = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        console.log("Increment Inside");
        setCount((prev) => prev + 1)

    }

    const decrement = () => {
        setCount((prev) => prev - 1)
    }

    return (
        <div className="p-4 flex flex-col justify-center items-center h-1vh tracking-wider gap-4">
            <h1 className="text-5xl font-extrabold"> Count: {count} </h1>
            <Button onClick={increment} > Increment </Button>

            <Button onClick={decrement}> Decrement </Button>

        </div>
    )
}