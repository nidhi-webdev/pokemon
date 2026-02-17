import { useRef } from 'react'

const UserefExample = () => {
    const username = useRef(null)
    const password = useRef(null)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log("Username is:", username.current);
        console.log("Password is:", password.current);
      


    }

    return (
        <div className='bg-blue-950 min-h-screen p-8 text-center'>
            <h1 className='text-white text-5xl font-bold'>Hello Use Effect</h1>

            <form onSubmit={handleFormSubmit}
                className='flex flex-col gap-5 w-80'>

                <input className='bg-white' id='username' ref={username}
                    type='text' placeholder='Enter Name' />

                <input className='bg-white ' id='password' ref={password}
                    type='text' placeholder='Enter Password' />

                <button className='bg-amber-50 px-4 py-3 cursor-pointer' > Submit </button>
            </form>
        </div>
    )
}

export default UserefExample
