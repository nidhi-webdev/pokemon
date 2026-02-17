import { useId } from "react"
import { useRef } from "react"

export const UseRefParent = () => {
    const username = useRef(null)
    const password = useRef(null)

    const handleFormSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <form onSubmit={handleFormSubmit}>
            <ChildRef label="username" ref={username} />
            <ChildRef label="password" ref={password} />
        </form>
    )
}




export const ChildRef = (props) => {
    const id = useId()

    return (
        <div>
            <label htmlFor={id}> {props.label}  </label>
            <input type="text" ref={props.ref} />

            <label htmlFor={id}> {props.label}  </label>
            <input type="password" ref={props.ref} />

        </div>
    )
}