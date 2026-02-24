export const UseCallBack = () => {
    return (
        <div className="p-4 flex flex-col justify-center items-center h-1vh tracking-wider gap-4">
            <h1 className="text-5xl font-extrabold"> Count:  </h1>
            <button className="bg-green-800 px-4 py-2 rounded"> Increment </button>
            <button className="bg-red-800 px-4 py-2 rounded"> Decrement </button>
        </div>
    )
}