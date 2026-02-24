import { useRef, memo } from "react";

const MemoCountChild = () => {
    const renderCount = useRef(0)
    console.log("I am from Render Count", renderCount);



    return <>
        <p> Nothing change here but I have now Rendered:
            <span className="text-red-600 text-4xl"> {renderCount.current++} </span>

        </p>
    </>
}

export default memo(MemoCountChild)