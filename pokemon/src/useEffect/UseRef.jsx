import { useId, useRef } from "react"

export const UseRefParent = () => {
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)

    const handleFormSubmit = (e) => {
        e.preventDefault()
       console.log("username is:", usernameRef.current.value);
       console.log("Password is:", passwordRef.current.value)
       usernameRef.current.value = ""
       passwordRef.current.value = ""
    }

    return (
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 p-4 ">
            <ChildRef label="Username" ref={usernameRef} type="text" />
            <ChildRef label="Password" ref={passwordRef} type="password" />
            <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded">Submit</button>
        </form>
    )
}

export const ChildRef = (props) => {
    const id = useId()

    return (
        <div className="flex flex-col">
            <label htmlFor={id}>{props.label}</label>
            <input id={id} type={props.type} ref={props.ref} className="text-black p-1 rounded" />
        </div>
    )
}