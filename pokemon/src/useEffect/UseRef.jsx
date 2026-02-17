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




export const ChildRef = () => {

}