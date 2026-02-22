import { useState } from "react";


const Expensive = () => {
     const sum = () => {
        console.log("Calculating Sum");

        let i = 0;
        for(i = 0; i <= 1000000000; i++) {
         i = i + 1 
        }
        return i;  
     }

     const total =  sum()
     return <p> Sum: {total} </p>
}


// parent 
const MemoParentComponent = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Expensive />

            <button onClick={() => setCount((count + 1 ))}> Re-render Parent </button>
            <p> Parent re-renders: {count}  </p>
        </div>
    )
}