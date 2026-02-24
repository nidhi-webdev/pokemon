import { useState } from "react"
import MemoCountChild from './MemoCount'

export const ReactMemoParent = () => {
    const [count, setCount] = useState(0)

    const myBoiData = {
        name: "Test",
        age: 30
    }

    return <>
        <div className="flex flex-col justify-center items-center p-10 gap-6">
            <h1 className="font-extrabold text-5xl"> {count} </h1>
            <button onClick={() => setCount((prev) => prev + 1)}
                className="bg-sky-600 px-4 py-2 rounded text-white cursor-pointer"> Increment Counter </button>
        </div>

        <MemoCountChild boiData={myBoiData} />
    </>

}